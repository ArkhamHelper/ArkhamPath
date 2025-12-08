import type { UserModel } from '../../model/user.model';
import { UserInfrastructure } from '../user.infrastructure';
import { UpdateUserFixture } from './updateUser.fixture';

describe('UpdateUser', () => {
  const fixture = new UpdateUserFixture();
  const infrastructure = new UserInfrastructure();

  beforeEach(() => {
    infrastructure.userRepository.set(fixture.users);
  });

  it('should update password', async () => {
    const expected = fixture.expectedUpdatedPassword();

    const user = await update({ id: '1', password: 'newPassword' });

    expect(user).toEqual(expected.schema);
    wasSaved(expected.model);
  )};

  it('should throw error when user not found', async () => {
    await expect(update({ id: '2', password: 'newPassword' })).rejects.toThrow(
      new Error('User with id 2 not found'),
    );
  });

  it('should throw error on short password', async () => {
    await expect(
      update({ id: '1', password: 'short' }),
    ).rejects.toThrow(new Error('Password is too short'));
  });

  function update(dto: UpdateUserDto): Promise<UpdateUserSchema> {
    return infrastructure.userService.update(dto);
  }

  function wasSaved(user: UserModel) {
    expect(infrastructure.userRepository.wasSaved(user)).toBeTruthy();
  }
});
