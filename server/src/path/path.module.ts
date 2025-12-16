import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from '../tools/prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { PathRepository } from './repository/path.repository';

@Module({
  imports: [PrismaModule, forwardRef(() => UserModule)],
  exports: ['IPathRepository'],

  providers: [
    {
      provide: 'IPathRepository',
      useClass: PathRepository,
    },
  ],
})
export class PathModule {}
