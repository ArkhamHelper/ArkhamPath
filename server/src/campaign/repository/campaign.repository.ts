import { CampaignModel } from '../model/campaign.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CampaignDifficultyModel } from '../model/difficulty.model';
import { Campaign } from '../../generated/prisma/client';
import { PrismaService } from 'src/tools/prisma/prisma.service';

@Injectable()
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

  async findManyByUserId(
    userId: string,
    limit?: number,
    offset?: number,
  ): Promise<CampaignModel[]> {
    const foundCampaigns = await this.prisma.campaign.findMany({
      where: { userId },
      take: limit,
      skip: offset,
    });

    return Promise.all(
      foundCampaigns.map((campaign) => this.generateModel(campaign)),
    );
  }

  async save(campaign: CampaignModel): Promise<CampaignModel> {
    if (campaign.id) {
      const foundCampaign = await this.prisma.campaign.findUnique({
        where: { id: campaign.id },
      });

      if (!foundCampaign) {
        throw new NotFoundException(
          `Campaign with id ${campaign.id} not found`,
        );
      }
    }

    const resultCampaign: Campaign = campaign.id
      ? await this.prisma.campaign.update({
          where: { id: campaign.id },
          data: {
            name: campaign.name,
            userId: campaign.userId,
            userResults: campaign.userResults,
            journalNotes: campaign.journalNotes,
            difficultyId: campaign.difficulty?.id,
          },
        })
      : await this.prisma.campaign.create({
          data: {
            id: campaign.id,
            name: campaign.name,
            userId: campaign.userId,
            cycleCode: campaign.cycleCode,
            userResults: campaign.userResults,
            journalNotes: campaign.journalNotes,
            difficultyId: campaign.difficulty.id,
          },
        });

    return this.generateModel(resultCampaign);
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
      userId: campaign.userId,
      cycleCode: campaign.cycleCode,
      journalNotes: campaign.journalNotes,
      userResults: campaign.userResults as { [key: string]: string },
      difficulty,
    };
  }
}
