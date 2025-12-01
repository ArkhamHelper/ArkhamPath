import { Injectable } from '@nestjs/common';
import { CampaignRepository } from './campaign.repository';
import { CampaignSchema } from './schema/campaign.schema';
import { PrismaService } from 'src/tools/prisma/prisma.service';

@Injectable()
export class CampaignService {
  constructor(
    private campaignRepository: CampaignRepository,
    private prisma: PrismaService,
  ) {}

  async findOneById(id: string): Promise<CampaignSchema> {
    const campaign = await this.campaignRepository.findOneById(id);

    return {
      id: campaign.id,
      name: campaign.name,
      difficulty: campaign.difficulty.name,
      journalNotes: campaign.journalNotes,
    };
  }

  async findManyByUserId(userId: string): Promise<CampaignSchema[]> {
    const campaigns = await this.campaignRepository.findManyByUserId(userId);

    return campaigns.map((campaign) => ({
      id: campaign.id,
      name: campaign.name,
      difficulty: campaign.difficulty.name,
      journalNotes: campaign.journalNotes,
    }));
  }
}
