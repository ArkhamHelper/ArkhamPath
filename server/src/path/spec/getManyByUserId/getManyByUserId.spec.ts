import type { GetManyPathsDto } from '../../dto/getManyPaths.dto';
import type { PathModel } from '../../model/path.model';
import { PathsFakeInfrastructure } from '../paths.infrastructure';
import { GetManyByUserIdFixture } from './getManyByUserId.fixture';

describe('GetManyByUserId', () => {
  let fake: PathsFakeInfrastructure;
  let fixture: GetManyByUserIdFixture;

  beforeEach(() => {
    fake = new PathsFakeInfrastructure();
    fixture = new GetManyByUserIdFixture();

    fake.pathRepository.set(fixture.paths);
    fake.userRepository.set(fixture.users);
  });

  it('should get by user id', async () => {
    const paths = await getManyByUserId({ userId: '1' });

    expect(paths.length).toEqual(2);
  });

  it('should throw error when user not found', async () => {
    await expect(getManyByUserId({ userId: '2' })).rejects.toThrow(
      new Error('User with id 2 not found'),
    );
  });

  function getManyByUserId(dto: GetManyPathsDto): Promise<PathModel[]> {
    return fake.pathService.getManyByUserId(dto);
  }
});
