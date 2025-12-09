import { Injectable } from '@nestjs/common';
import type { User } from '../../generated/prisma/client';
import type { IBaseRepository } from '../../tools/interface/base.repository';
import { PrismaService } from '../../tools/prisma/prisma.service';
import { UserModel } from '../model/user.model';

export interface IUserRepository extends IBaseRepository<UserModel> {
  findOneByEmail(email: string): Promise<UserModel | undefined>;
}

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: string): Promise<UserModel | undefined> {
    const foundUser = await this.prisma.user.findUnique({ where: { id } });

    if (!foundUser) {
      return undefined;
    }

    return await this.generateModel(foundUser);
  }

  async findOneByEmail(email: string): Promise<UserModel | undefined> {
    const foundUser = await this.prisma.user.findUnique({ where: { email } });

    if (!foundUser) {
      return undefined;
    }

    return await this.generateModel(foundUser);
  }

  async save(user: UserModel): Promise<UserModel> {
    const resultUser = user.id
      ? await this.prisma.user.update({
          where: { id: user.id },
          data: { password: user.password },
        })
      : await this.prisma.user.create({
          data: {
            email: user.email,
            password: user.password,
          },
        });

    return await this.generateModel(resultUser);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }

  private async generateModel(user: User): Promise<UserModel> {
    return new UserModel(user);
  }
}
