import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@app/boilerplate-database/modules/users/entities/user.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';

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

  public async findAll(options?: any): Promise<SelectQueryBuilder<User>> {
    const query = this.userRepository
      .createQueryBuilder('user')
      .select(this.QUERY_SELECT);
    if (options?.where?.id) {
      query.andWhere('user.id = :id', { id: options.where.id });
    }
    if (options?.where?.name) {
      query.andWhere('user.name LIKE :name', { name: `%${options.where.name}%` });
    }
    if (options?.where?.email) {
      query.andWhere('user.email LIKE :email', { email: `%${options.where.email}%` });
    }
    if (options?.where?.status) {
      query.andWhere('user.status = :status', { status: options.where.status });
    }
    if (options?.orderBy) {
      query.orderBy(options.orderBy);
    }
    if (options?.offset) {
      query.offset(options.offset);
    }
    if (options?.limit) {
      query.limit(options.limit);
    }
    return query;
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
