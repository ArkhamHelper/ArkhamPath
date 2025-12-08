import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CampaignController } from './campaign.controller';
import { CampaignRepository } from './repository/campaign.repository';
import { PrismaModule } from '../tools/prisma/prisma.module';
import { CampaignDifficultyRepository } from './repository/difficulty.repository';
import { UserModule } from '../user/user.module';

@Module({
  imports: [PrismaModule, UserModule],

  controllers: [CampaignController],
  providers: [
    CampaignService,
    { provide: 'ICampaignRepository', useClass: CampaignRepository },
    {
      provide: 'ICampaignDifficultyRepository',
      useClass: CampaignDifficultyRepository,
    },
  ],
})
export class CampaignModule {}
