import { UserFakeInfrastructure } from '../../user/spec/user.infrastructure';
import { PathFakeRepository } from '../repository/test/pathFake.repository';

export class PathsFakeInfrastructure {
  public pathRepository: PathFakeRepository;
  public userRepository: UserFakeInfrastructure;

  public pathService: PathServcice;

  constructor() {
    this.pathRepository = new PathFakeRepository();
    this.userRepository = new UserFakeInfrastructure();

    this.pathService = new PathServcice(
      this.pathRepository,
      this.userRepository,
    );
  }
}
