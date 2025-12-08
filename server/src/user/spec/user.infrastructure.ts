import { UserFakeRepository } from '../repository/test/userFake.repository';

export class UserInfrastructure {
  public userService: UserService;
  public userRepository: UserFakeRepository;

  constructor() {
    this.userRepository = new UserFakeRepository();
    this.userService = new UserService(this.userRepository);
  }
}
