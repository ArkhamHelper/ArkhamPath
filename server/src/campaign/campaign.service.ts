import { Injectable } from '@nestjs/common';
import { CampaignRepository } from './repository/campaign.repository';
import { CampaignSchema } from './schema/campaign.schema';
import { CampaignModel } from './model/campaign.model';
import { CreateCampaignDto } from './dto/createCampaign.dto';
import { CampaignDifficultyRepository } from './repository/difficulty.repository';
import { UpdateCampaignDto } from './dto/updateCampaign.dto';

@Injectable()
export class CampaignService {
  constructor(
    private campaignRepository: CampaignRepository,
    private difficultyRepository: CampaignDifficultyRepository,
  ) {}

  async findOneById(id: string): Promise<CampaignSchema> {
    const campaign = await this.campaignRepository.findOneById(id);

    return new CampaignSchema(campaign);
  }

  async findManyByUserId(userId: string): Promise<CampaignSchema[]> {
    const campaigns = await this.campaignRepository.findManyByUserId(userId);

    return campaigns.map((campaign) => new CampaignSchema(campaign));
  }

  async create(campaign: CreateCampaignDto): Promise<CampaignSchema> {
    const foundDifficulty = await this.difficultyRepository.findOneById(
      campaign.difficultyId,
    );

    const campaignModel = new CampaignModel({
      ...campaign,
      difficulty: foundDifficulty,
    });

    const createdCampaign = await this.campaignRepository.save(campaignModel);

    return new CampaignSchema(createdCampaign);
  }

  async update(campaign: UpdateCampaignDto): Promise<CampaignSchema> {
    const foundCampaign = await this.campaignRepository.findOneById(
      campaign.id,
    );

    const campaignModel: CampaignModel = {
      ...foundCampaign,
      name: campaign.name ? campaign.name : foundCampaign.name,
      journalNotes: foundCampaign.journalNotes
        .filter((note) => !campaign.journalNotes?.remove.includes(note))
        .concat(campaign.journalNotes?.add ?? []),
    };

    const updatedCampaign = await this.campaignRepository.save(campaignModel);

    return new CampaignSchema(updatedCampaign);
  }
}
