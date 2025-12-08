import type { UserModel } from '../../model/user.model';
import { UserInfrastructure } from '../user.infrastructure';
import { CreateUserFixture } from './createUser.fixture';

describe('CreateUser', () => {
  const fixture = new CreateUserFixture();
  const infrastructure = new UserInfrastructure();

  it('should create user', async () => {
    const expected = fixture.expectedUser();

    const user = await create({});

    expect(user).toEqual(expected.schema);
    wasSaved(expected.model);
  });

  it('should throw error on short password', async () => {
    await expect(create({ id: '1', password: 'short' })).rejects.toThrow(
      new Error('Password is too short'),
    );
  });

  function create(dto: CreateUserDto) {
    return infrastructure.userService.create(dto);
  }

  function wasSaved(user: UserModel) {
    expect(infrastructure.userRepository.wasSaved(user)).toBeTruthy();
  }
});
