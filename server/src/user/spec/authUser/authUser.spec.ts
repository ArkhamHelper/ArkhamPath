import type { AuthUserDto } from '../../dto/authUser.dto';
import type { UserSchema } from '../../schema/user.schema';
import { UserInfrastructure } from '../user.infrastructure';
import { AuthUserFixture } from './authUser.fixture';

describe('AuthUser', () => {
  let fixture: AuthUserFixture;
  let infrastructure: UserInfrastructure;

  beforeEach(() => {
    fixture = new AuthUserFixture();
    infrastructure = new UserInfrastructure();

    infrastructure.userRepository.set(fixture.users);
  });

  it('should auth user', async () => {
    const expected = fixture.expectedUser();

    const user = await auth({
      email: 'a@b.com',
      password: 'password',
    });

    expect(user).toEqual(expected.schema);
  });

  it('should throw error when user not found', async () => {
    await expect(
      auth({ email: 'test@test.com', password: 'password' }),
    ).rejects.toThrow(new Error('User with email test@test.com not found'));
  });

  it('should throw error when password is incorrect', async () => {
    await expect(
      auth({ email: 'a@b.com', password: 'otherPassword' }),
    ).rejects.toThrow(new Error('Password is incorrect'));
  });

  function auth(dto: AuthUserDto): Promise<UserSchema> {
    return infrastructure.userService.auth(dto);
  }
});
