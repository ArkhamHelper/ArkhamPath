import type { GetOneUserDto } from '../../dto/getOneUser.dto';
import type { UserModel } from '../../model/user.model';
import { UserFakeInfrastructure } from '../user.infrastructure';
import { GetUserFixture } from './getOneUser.fixture';

describe('GetUser', () => {
  let fixture: GetUserFixture;
  let fake: UserFakeInfrastructure;

  beforeEach(() => {
    fixture = new GetUserFixture();
    fake = new UserFakeInfrastructure();

    fake.userRepository.set(fixture.users);
  });

  it('should find by id', async () => {
    const user = await get({
      id: '1',
    });

    expect(user).toEqual(fixture.expectedUser());
  });

  it('should throw error when user not found', async () => {
    await expect(get({ id: '2' })).rejects.toThrow(
      new Error('User with id 2 not found'),
    );
  });

  function get(dto: GetOneUserDto): Promise<UserModel> {
    return fake.userService.getOne(dto);
  }
});
