import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, UseGuards, Get, Request, Param, HttpException, HttpStatus, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResetPasswordService } from './users-reset-password.service';
import { JwtService } from '@nestjs/jwt';
import { BoilerplateEmailService } from '@app/boilerplate-email';
import { compare } from 'bcryptjs';
import { JwtGuard } from '../../utils/guards/jwt/jwt.guard';
import { userMapForUser, userMap } from '@app/boilerplate-database/modules/users/functions/user-map.function';
import { UserSignUpDto } from './dto/user-sign-up.dto';
import { UserSignInDto } from './dto/user-sign-in.dto';
import { UserResetPasswordCreateDto } from './dto/user-reset-password-create.dto';
import { userResetPasswordMap } from '@app/boilerplate-database/modules/users/functions/user-reset-password-map.function';
import { UserResetPasswordPatchDto } from './dto/user-reset-password-patch.dto';
import { UserChangePasswordDto } from './dto/user-change-password.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService,
    private readonly usersResetPasswordService: UsersResetPasswordService,
    private readonly jwtService: JwtService,
    private readonly boilerplateEmailService: BoilerplateEmailService
  ) { }

  @Post('sign-up')
  public async signUp(
    @Body() userSignUpDto: UserSignUpDto
  ): Promise<any> {

    const userFound = await this.usersService.findOne({ where: { email: userSignUpDto.email } });
    if (userFound !== undefined) {
      throw new HttpException('An user with that email already exists.', HttpStatus.BAD_REQUEST);
    }

    const userCreatedId = (await this.usersService.create(userSignUpDto)).raw.insertId;
    const userCreated = await this.usersService.findOne({ where: { id: userCreatedId } });
    const userCreatedMappedForUser = userMapForUser(userCreated);

    return {
      message: 'Your account has been successfully created.',
      data: userCreatedMappedForUser
    };

  }

  @Post('sign-in')
  public async signIn(
    @Body() userSignInDto: UserSignInDto
  ): Promise<any> {

    const message = 'Email or password is incorrect.';

    const userFound = await this.usersService.findOne({ where: { email: userSignInDto.email } });
    if (userFound === undefined) {
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }

    const userFoundMapped = userMap(userFound);

    const isPasswordCorrect = await compare(userSignInDto.password, userFoundMapped.password);
    if (isPasswordCorrect === false) {
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }

    if (userFoundMapped.status === false) {
      throw new HttpException('Your user is inactive. Please contact your user to enable it.', HttpStatus.BAD_REQUEST);
    }

    return {
      message: 'Your session has been successfully started.',
      data: {
        accessToken: this.jwtService.sign({ id: userFoundMapped.id }),
        expiresIn: +process.env.APP_BOILERPLATE_USER_API_EXPIRES_IN
      }
    };

  }

  @Post('reset-password')
  public async resetPasswordRequest(
    @Body() userResetPasswordCreateDto: UserResetPasswordCreateDto
  ): Promise<any> {

    const userFound = await this.usersService.findOne({ where: { email: userResetPasswordCreateDto.email } });
    if (userFound === undefined) {
      throw new HttpException('This email is incorrect.', HttpStatus.BAD_REQUEST);
    }

    const userFoundMapped = userMap(userFound);

    if (userFoundMapped.status === false) {
      throw new HttpException('Your user is inactive. Please contact your user to enable it.', HttpStatus.BAD_REQUEST);
    }

    const userResetPasswordCreatedId = (await this.usersResetPasswordService.create({ userId: userFoundMapped.id })).raw.insertId;
    const userResetPasswordCreated = await this.usersResetPasswordService.findOne({ where: { id: userResetPasswordCreatedId } });
    const userResetPasswordCreatedMapped = userResetPasswordMap(userResetPasswordCreated);

    this.boilerplateEmailService.sendResetPasswordEmail(
      userFoundMapped.email,
      userFoundMapped.name,
      `${process.env.APP_BOILERPLATE_USER_WEB_URL}/reset-password?token=${userResetPasswordCreatedMapped.token}`
    );

    return {
      message: 'The password reset email has been sent successfully.',
      data: userResetPasswordCreatedMapped
    };

  }

  @Patch('reset-password/:userResetPasswordToken')
  public async resetPassword(
    @Param('userResetPasswordToken') userResetPasswordToken: string,
    @Body() userResetPasswordPatchDto: UserResetPasswordPatchDto
  ): Promise<any> {

    const userResetPasswordFound = await this.usersResetPasswordService.findOne({ where: { token: userResetPasswordToken } });
    if (userResetPasswordFound === undefined) {
      throw new HttpException('This password reset link does not exist.', HttpStatus.BAD_REQUEST);
    }

    const userResetPasswordFoundMapped = userResetPasswordMap(userResetPasswordFound);

    const userFound = await this.usersService.findOne({ where: { id: userResetPasswordFoundMapped.userId } });
    const userFoundMapped = userMap(userFound);

    if (userFoundMapped.status === false) {
      throw new HttpException('Your user is inactive. Please contact your user to enable it.', HttpStatus.BAD_REQUEST);
    }

    if (userResetPasswordFoundMapped.updatedAt !== null) {
      throw new HttpException('This password reset link has already been used.', HttpStatus.BAD_REQUEST);
    }

    const minutes = 60;
    const minutesInSeconds = minutes * 60;
    const minutesInMilliseconds = minutesInSeconds * 1000;

    const isExpired = (Date.now() - userResetPasswordFoundMapped.createdAt) >= minutesInMilliseconds;

    if (isExpired === true) {
      throw new HttpException('This password reset link has expired.', HttpStatus.BAD_REQUEST);
    }

    await this.usersService.update({ id: userFoundMapped.id }, { password: userResetPasswordPatchDto.password });
    await this.usersResetPasswordService.update({ id: userResetPasswordFoundMapped.id }, { updatedAt: Date.now() });

    return {
      message: 'Your password has been successfully reset.'
    };

  }

  @UseGuards(JwtGuard)
  @Get('me')
  public async me(
    @Request() request: any
  ): Promise<any> {

    const userFound = await this.usersService.findOne({ where: { id: request.user.id } });
    if (userFound === undefined) {
      throw new HttpException('Your user was not found.', HttpStatus.BAD_REQUEST);
    }

    const userFoundMappedForUser = userMapForUser(userFound);

    return {
      data: userFoundMappedForUser
    };

  }

  @UseGuards(JwtGuard)
  @Patch('change-password')
  async changePassword(
    @Request() request: any,
    @Body() userChangePasswordDto: UserChangePasswordDto
  ) {

    const userFound = await this.usersService.findOne({ where: { id: request.user.id } });
    const userFoundMapped = userMap(userFound);

    const isPasswordCurrentCorrect = await compare(userChangePasswordDto.passwordCurrent, userFoundMapped.password);
    if (isPasswordCurrentCorrect === false) {
      throw new HttpException('The current password entered is incorrect.', HttpStatus.BAD_REQUEST);
    }

    await this.usersService.update({ id: request.user.id }, { password: userChangePasswordDto.passwordNew });

    return {
      message: 'Your password has been successfully changed.'
    };

  }

}
