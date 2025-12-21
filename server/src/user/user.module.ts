import { forwardRef, Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { PrismaModule } from '../tools/prisma/prisma.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PathModule } from '../path/path.module';

@Module({
  imports: [PrismaModule, forwardRef(() => PathModule)],
  exports: ['IUserRepository', UserService],

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
