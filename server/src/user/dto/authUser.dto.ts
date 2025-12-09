import { ApiProperty } from '@nestjs/swagger';

export type AuthUserDto = AuthUserBody;

export class AuthUserBody {
  @ApiProperty({ type: 'string', example: 'a@b.com' })
  email: string;

  @ApiProperty({ type: 'string', example: 'password' })
  password: string;
}
