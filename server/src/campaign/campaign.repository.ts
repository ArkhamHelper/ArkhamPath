import { CampaignModel } from './model/campaign.model';
import { NotFoundException } from '@nestjs/common';
import { CampaignDifficultyModel } from './model/difficulty.model';
import { Campaign } from '../generated/prisma/client';
import { PrismaService } from 'src/tools/prisma/prisma.service';

export class CampaignRepository {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: string): Promise<CampaignModel> {
    const foundCampaign = await this.prisma.campaign.findUnique({
      where: { id },
    });

    if (!foundCampaign) {
      throw new NotFoundException(`Campaign with id ${id} not found`);
    }

    return this.generateModel(foundCampaign);
  }

  async findManyByUserId(userId: string): Promise<CampaignModel[]> {
    const foundCampaigns = await this.prisma.campaign.findMany({
      where: { userId },
    });

    return Promise.all(
      foundCampaigns.map((campaign) => this.generateModel(campaign)),
    );
  }

  private async generateModel(campaign: Campaign): Promise<CampaignModel> {
    const foundDifficulty = await this.prisma.campaignDifficulty.findUnique({
      where: { id: campaign.difficultyId },
    });

    if (!foundDifficulty) {
      throw new NotFoundException(
        `Difficulty with id ${campaign.difficultyId} not found'`,
      );
    }

    const difficulty: CampaignDifficultyModel = {
      id: foundDifficulty.id,
      name: foundDifficulty.name,
    };

    return {
      id: campaign.id,
      name: campaign.name,
      journalNotes: campaign.journalNotes,
      userResults: campaign.userResults as { [key: string]: string },
      difficulty,
    };
  }
}
