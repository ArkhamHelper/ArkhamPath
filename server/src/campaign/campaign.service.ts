import { Injectable } from '@nestjs/common';
import { CampaignRepository } from './repository/campaign.repository';
import { CampaignSchema } from './schema/campaign.schema';
import { CampaignModel } from './model/campaign.model';
import { CreateCampaignDto } from './dto/createCampaign.dto';
import { CampaignDifficultyRepository } from './repository/difficulty.repository';
import { UpdateCampaignDto } from './dto/updateCampaign.dto';
import { GetOneCampaignDto } from './dto/getOneCampaign.dto';
import { GetManyCampaignsDto } from './dto/getManyCampaigns.dto';

@Injectable()
export class CampaignService {
  constructor(
    private campaignRepository: CampaignRepository,
    private difficultyRepository: CampaignDifficultyRepository,
  ) {}

  async findOneById(dto: GetOneCampaignDto): Promise<CampaignSchema> {
    const campaign = await this.campaignRepository.findOneById(dto.id);

    return new CampaignSchema(campaign);
  }

  async findManyByParams(dto: GetManyCampaignsDto): Promise<CampaignSchema[]> {
    const campaigns = await this.campaignRepository.findManyByUserId(
      dto.userId,
      dto.limit,
      dto.offset,
    );

    const checkParams = (campaign: CampaignModel): boolean =>
      (!dto.cycleCode || campaign.cycleCode === dto.cycleCode) &&
      (!dto.difficultyId || campaign.difficulty.id === dto.difficultyId) &&
      (!dto.name ||
        campaign.name.toLowerCase().includes(dto.name.toLowerCase()));

    return campaigns
      .filter(checkParams)
      .map((campaign) => new CampaignSchema(campaign));
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
