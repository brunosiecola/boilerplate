import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserResetPasswordPatchDto {

  @ApiProperty()
  @IsNotEmpty()
  password: string;

}
