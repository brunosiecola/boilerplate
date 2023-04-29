import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrator } from '@app/boilerplate-database/modules/administrators/entities/administrator.entity';
import { Repository, InsertResult, UpdateResult, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class AdministratorsService {

  private readonly QUERY_SELECT: string =
    `
      administrator.id AS administrator_id,
      administrator.name AS administrator_name,
      administrator.email AS administrator_email,
      administrator.password AS administrator_password,
      administrator.status AS administrator_status,
      administrator.createdAt AS administrator_createdAt
    `;

  constructor(
    @InjectRepository(Administrator)
    private readonly administratorRepository: Repository<Administrator>
  ) { }

  public async create(administrator: Partial<Administrator>): Promise<InsertResult> {
    return await this.administratorRepository.insert(administrator);
  }

  public async update(where: any, administrator: Partial<Administrator>): Promise<UpdateResult> {
    return await this.administratorRepository.update(where, administrator);
  }

  public async findAll(options?: any): Promise<SelectQueryBuilder<Administrator>> {
    const query = this.administratorRepository
      .createQueryBuilder('administrator')
      .select(this.QUERY_SELECT);
    if (options?.where?.id) {
      query.andWhere('administrator.id = :id', { id: options.where.id });
    }
    if (options?.where?.name) {
      query.andWhere('administrator.name LIKE :name', { name: `%${options.where.name}%` });
    }
    if (options?.where?.email) {
      query.andWhere('administrator.email LIKE :email', { email: `%${options.where.email}%` });
    }
    if (options?.where?.status) {
      query.andWhere('administrator.status = :status', { status: options.where.status });
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
    const query = this.administratorRepository
      .createQueryBuilder('administrator')
      .select(this.QUERY_SELECT);
    if (options?.where) {
      query.where(options.where);
    }
    const administrator = await query.getRawOne();
    return administrator;
  }

}
