import { CampaignModel } from '../model/campaign.model';
import { Injectable } from '@nestjs/common';
import { CampaignDifficultyModel } from '../model/difficulty.model';
import { Campaign } from '../../generated/prisma/client';
import { PrismaService } from '../../tools/prisma/prisma.service';
import { IBaseRepository } from '../../tools/interface/base.repository';

export interface ICampaignRepository extends IBaseRepository<CampaignModel> {
  findManyByUserId(
    userId: string,
    limit?: number,
    offset?: number,
  ): Promise<CampaignModel[]>;
}

@Injectable()
export class CampaignRepository implements ICampaignRepository {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: string): Promise<CampaignModel | undefined> {
    const foundCampaign = await this.prisma.campaign.findUnique({
      where: { id },
    });

    if (!foundCampaign) {
      return undefined;
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

  async delete(id: string): Promise<void> {
    await this.prisma.campaign.delete({ where: { id } });
  }

  private async generateModel(campaign: Campaign): Promise<CampaignModel> {
    const foundDifficulty =
      await this.prisma.campaignDifficulty.findUniqueOrThrow({
        where: { id: campaign.difficultyId },
      });

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
