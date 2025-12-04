import type { IBaseRepository } from '../../tools/interface/base.repository';
import type { UserModel } from '../model/user.model';

export interface IUserRepository extends IBaseRepository<UserModel> {}
