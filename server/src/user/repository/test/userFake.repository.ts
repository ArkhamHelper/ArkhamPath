import { BaseFakeRepository } from '../../../tools/test/baseFake.repository';
import type { UserModel } from '../../model/user.model';
import type { IUserRepository } from '../user.repository';

export class UserFakeRepository
  extends BaseFakeRepository<UserModel>
  implements IUserRepository {}
