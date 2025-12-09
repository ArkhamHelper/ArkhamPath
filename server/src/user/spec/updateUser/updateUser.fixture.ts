import type { UserModel } from '../../model/user.model';
import type { UserSchema } from '../../schema/user.schema';

export class UpdateUserFixture {
  users: UserModel[] = [
    {
      id: '1',
      email: 'a@b.com',
      password: '$2a$12$OM2MnF85ofncqmftam9ZsOa/L8raGkIHM3ASPWpN4MHWHOZuQ0rUm',
    },
  ];

  expectedUpdatedPassword = (): {
    schema: UserSchema;
    model: UserModel;
  } => ({
    schema: {
      id: '1',
      email: 'a@b.com',
    },
    model: {
      id: '1',
      email: 'a@b.com',
      password: '$2a$12$D/0BbqoEjXQFldkRW7bAYO1mAC7D3Y1jMJ1nW7aYa4ZQLtlkysPSy',
    },
  });
}
