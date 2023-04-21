import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, UseGuards, Get, Request, Query, Param, HttpException, HttpStatus, Patch } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { JwtGuard } from '../../utils/guards/jwt/jwt.guard';
import { administratorMapForAdministrator, administratorMap } from '@app/boilerplate-database/modules/administrators/functions/administrator-map.function';
import { AdministratorSignInDto } from './dto/administrator-sign-in.dto';
import { AdministratorCreateDto } from './dto/administrator-create.dto';
import { AdministratorUpdateDto } from './dto/administrator-update.dto';

@ApiTags('administrators')
@Controller('administrators')
export class AdministratorsController {

  constructor(
    private readonly administratorsService: AdministratorsService,
    private readonly jwtService: JwtService
  ) { }

  @Post('sign-in')
  public async signIn(
    @Body() administratorSignInDto: AdministratorSignInDto
  ): Promise<any> {

    const message = 'E-mail ou senha está incorreto.';

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
      throw new HttpException('Seu administrador está inativo. Entre em contato com seu administrador para ativá-lo.', HttpStatus.BAD_REQUEST);
    }

    return {
      message: 'A sua sessão foi iniciada com sucesso.',
      data: {
        access_token: this.jwtService.sign({
          id: administratorFoundMapped.id,
          email: administratorFoundMapped.email,
          password: administratorFoundMapped.password,
          status: administratorFoundMapped.status
        }),
        expiresIn: +process.env.APP_BOILERPLATE_ADMINISTRATOR_API_EXPIRES_IN
      }
    };

  }

  @UseGuards(JwtGuard)
  @Get('me')
  public async me(
    @Request() request: any
  ): Promise<any> {

    const administratorFound = await this.administratorsService.findOne({ where: { id: request.user.id } });
    if (administratorFound === undefined) {
      throw new HttpException('Seu administrador não foi encontrado.', HttpStatus.BAD_REQUEST);
    }

    const administratorFoundMappedForAdministrator = administratorMapForAdministrator(administratorFound);

    return {
      data: administratorFoundMappedForAdministrator
    };

  }

  @UseGuards(JwtGuard)
  @Get()
  public async getAdministrators(
    @Query('id') id: null | string,
    @Query('name') name: null | string,
    @Query('email') email: null | string,
    @Query('status') status: null | string,
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
      throw new HttpException('Esse administrador não existe.', HttpStatus.BAD_REQUEST);
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
      throw new HttpException('Já existe um administrator com esse e-mail.', HttpStatus.BAD_REQUEST);
    }

    const administratorCreatedId = (await this.administratorsService.create(administratorCreateDto)).raw.insertId;
    const administratorCreated = await this.administratorsService.findOne({ where: { id: administratorCreatedId } });
    const administratorCreatedMappedForAdministrator = administratorMapForAdministrator(administratorCreated);

    return {
      data: administratorCreatedMappedForAdministrator,
      message: 'O administrador foi adicionado com sucesso.'
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
        throw new HttpException('Já existe um administrator com esse e-mail.', HttpStatus.BAD_REQUEST);
      }
    }

    await this.administratorsService.update({ id: administratorId }, administratorUpdateDto);

    const administratorUpdated = await this.administratorsService.findOne({ where: { id: administratorId } });
    const administratorUpdatedMappedForAdministrator = administratorMapForAdministrator(administratorUpdated);

    return { data: administratorUpdatedMappedForAdministrator, message: 'O administrador foi alterado com sucesso.' };

  }

}
