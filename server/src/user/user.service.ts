import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import type { IUserRepository } from './repository/user.repository';
import type { GetOneUserDto } from './dto/getOneUser.dto';
import { UserSchema } from './schema/user.schema';
import type { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { UserModel } from './model/user.model';
import type { UpdateUserDto } from './dto/updateUser.dto';
import type { AuthUserDto } from './dto/authUser.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async auth(dto: AuthUserDto): Promise<UserSchema> {
    const foundUser = await this.userRepository.findOneByEmail(dto.email);

    if (!foundUser) {
      throw new NotFoundException(`User with email ${dto.email} not found`);
    }

    const isPasswordValid = await bcrypt.compare(
      dto.password,
      foundUser.password,
    );

    if (!isPasswordValid) {
      throw new BadRequestException(`Password is incorrect`);
    }

    return new UserSchema(foundUser);
  }

  async getOne(dto: GetOneUserDto): Promise<UserSchema> {
    const foundUser = await this.userRepository.findOneById(dto.id);

    if (!foundUser) {
      throw new Error(`User with id ${dto.id} not found`);
    }

    return new UserSchema(foundUser);
  }

  async create(dto: CreateUserDto): Promise<UserSchema> {
    const foundUser = await this.userRepository.findOneByEmail(dto.email);

    if (foundUser) {
      throw new NotFoundException(
        `User with email ${dto.email} already exists`,
      );
    }

    const passwordValidation = this.validatePassword(dto.password);

    if (!passwordValidation.status) {
      throw new BadRequestException(passwordValidation.errors.join(', '));
    }

    const hashedPassword = await this.hashPassword(dto.password);
    const user = await this.userRepository.save(
      new UserModel({
        email: dto.email,
        password: hashedPassword,
      }),
    );

    return new UserSchema(user);
  }

  async update(dto: UpdateUserDto): Promise<UserSchema> {
    const foundUser = await this.userRepository.findOneById(dto.id);

    if (!foundUser) {
      throw new NotFoundException(`User with id ${dto.id} not found`);
    }

    const passwordValidation = this.validatePassword(dto.password);

    if (!passwordValidation.status) {
      throw new BadRequestException(passwordValidation.errors.join(', '));
    }

    const hashedPassword = await this.hashPassword(dto.password);
    const user = await this.userRepository.save(
      new UserModel({
        ...foundUser,
        password: hashedPassword,
      }),
    );

    return new UserSchema(user);
  }

  private validatePassword(password: string): {
    status: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    if (password.length < 6) {
      errors.push('Password must be at least 6 characters long');
    }

    return {
      status: errors.length === 0,
      errors,
    };
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 12;
    return await bcrypt.hash(password, saltRounds);
  }
}
