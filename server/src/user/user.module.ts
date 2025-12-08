import { Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { PrismaModule } from '../tools/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: ['IUserRepository'],

  providers: [
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}
