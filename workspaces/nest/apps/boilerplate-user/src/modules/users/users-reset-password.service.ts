import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserResetPassword } from '@app/boilerplate-database/modules/users/entities/user-reset-password.entity';
import { Repository, InsertResult, UpdateResult } from 'typeorm';

@Injectable()
export class UsersResetPasswordService {

  private readonly QUERY_SELECT: string =
    `
      user_reset_password.id AS user_reset_password_id,
      user_reset_password.userId AS user_reset_password_userId,
      user_reset_password.token AS user_reset_password_token,
      user_reset_password.createdAt AS user_reset_password_createdAt,
      user_reset_password.updatedAt AS user_reset_password_updatedAt
    `;

  constructor(
    @InjectRepository(UserResetPassword)
    private readonly userResetPasswordRepository: Repository<UserResetPassword>
  ) { }

  public async create(userResetPassword: Partial<UserResetPassword>): Promise<InsertResult> {
    return await this.userResetPasswordRepository.insert(userResetPassword);
  }

  public async update(where: any, userResetPassword: Partial<UserResetPassword>): Promise<UpdateResult> {
    return await this.userResetPasswordRepository.update(where, userResetPassword);
  }

  public async findOne(options: any): Promise<any> {
    const query = this.userResetPasswordRepository
      .createQueryBuilder('user_reset_password')
      .select(this.QUERY_SELECT);
    if (options?.where) {
      query.where(options.where);
    }
    const user = await query.getRawOne();
    return user;
  }

}
