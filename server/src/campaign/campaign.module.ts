import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CampaignController } from './campaign.controller';
import { CampaignRepository } from './campaign.repository';
import { PrismaModule } from 'src/tools/prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],

  controllers: [CampaignController],
  providers: [CampaignService, CampaignRepository],
})
export class CampaignModule {}
