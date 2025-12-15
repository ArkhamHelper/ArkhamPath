import type { UserModel } from '../../model/user.model';

export class AuthUserFixture {
  users: UserModel[] = [
    {
      id: '1',
      email: 'a@b.com',
      password: '$2a$12$vlYOb48xEreJUCT9WU0v4Ofi2v2KYz0wICiJf9Arq7ge2gPDB3C/C',
    },
  ];

  expectedUser = (): UserModel => ({
    id: '1',
    email: 'a@b.com',
    password: '$2a$12$vlYOb48xEreJUCT9WU0v4Ofi2v2KYz0wICiJf9Arq7ge2gPDB3C/C',
  });
}
