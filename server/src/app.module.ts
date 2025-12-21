import { Module } from '@nestjs/common';
import { PrismaModule } from './tools/prisma/prisma.module';
import { CampaignModule } from './campaign/campaign.module';
import { UserModule } from './user/user.module';
import { PathModule } from './path/path.module';

@Module({
  imports: [PrismaModule, CampaignModule, UserModule, PathModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
