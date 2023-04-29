import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AdministratorResetPasswordPatchDto {

  @ApiProperty()
  @IsNotEmpty()
  password: string;

}
