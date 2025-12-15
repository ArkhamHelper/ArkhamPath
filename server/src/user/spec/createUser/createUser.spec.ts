import type { CreateUserDto } from '../../dto/createUser.dto';
import type { UserModel } from '../../model/user.model';
import { UserFakeInfrastructure } from '../user.infrastructure';
import { CreateUserFixture } from './createUser.fixture';
import bcrypt from 'bcrypt';

describe('CreateUser', () => {
  let fixture: CreateUserFixture;
  let fake: UserFakeInfrastructure;

  beforeEach(() => {
    fixture = new CreateUserFixture();
    fake = new UserFakeInfrastructure();

    fake.userRepository.set(fixture.users);
  });

  it('should create user', async () => {
    await create({
      email: 'a@b.com',
      password: 'password',
    });

    expect(fake.userRepository.getAll().length).toEqual(2);
    expect(
      await bcrypt.compare(
        'password',
        fake.userRepository.getAllBy((model) => model.email === 'a@b.com')[0]
          .password,
      ),
    ).toBeTruthy();
  });

  it('should throw error on duplicate email', async () => {
    await expect(
      create({ email: 'test@test.com', password: 'password' }),
    ).rejects.toThrow(
      new Error('User with email test@test.com already exists'),
    );
  });

  it('should throw error on short password', async () => {
    await expect(
      create({ email: 'a@b.com', password: 'short' }),
    ).rejects.toThrow(new Error('Password must be at least 6 characters long'));
  });

  function create(dto: CreateUserDto): Promise<UserModel> {
    return fake.userService.create(dto);
  }
});
