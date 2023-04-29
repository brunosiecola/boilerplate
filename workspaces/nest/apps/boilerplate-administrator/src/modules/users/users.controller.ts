import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Query, Param, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { StatusPipe } from '../../utils/pipes/status/status.pipe';
import { userMapForAdministrator } from '@app/boilerplate-database/modules/users/functions/user-map.function';

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
    @Query('status', StatusPipe) status: null | string,
    @Query('offset') offset: null | string,
    @Query('limit') limit: null | string
  ): Promise<any> {

    const where = { id, name, email, status };

    const usersFoundQuery = await this.usersService.findAll({ where, orderBy: { 'user.id': 'DESC' }, offset, limit });
    const usersFound = await usersFoundQuery.getRawMany();
    const usersFoundMappedForAdministrator = usersFound.map((userFound: any) => userMapForAdministrator(userFound));

    const usersFoundCountQuery = await this.usersService.findAll({ where });
    const usersFoundCount = await usersFoundCountQuery.getCount();

    return {
      data: usersFoundMappedForAdministrator,
      length: usersFoundCount
    };

  }

  @Get(':userId')
  public async getUser(
    @Param('userId') userId: string
  ): Promise<any> {

    const userFound = await this.usersService.findOne({ where: { id: userId } });
    if (userFound === undefined) {
      throw new HttpException('This user does not exist.', HttpStatus.BAD_REQUEST);
    }

    const userFoundMappedForAdministrator = userMapForAdministrator(userFound);

    return {
      data: userFoundMappedForAdministrator
    };

  }

}
