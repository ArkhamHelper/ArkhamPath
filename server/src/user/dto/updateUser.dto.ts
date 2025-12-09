import { ApiProperty } from '@nestjs/swagger';

export type UpdateUserDto = UpdateUserParams & UpdateUserBody;

export class UpdateUserParams {
  @ApiProperty({
    type: 'string',
    example: 'b742775b-403a-487a-b529-edf37aad6525',
  })
  id: string;
}

export class UpdateUserBody {
  @ApiProperty({ type: 'string', example: 'newPassword' })
  password: string;
}
