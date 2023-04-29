import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserResetPasswordCreateDto {

  @ApiProperty()
  @IsNotEmpty()
  email: string;

}
