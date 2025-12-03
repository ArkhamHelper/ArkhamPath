import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CampaignController } from './campaign.controller';
import { CampaignRepository } from './repository/campaign.repository';
import { PrismaModule } from '../tools/prisma/prisma.module';
import { CampaignDifficultyRepository } from './repository/difficulty.repository';

@Module({
  imports: [PrismaModule],

  controllers: [CampaignController],
  providers: [
    CampaignService,
    CampaignRepository,
    CampaignDifficultyRepository,
  ],
})
export class CampaignModule {}
