import type { GetOneUserDto } from '../../dto/getOneUser.dto';
import type { UserSchema } from '../../schema/user.schema';
import { UserInfrastructure } from '../user.infrastructure';
import { GetUserFixture } from './getOneUser.fixture';

describe('GetUser', () => {
  let fixture: GetUserFixture;
  let infrastructure: UserInfrastructure;

  beforeEach(() => {
    fixture = new GetUserFixture();
    infrastructure = new UserInfrastructure();

    infrastructure.userRepository.set(fixture.users);
  });

  it('should find by id', async () => {
    const expected = fixture.expectedUser();

    const user = await get({
      id: '1',
    });

    expect(user).toEqual(expected.schema);
  });

  it('should throw error when user not found', async () => {
    await expect(get({ id: '2' })).rejects.toThrow(
      new Error('User with id 2 not found'),
    );
  });

  function get(dto: GetOneUserDto): Promise<UserSchema> {
    return infrastructure.userService.getOne(dto);
  }
});
