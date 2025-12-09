import type { AuthUserDto } from '../../dto/authUser.dto';
import type { UserModel } from '../../model/user.model';
import { UserInfrastructure } from '../user.infrastructure';
import { AuthUserFixture } from './authUser.fixture';

describe('AuthUser', () => {
  let fixture: AuthUserFixture;
  let fake: UserInfrastructure;

  beforeEach(() => {
    fixture = new AuthUserFixture();
    fake = new UserInfrastructure();

    fake.userRepository.set(fixture.users);
  });

  it('should auth user', async () => {
    const user = await auth({
      email: 'a@b.com',
      password: 'password',
    });

    expect(user).toEqual(fixture.expectedUser());
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

  function auth(dto: AuthUserDto): Promise<UserModel> {
    return fake.userService.auth(dto);
  }
});
