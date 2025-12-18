import { UserFakeRepository } from '../../user/repository/test/userFake.repository';
import { UserService } from '../../user/user.service';
import { PathService } from '../path.service';
import { PathFakeRepository } from '../repository/test/pathFake.repository';

export class PathsFakeInfrastructure {
  public pathRepository: PathFakeRepository;
  public userRepository: UserFakeRepository;

  public pathService: PathService;
  public userService: UserService;

  constructor() {
    this.pathRepository = new PathFakeRepository();
    this.userRepository = new UserFakeRepository();

    this.userService = new UserService(
      this.userRepository,
      this.pathRepository,
    );
    this.pathService = new PathService(this.pathRepository, this.userService);
  }
}
