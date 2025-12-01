import { Module } from '@nestjs/common';
import { PrismaService } from './tools/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
