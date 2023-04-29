import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AdministratorChangePasswordDto {

  @ApiProperty()
  @IsNotEmpty()
  passwordCurrent: string;

  @ApiProperty()
  @IsNotEmpty()
  passwordNew: string;

}
