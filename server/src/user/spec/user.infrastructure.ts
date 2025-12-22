import { PathFakeRepository } from '../../path/repository/test/pathFake.repository';
import { UserFakeRepository } from '../repository/test/userFake.repository';
import { UserService } from '../user.service';

export class UserFakeInfrastructure {
  public userRepository: UserFakeRepository;
  public pathRepository: PathFakeRepository;

  public userService: UserService;

  constructor() {
    this.userRepository = new UserFakeRepository();
    this.pathRepository = new PathFakeRepository();

    this.userService = new UserService(
      this.userRepository,
      this.pathRepository,
    );
  }
}
