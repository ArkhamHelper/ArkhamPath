import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import type { GetOneUserParams } from './dto/getOneUser.dto';
import type { CreateUserBody } from './dto/createUser.dto';
import type { UpdateUserBody, UpdateUserParams } from './dto/updateUser.dto';
import type { AuthUserBody } from './dto/authUser.dto';
import { UserSchema } from './schema/user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('auth')
  async auth(@Body() body: AuthUserBody): Promise<UserSchema> {
    const user = await this.userService.auth(body);

    return new UserSchema(user);
  }

  @Get(':id')
  async getOne(@Param() params: GetOneUserParams): Promise<UserSchema> {
    const user = await this.userService.getOne(params);

    return new UserSchema(user);
  }

  @Post()
  async create(@Body() body: CreateUserBody): Promise<UserSchema> {
    const user = await this.userService.create(body);

    return new UserSchema(user);
  }

  @Put(':id')
  async update(
    @Param() params: UpdateUserParams,
    @Body() body: UpdateUserBody,
  ): Promise<UserSchema> {
    const user = await this.userService.update({ ...body, ...params });

    return new UserSchema(user);
  }
}
