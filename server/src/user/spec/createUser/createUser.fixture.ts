import type { UserModel } from '../../model/user.model';

export class CreateUserFixture {
  expectedUser = (): {
    schema: CreateUserSchema;
    model: UserModel;
  } => ({
    schema: {},
    model: {
      id: '1',
    },
  });
}
