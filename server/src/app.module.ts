import { Module } from '@nestjs/common';
import { PrismaModule } from './tools/prisma/prisma.module';
import { CampaignModule } from './campaign/campaign.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, CampaignModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
