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
    return this.userService.auth(body);
  }

  @Get(':id')
  async getOne(@Param() params: GetOneUserParams): Promise<UserSchema> {
    return this.userService.getOne(params);
  }

  @Post()
  async create(@Body() body: CreateUserBody): Promise<UserSchema> {
    return this.userService.create(body);
  }

  @Put(':id')
  async update(
    @Param() params: UpdateUserParams,
    @Body() body: UpdateUserBody,
  ): Promise<UserSchema> {
    return this.userService.update({ ...body, ...params });
  }
}
