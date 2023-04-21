import { PartialType } from '@nestjs/mapped-types';
import { AdministratorCreateDto } from './administrator-create.dto';

export class AdministratorUpdateDto extends PartialType(AdministratorCreateDto) { }
