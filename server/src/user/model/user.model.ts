export class UserModel {
  id: string;
  email: string;
  password: string;
  arkhamCardsId?: string;

  constructor(user: Partial<UserModel>) {
    Object.assign(this, user);
  }
}
