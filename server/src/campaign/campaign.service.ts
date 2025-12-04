import { Inject, Injectable } from '@nestjs/common';
import { CampaignSchema } from './schema/campaign.schema';
import { CampaignModel } from './model/campaign.model';
import { CreateCampaignDto } from './dto/createCampaign.dto';
import type { ICampaignDifficultyRepository } from './repository/difficulty.repository';
import { UpdateCampaignDto } from './dto/updateCampaign.dto';
import { GetOneCampaignDto } from './dto/getOneCampaign.dto';
import { GetManyCampaignsDto } from './dto/getManyCampaigns.dto';
import type { ICampaignRepository } from './repository/campaign.repository';
import type { IUserRepository } from '../user/repository/user.repository';
import type { DeleteCampaignDto } from './dto/deleteCampaign.dto';

@Injectable()
export class CampaignService {
  constructor(
    @Inject('IUserRepository')
    private userRepository: IUserRepository,

    @Inject('ICampaignRepository')
    private campaignRepository: ICampaignRepository,

    @Inject('ICampaignDifficultyRepository')
    private difficultyRepository: ICampaignDifficultyRepository,
  ) {}

  async findOneById(dto: GetOneCampaignDto): Promise<CampaignSchema> {
    const campaign = await this.campaignRepository.findOneById(dto.id);

    if (!campaign) {
      throw new Error(`Campaign with id ${dto.id} not found`);
    }

    return new CampaignSchema(campaign);
  }

  async findManyByParams(dto: GetManyCampaignsDto): Promise<CampaignSchema[]> {
    await this.findUserOrThrow(dto.userId);

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
    await this.findUserOrThrow(campaign.userId);

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

    if (!foundCampaign) {
      throw new Error(`Campaign with id ${campaign.id} not found`);
    }

    const campaignModel: CampaignModel = {
      ...foundCampaign,
      name: campaign.name ? campaign.name : foundCampaign.name,
      userResults: {
        ...foundCampaign.userResults,
        ...campaign.userResults,
      },
      journalNotes: foundCampaign.journalNotes
        .filter((note) => !campaign.journalNotes?.remove.includes(note))
        .concat(campaign.journalNotes?.add ?? []),
    };

    const updatedCampaign = await this.campaignRepository.save(campaignModel);

    return new CampaignSchema(updatedCampaign);
  }

  async deleteCampaign(dto: DeleteCampaignDto): Promise<void> {
    const foundCampaign = await this.campaignRepository.findOneById(dto.id);

    if (!foundCampaign) {
      throw new Error(`Campaign with id ${dto.id} not found`);
    }

    await this.campaignRepository.delete(dto.id);
  }

  private async findUserOrThrow(userId: string): Promise<void> {
    const foundUser = await this.userRepository.findOneById(userId);

    if (!foundUser) {
      throw new Error(`User with id ${userId} not found`);
    }
  }
}
