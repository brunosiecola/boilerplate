import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AdministratorResetPasswordCreateDto {

  @ApiProperty()
  @IsNotEmpty()
  email: string;

}
