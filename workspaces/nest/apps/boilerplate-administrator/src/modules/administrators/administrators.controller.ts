import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, UseGuards, Get, Request, Query, Param, HttpException, HttpStatus, Patch } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { AdministratorsResetPasswordService } from './administrators-reset-password.service';
import { JwtService } from '@nestjs/jwt';
import { BoilerplateEmailService } from '@app/boilerplate-email';
import { compare } from 'bcryptjs';
import { JwtGuard } from 'apps/boilerplate-administrator/src/utils/guards/jwt/jwt.guard';
import { administratorMapForAdministrator, administratorMap } from '@app/boilerplate-database/modules/administrators/functions/administrator-map.function';
import { AdministratorSignInDto } from './dto/administrator-sign-in.dto';
import { AdministratorResetPasswordCreateDto } from './dto/administrator-reset-password-create.dto';
import { administratorResetPasswordMap } from '@app/boilerplate-database/modules/administrators/functions/administrator-reset-password-map.function';
import { AdministratorResetPasswordPatchDto } from './dto/administrator-reset-password-patch.dto';
import { AdministratorChangePasswordDto } from './dto/administrator-change-password.dto';
import { StatusPipe } from 'apps/boilerplate-administrator/src/utils/pipes/status/status.pipe';
import { AdministratorCreateDto } from './dto/administrator-create.dto';
import { AdministratorUpdateDto } from './dto/administrator-update.dto';

@ApiTags('administrators')
@Controller('administrators')
export class AdministratorsController {

  constructor(
    private readonly administratorsService: AdministratorsService,
    private readonly administratorsResetPasswordService: AdministratorsResetPasswordService,
    private readonly jwtService: JwtService,
    private readonly boilerplateEmailService: BoilerplateEmailService
  ) { }

  @Post('sign-in')
  public async signIn(
    @Body() administratorSignInDto: AdministratorSignInDto
  ): Promise<any> {

    const message = 'Email or password is incorrect.';

    const administratorFound = await this.administratorsService.findOne({ where: { email: administratorSignInDto.email } });
    if (administratorFound === undefined) {
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }

    const administratorFoundMapped = administratorMap(administratorFound);

    const isPasswordCorrect = await compare(administratorSignInDto.password, administratorFoundMapped.password);
    if (isPasswordCorrect === false) {
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }

    if (administratorFoundMapped.status === false) {
      throw new HttpException('Your administrator is inactive. Please contact your administrator to enable it.', HttpStatus.BAD_REQUEST);
    }

    return {
      message: 'Your session has been successfully started.',
      data: {
        accessToken: this.jwtService.sign({ id: administratorFoundMapped.id }),
        expiresIn: +process.env.APP_BOILERPLATE_ADMINISTRATOR_API_EXPIRES_IN
      }
    };

  }

  @Post('reset-password')
  public async resetPasswordRequest(
    @Body() administratorResetPasswordCreateDto: AdministratorResetPasswordCreateDto
  ): Promise<any> {

    const administratorFound = await this.administratorsService.findOne({ where: { email: administratorResetPasswordCreateDto.email } });
    if (administratorFound === undefined) {
      throw new HttpException('This email is incorrect.', HttpStatus.BAD_REQUEST);
    }

    const administratorFoundMapped = administratorMap(administratorFound);

    if (administratorFoundMapped.status === false) {
      throw new HttpException('Your administrator is inactive. Please contact your administrator to enable it.', HttpStatus.BAD_REQUEST);
    }

    const administratorResetPasswordCreatedId = (await this.administratorsResetPasswordService.create({ administratorId: administratorFoundMapped.id })).raw.insertId;
    const administratorResetPasswordCreated = await this.administratorsResetPasswordService.findOne({ where: { id: administratorResetPasswordCreatedId } });
    const administratorResetPasswordCreatedMapped = administratorResetPasswordMap(administratorResetPasswordCreated);

    this.boilerplateEmailService.sendResetPasswordEmail(
      administratorFoundMapped.email,
      administratorFoundMapped.name,
      `${process.env.APP_BOILERPLATE_ADMINISTRATOR_WEB_URL}/reset-password?token=${administratorResetPasswordCreatedMapped.token}`
    );

    return {
      message: 'The password reset email has been sent successfully.',
      data: administratorResetPasswordCreatedMapped
    };

  }

  @Patch('reset-password/:administratorResetPasswordToken')
  public async resetPassword(
    @Param('administratorResetPasswordToken') administratorResetPasswordToken: string,
    @Body() administratorResetPasswordPatchDto: AdministratorResetPasswordPatchDto
  ): Promise<any> {

    const administratorResetPasswordFound = await this.administratorsResetPasswordService.findOne({ where: { token: administratorResetPasswordToken } });
    if (administratorResetPasswordFound === undefined) {
      throw new HttpException('This password reset link does not exist.', HttpStatus.BAD_REQUEST);
    }

    const administratorResetPasswordFoundMapped = administratorResetPasswordMap(administratorResetPasswordFound);

    const administratorFound = await this.administratorsService.findOne({ where: { id: administratorResetPasswordFoundMapped.administratorId } });
    const administratorFoundMapped = administratorMap(administratorFound);

    if (administratorFoundMapped.status === false) {
      throw new HttpException('Your administrator is inactive. Please contact your administrator to enable it.', HttpStatus.BAD_REQUEST);
    }

    if (administratorResetPasswordFoundMapped.updatedAt !== null) {
      throw new HttpException('This password reset link has already been used.', HttpStatus.BAD_REQUEST);
    }

    const minutes = 60;
    const minutesInSeconds = minutes * 60;
    const minutesInMilliseconds = minutesInSeconds * 1000;

    const isExpired = (Date.now() - administratorResetPasswordFoundMapped.createdAt) >= minutesInMilliseconds;

    if (isExpired === true) {
      throw new HttpException('This password reset link has expired.', HttpStatus.BAD_REQUEST);
    }

    await this.administratorsService.update({ id: administratorFoundMapped.id }, { password: administratorResetPasswordPatchDto.password });
    await this.administratorsResetPasswordService.update({ id: administratorResetPasswordFoundMapped.id }, { updatedAt: Date.now() });

    return {
      message: 'Your password has been successfully reset.'
    };

  }

  @UseGuards(JwtGuard)
  @Get('me')
  public async me(
    @Request() request: any
  ): Promise<any> {

    const administratorFound = await this.administratorsService.findOne({ where: { id: request.user.id } });
    if (administratorFound === undefined) {
      throw new HttpException('Your administrator was not found.', HttpStatus.BAD_REQUEST);
    }

    const administratorFoundMappedForAdministrator = administratorMapForAdministrator(administratorFound);

    return {
      data: administratorFoundMappedForAdministrator
    };

  }

  @UseGuards(JwtGuard)
  @Patch('change-password')
  async changePassword(
    @Request() request: any,
    @Body() administratorChangePasswordDto: AdministratorChangePasswordDto
  ) {

    const administratorFound = await this.administratorsService.findOne({ where: { id: request.user.id } });
    const administratorFoundMapped = administratorMap(administratorFound);

    const isPasswordCurrentCorrect = await compare(administratorChangePasswordDto.passwordCurrent, administratorFoundMapped.password);
    if (isPasswordCurrentCorrect === false) {
      throw new HttpException('The current password entered is incorrect.', HttpStatus.BAD_REQUEST);
    }

    await this.administratorsService.update({ id: request.user.id }, { password: administratorChangePasswordDto.passwordNew });

    return {
      message: 'Your password has been successfully changed.'
    };

  }

  @UseGuards(JwtGuard)
  @Get()
  public async getAdministrators(
    @Query('id') id: null | string,
    @Query('name') name: null | string,
    @Query('email') email: null | string,
    @Query('status', StatusPipe) status: null | string,
    @Query('offset') offset: null | string,
    @Query('limit') limit: null | string
  ): Promise<any> {

    const where = { id, name, email, status };

    const administratorsFoundQuery = await this.administratorsService.findAll({ where, orderBy: { 'administrator.id': 'DESC' }, offset, limit });
    const administratorsFound = await administratorsFoundQuery.getRawMany();
    const administratorsFoundMappedForAdministrator = administratorsFound.map((administratorFound: any) => administratorMapForAdministrator(administratorFound));

    const administratorsFoundCountQuery = await this.administratorsService.findAll({ where });
    const administratorsFoundCount = await administratorsFoundCountQuery.getCount();

    return {
      data: administratorsFoundMappedForAdministrator,
      length: administratorsFoundCount
    };

  }

  @UseGuards(JwtGuard)
  @Get(':administratorId')
  public async getAdministrator(
    @Param('administratorId') administratorId: string
  ): Promise<any> {

    const administratorFound = await this.administratorsService.findOne({ where: { id: administratorId } });
    if (administratorFound === undefined) {
      throw new HttpException('This administrator does not exist.', HttpStatus.BAD_REQUEST);
    }

    const administratorFoundMappedForAdministrator = administratorMapForAdministrator(administratorFound);

    return {
      data: administratorFoundMappedForAdministrator
    };

  }

  @UseGuards(JwtGuard)
  @Post('')
  public async createAdministrator(
    @Body() administratorCreateDto: AdministratorCreateDto
  ): Promise<any> {

    const administratorFound = await this.administratorsService.findOne({ where: { email: administratorCreateDto.email } });
    if (administratorFound) {
      throw new HttpException('An administrator with that email already exists.', HttpStatus.BAD_REQUEST);
    }

    const administratorCreatedId = (await this.administratorsService.create(administratorCreateDto)).raw.insertId;
    const administratorCreated = await this.administratorsService.findOne({ where: { id: administratorCreatedId } });
    const administratorCreatedMappedForAdministrator = administratorMapForAdministrator(administratorCreated);

    return {
      data: administratorCreatedMappedForAdministrator,
      message: 'Administrator has been successfully added.'
    };

  }

  @UseGuards(JwtGuard)
  @Patch(':administratorId')
  public async updateAdministrator(
    @Param('administratorId') administratorId: string,
    @Body() administratorUpdateDto: AdministratorUpdateDto
  ): Promise<any> {

    const administratorFound = await this.administratorsService.findOne({ where: { name: administratorUpdateDto.name } });
    if (administratorFound) {
      const administratorFoundMapped = administratorMap(administratorFound);
      if (administratorFoundMapped.id !== +administratorId) {
        throw new HttpException('An administrator with that email already exists.', HttpStatus.BAD_REQUEST);
      }
    }

    await this.administratorsService.update({ id: administratorId }, administratorUpdateDto);

    const administratorUpdated = await this.administratorsService.findOne({ where: { id: administratorId } });
    const administratorUpdatedMappedForAdministrator = administratorMapForAdministrator(administratorUpdated);

    return { data: administratorUpdatedMappedForAdministrator, message: 'Administrator has been successfully changed.' };

  }

}
