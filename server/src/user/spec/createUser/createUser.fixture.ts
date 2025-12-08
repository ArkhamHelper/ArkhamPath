import type { UserModel } from '../../model/user.model';
import type { UserSchema } from '../../schema/user.schema';

export class CreateUserFixture {
  users: UserModel[] = [
    {
      id: '1',
      email: 'test@test.com',
      password: '$2a$12$OM2MnF85ofncqmftam9ZsOa/L8raGkIHM3ASPWpN4MHWHOZuQ0rUm',
    },
  ];

  expectedUser = (): {
    schema: UserSchema;
  } => ({
    schema: {
      id: '2',
      email: 'a@b.com',
    },
  });
}
