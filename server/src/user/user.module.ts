import { Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { PrismaModule } from '../tools/prisma/prisma.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [PrismaModule],
  exports: ['IUserRepository'],

  controllers: [UserController],
  providers: [
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    UserService,
  ],
})
export class UserModule {}
