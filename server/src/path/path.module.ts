import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from '../tools/prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { PathRepository } from './repository/path.repository';
import { PathController } from './path.controller';
import { PathService } from './path.service';

@Module({
  imports: [PrismaModule, forwardRef(() => UserModule)],
  exports: ['IPathRepository'],

  controllers: [PathController],
  providers: [
    {
      provide: 'IPathRepository',
      useClass: PathRepository,
    },
    PathService,
  ],
})
export class PathModule {}
