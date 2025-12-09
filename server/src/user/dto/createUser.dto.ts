import { ApiProperty } from '@nestjs/swagger';

export type CreateUserDto = CreateUserBody;

export class CreateUserBody {
  @ApiProperty({ type: 'string', example: 'a@b.com' })
  email: string;

  @ApiProperty({ type: 'string', example: 'password' })
  password: string;
}
