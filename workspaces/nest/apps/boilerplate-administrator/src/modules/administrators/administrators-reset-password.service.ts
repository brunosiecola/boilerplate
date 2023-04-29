import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdministratorResetPassword } from '@app/boilerplate-database/modules/administrators/entities/administrator-reset-password.entity';
import { Repository, InsertResult, UpdateResult } from 'typeorm';

@Injectable()
export class AdministratorsResetPasswordService {

  private readonly QUERY_SELECT: string =
    `
      administrator_reset_password.id AS administrator_reset_password_id,
      administrator_reset_password.administratorId AS administrator_reset_password_administratorId,
      administrator_reset_password.token AS administrator_reset_password_token,
      administrator_reset_password.createdAt AS administrator_reset_password_createdAt,
      administrator_reset_password.updatedAt AS administrator_reset_password_updatedAt
    `;

  constructor(
    @InjectRepository(AdministratorResetPassword)
    private readonly administratorResetPasswordRepository: Repository<AdministratorResetPassword>
  ) { }

  public async create(administratorResetPassword: Partial<AdministratorResetPassword>): Promise<InsertResult> {
    return await this.administratorResetPasswordRepository.insert(administratorResetPassword);
  }

  public async update(where: any, administratorResetPassword: Partial<AdministratorResetPassword>): Promise<UpdateResult> {
    return await this.administratorResetPasswordRepository.update(where, administratorResetPassword);
  }

  public async findOne(options: any): Promise<any> {
    const query = this.administratorResetPasswordRepository
      .createQueryBuilder('administrator_reset_password')
      .select(this.QUERY_SELECT);
    if (options?.where) {
      query.where(options.where);
    }
    const administrator = await query.getRawOne();
    return administrator;
  }

}
