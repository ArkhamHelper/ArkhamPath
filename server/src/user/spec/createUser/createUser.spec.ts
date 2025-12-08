import type { CreateUserDto } from '../../dto/createUser.dto';
import type { UserSchema } from '../../schema/user.schema';
import { UserInfrastructure } from '../user.infrastructure';
import { CreateUserFixture } from './createUser.fixture';
import bcrypt from 'bcrypt';

describe('CreateUser', () => {
  let fixture: CreateUserFixture;
  let infrastructure: UserInfrastructure;

  beforeEach(() => {
    fixture = new CreateUserFixture();
    infrastructure = new UserInfrastructure();

    infrastructure.userRepository.set(fixture.users);
  });

  it('should create user', async () => {
    const expected = fixture.expectedUser();

    const user = await create({
      email: 'a@b.com',
      password: 'password',
    });

    expect({
      ...user,
      id: `${user.id}`,
    }).toEqual(expected.schema);
    expect(
      await bcrypt.compare(
        'password',
        infrastructure.userRepository.getAllBy(
          (model) => model.email === 'a@b.com',
        )[0].password,
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

  function create(dto: CreateUserDto): Promise<UserSchema> {
    return infrastructure.userService.create(dto);
  }
});
