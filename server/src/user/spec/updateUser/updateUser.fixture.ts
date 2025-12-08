import type { UserModel } from '../../model/user.model';

export class UpdateUserFixture {
  users: UserModel[] = [
    {
      id: '1',
      email: 'a@b.com',
      password: '$2a$12$OM2MnF85ofncqmftam9ZsOa/L8raGkIHM3ASPWpN4MHWHOZuQ0rUm',
      arkhamCardsId: 'b742775b-403a-487a-b529-edf37aad6525',
    },
  ];

  expectedUpdatedPassword = (): {
    schema: UpdateUserSchema;
    model: UserModel;
  } => ({
    schema: {},
    model: {
      id: '1',
      email: 'a@b.com',
      password: '$2a$12$D/0BbqoEjXQFldkRW7bAYO1mAC7D3Y1jMJ1nW7aYa4ZQLtlkysPSy',
      arkhamCardsId: 'b742775b-403a-487a-b529-edf37aad6525',
    },
  });
}
