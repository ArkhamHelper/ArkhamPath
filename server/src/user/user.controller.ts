import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import type { GetOneUserParams } from './dto/getOneUser.dto';
import { CreateUserBody } from './dto/createUser.dto';
import { UpdateUserBody, UpdateUserParams } from './dto/updateUser.dto';
import { AuthUserBody } from './dto/authUser.dto';
import { UserSchema } from './schema/user.schema';
import { ApiBody } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('auth')
  @ApiBody({ type: AuthUserBody })
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
  @ApiBody({ type: CreateUserBody })
  async create(@Body() body: CreateUserBody): Promise<UserSchema> {
    const user = await this.userService.create(body);

    return new UserSchema(user);
  }

  @Put(':id')
  @ApiBody({ type: UpdateUserBody })
  async update(
    @Param() params: UpdateUserParams,
    @Body() body: UpdateUserBody,
  ): Promise<UserSchema> {
    const user = await this.userService.update({ ...body, ...params });

    return new UserSchema(user);
  }
}
