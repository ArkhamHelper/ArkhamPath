import type { UserModel } from '../../model/user.model';

export class GetUserFixture {
  users: UserModel[] = [
    {
      id: '1',
      arkhamCardsId: 'b742775b-403a-487a-b529-edf37aad6525',
    },
  ];

  expectedUser = (): {
    schema: GetUserSchema;
  } => ({
    schema: {},
  });
}

