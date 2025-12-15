import type { UpdateUserDto } from '../../dto/updateUser.dto';
import type { UserModel } from '../../model/user.model';
import { UserFakeInfrastructure } from '../user.infrastructure';
import { UpdateUserFixture } from './updateUser.fixture';
import bcrypt from 'bcrypt';

describe('UpdateUser', () => {
  let fixture: UpdateUserFixture;
  let fake: UserFakeInfrastructure;

  beforeEach(() => {
    fixture = new UpdateUserFixture();
    fake = new UserFakeInfrastructure();

    fake.userRepository.set(fixture.users);
  });

  it('should update password', async () => {
    await update({ id: '1', password: 'newPassword' });

    expect(fake.userRepository.getAll().length).toEqual(1);
    expect(
      await bcrypt.compare(
        'newPassword',
        fake.userRepository.getAllBy((model) => model.id === '1')[0].password,
      ),
    ).toBeTruthy();
  });

  it('should throw error when user not found', async () => {
    await expect(update({ id: '2', password: 'newPassword' })).rejects.toThrow(
      new Error('User with id 2 not found'),
    );
  });

  it('should throw error on short password', async () => {
    await expect(update({ id: '1', password: 'short' })).rejects.toThrow(
      new Error('Password must be at least 6 characters long'),
    );
  });

  function update(dto: UpdateUserDto): Promise<UserModel> {
    return fake.userService.update(dto);
  }
});
