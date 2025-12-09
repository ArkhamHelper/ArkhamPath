import { UserFakeRepository } from '../repository/test/userFake.repository';
import { UserService } from '../user.service';

export class UserInfrastructure {
  public userService: UserService;
  public userRepository: UserFakeRepository;

  constructor() {
    this.userRepository = new UserFakeRepository();
    this.userService = new UserService(this.userRepository);
  }
}
