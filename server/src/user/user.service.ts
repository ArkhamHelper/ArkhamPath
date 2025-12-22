import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import type { IUserRepository } from './repository/user.repository';
import type { GetOneUserDto } from './dto/getOneUser.dto';
import type { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { UserModel } from './model/user.model';
import type { UpdateUserDto } from './dto/updateUser.dto';
import type { AuthUserDto } from './dto/authUser.dto';
import type { IPathRepository } from '../path/repository/path.repository';
import { cyclesCodes } from '../../assets/cyclesCodes';
import { PathModel } from '../path/model/path.model';

@Injectable()
export class UserService {
  constructor(
    @Inject('IUserRepository')
    private userRepository: IUserRepository,

    @Inject(forwardRef(() => 'IPathRepository'))
    private pathRepository: IPathRepository,
  ) {}

  async auth(dto: AuthUserDto): Promise<UserModel> {
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

    return foundUser;
  }

  async getOne(dto: GetOneUserDto): Promise<UserModel> {
    const foundUser = await this.userRepository.findOneById(dto.id);

    if (!foundUser) {
      throw new Error(`User with id ${dto.id} not found`);
    }

    return foundUser;
  }

  async create(dto: CreateUserDto): Promise<UserModel> {
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

    await Promise.all(
      cyclesCodes.map((cycleCode) =>
        this.pathRepository.save(new PathModel({ cycleCode, userId: user.id })),
      ),
    );

    return user;
  }

  async update(dto: UpdateUserDto): Promise<UserModel> {
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

    return user;
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
