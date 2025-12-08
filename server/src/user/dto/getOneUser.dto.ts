import { ApiProperty } from '@nestjs/swagger';

export type GetOneUserDto = GetOneUserParams;

export class GetOneUserParams {
  @ApiProperty({ description: 'ID пользователя' })
  id: string;
}
