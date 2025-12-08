import type { UserModel } from '../../model/user.model';
import { UserInfrastructure } from '../user.infrastructure';
import { GetUserFixture } from './getUser.fixture';

describe('GetUser', () => {
  const fixture = new GetUserFixture();
  const infrastructure = new UserInfrastructure();

  beforeEach(() => {
    infrastructure.userRepository.set(fixture.users);
  });

  it('should find by id', async () => {
    const expected = fixture.expectedUser();

    const user = await get({});

    expect(user).toEqual(expected.schema);
  });

  it('should throw error when user not found', async () => {
    await expect(get({ id: '2' })).rejects.toThrow(
      new Error('User with id 2 not found'),
    );
  });

  function get(dto: GetUserDto): Promise<UserModel> {
    return infrastructure.userService.getUser(dto);
  }
});
