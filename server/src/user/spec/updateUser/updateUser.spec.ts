import type { UpdateUserDto } from '../../dto/updateUser.dto';
import type { UserSchema } from '../../schema/user.schema';
import { UserInfrastructure } from '../user.infrastructure';
import { UpdateUserFixture } from './updateUser.fixture';
import bcrypt from 'bcrypt';

describe('UpdateUser', () => {
  let fixture: UpdateUserFixture;
  let fake: UserInfrastructure;

  beforeEach(() => {
    fixture = new UpdateUserFixture();
    fake = new UserInfrastructure();

    fake.userRepository.set(fixture.users);
  });

  it('should update password', async () => {
    const expected = fixture.expectedUpdatedPassword();

    const user = await update({ id: '1', password: 'newPassword' });

    expect({
      ...user,
      id: `${user.id}`,
    }).toEqual(expected.schema);
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

  function update(dto: UpdateUserDto): Promise<UserSchema> {
    return fake.userService.update(dto);
  }
});
