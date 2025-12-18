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
  });

  it('should get by user id', async () => {
    const paths = await getManyByUserId({ userId: '1' });

    expect(paths.length).toEqual(2);
  });

  function getManyByUserId(dto: GetManyPathsDto): Promise<PathModel[]> {
    return fake.pathService.getManyByUserId(dto);
  }
});
