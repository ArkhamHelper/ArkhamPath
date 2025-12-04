export class UserModel {
  id: string;
  arkhamCardsId: string;

  constructor(user: Partial<UserModel>) {
    Object.assign(this, user);
  }
}
