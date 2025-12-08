import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import type { UserModel } from '../model/user.model';

export class UserSchema {
  constructor(user: UserModel) {
    this.id = user.id;
    this.email = user.email;
    this.arkhamCardsId = user.arkhamCardsId;
  }

  @ApiProperty({ example: 'b742775b-403a-487a-b529-edf37aad6525' })
  id: string;

  @ApiProperty({ example: 'a@b.com' })
  email: string;

  @ApiPropertyOptional({ example: 'b0350235-afff-4529-9a27-eac8c6c9d1e0' })
  arkhamCardsId?: string;
}
