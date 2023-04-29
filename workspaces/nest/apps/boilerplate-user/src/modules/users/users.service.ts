import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@app/boilerplate-database/modules/users/entities/user.entity';
import { Repository, InsertResult, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {

  private readonly QUERY_SELECT: string =
    `
      user.id AS user_id,
      user.name AS user_name,
      user.email AS user_email,
      user.password AS user_password,
      user.status AS user_status,
      user.createdAt AS user_createdAt
    `;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  public async create(user: Partial<User>): Promise<InsertResult> {
    return await this.userRepository.insert(user);
  }

  public async update(where: any, user: Partial<User>): Promise<UpdateResult> {
    return await this.userRepository.update(where, user);
  }

  public async findOne(options: any): Promise<any> {
    const query = this.userRepository
      .createQueryBuilder('user')
      .select(this.QUERY_SELECT);
    if (options?.where) {
      query.where(options.where);
    }
    const user = await query.getRawOne();
    return user;
  }

}
