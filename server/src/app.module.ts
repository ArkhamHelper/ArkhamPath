import { Module } from '@nestjs/common';
import { PrismaModule } from './tools/prisma/prisma.module';
import { CampaignModule } from './campaign/campaign.module';

@Module({
  imports: [PrismaModule, CampaignModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
