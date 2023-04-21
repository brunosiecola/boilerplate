import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Query, Param, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { userMapForUser } from '@app/boilerplate-database/modules/users/functions/user-map.function';

@ApiTags('users')
@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService
  ) { }

  @Get()
  public async getUsers(
    @Query('id') id: null | string,
    @Query('name') name: null | string,
    @Query('email') email: null | string,
    @Query('offset') offset: null | string,
    @Query('limit') limit: null | string
  ): Promise<any> {

    const where = { id, name, email };

    const usersFoundQuery = await this.usersService.findAll({ where, orderBy: { 'user.id': 'DESC' }, offset, limit });
    const usersFound = await usersFoundQuery.getRawMany();
    const usersFoundMappedForUser = usersFound.map((userFound: any) => userMapForUser(userFound));

    const usersFoundCountQuery = await this.usersService.findAll({ where });
    const usersFoundCount = await usersFoundCountQuery.getCount();

    return {
      data: usersFoundMappedForUser,
      length: usersFoundCount
    };

  }

  @Get(':userId')
  public async getUser(
    @Param('userId') userId: string
  ): Promise<any> {

    const userFound = await this.usersService.findOne({ where: { id: userId } });
    if (userFound === undefined) {
      throw new HttpException('Esse administrador não existe.', HttpStatus.BAD_REQUEST);
    }

    const userFoundMappedForUser = userMapForUser(userFound);

    return {
      data: userFoundMappedForUser
    };

  }

}
