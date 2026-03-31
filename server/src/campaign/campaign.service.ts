import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CampaignModel } from './model/campaign.model';
import { CreateCampaignDto } from './dto/createCampaign.dto';
import type { ICampaignDifficultyRepository } from './repository/difficulty.repository';
import { UpdateCampaignDto } from './dto/updateCampaign.dto';
import { GetOneCampaignDto } from './dto/getOneCampaign.dto';
import { GetManyCampaignsDto } from './dto/getManyCampaigns.dto';
import type { ICampaignRepository } from './repository/campaign.repository';
import type { IUserRepository } from '../user/repository/user.repository';
import type { DeleteCampaignDto } from './dto/deleteCampaign.dto';
import { deepAdd, deepRemove } from '../tools/utils';
import { cloneDeep, findIndex, get, isArray, last, set } from 'lodash';

const KEYS_TO_COMPARE_BY_TYPE_FOR_UPDATE_CAMPAIGN_DATA: Record<string, string[]> = {
  blocks: ['code', 'blockType'],
  lines: ['startBlockCode', 'endBlockCode'],
  default: ['code'],
}

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

  async findOneById(dto: GetOneCampaignDto): Promise<CampaignModel> {
    const campaign = await this.campaignRepository.findOneById(dto.id);

    if (!campaign) {
      throw new NotFoundException(`Campaign with id ${dto.id} not found`);
    }

    return campaign;
  }

  async findManyByParams(dto: GetManyCampaignsDto): Promise<CampaignModel[]> {
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

    return campaigns.filter(checkParams);
  }

  async create(campaign: CreateCampaignDto): Promise<CampaignModel> {
    await this.findUserOrThrow(campaign.userId);

    const foundDifficulty = await this.difficultyRepository.findOneById(
      campaign.difficultyId,
    );

    const campaignModel = new CampaignModel({
      ...campaign,
      difficulty: foundDifficulty,
    });

    return await this.campaignRepository.save(campaignModel);
  }

  async update(campaign: UpdateCampaignDto): Promise<CampaignModel> {
    const foundCampaign = await this.campaignRepository.findOneById(
      campaign.id,
    );

    if (!foundCampaign) {
      throw new NotFoundException(`Campaign with id ${campaign.id} not found`);
    }

    const updatedData = this.addOrRemoveInCampaignData(foundCampaign, campaign);

    const campaignModel: CampaignModel = {
      ...foundCampaign,
      name: campaign.name ? campaign.name : foundCampaign.name,
      data: updatedData
    };

    return await this.campaignRepository.save(campaignModel);
  }

  async deleteCampaign(dto: DeleteCampaignDto): Promise<void> {
    const foundCampaign = await this.campaignRepository.findOneById(dto.id);

    if (!foundCampaign) {
      throw new NotFoundException(`Campaign with id ${dto.id} not found`);
    }

    await this.campaignRepository.delete(dto.id);
  }

  private async findUserOrThrow(userId: string): Promise<void> {
    const foundUser = await this.userRepository.findOneById(userId);

    if (!foundUser) {
      throw new Error(`User with id ${userId} not found`);
    }
  }

  private addOrRemoveInCampaignData(foundCampaign: CampaignModel, campaign: UpdateCampaignDto) {
    let updatedData = cloneDeep(foundCampaign.data);

    for (let scenarioForUpdate of campaign.data?.scenarios ?? []) {
      const scenarioIndex = findIndex(updatedData.scenarios, (s: any) => s.code === scenarioForUpdate.code);

      if (scenarioIndex === -1) {
        throw new Error(
          `Campaign with id ${campaign.id} does not contain scenario with code ${scenarioForUpdate.code}`
        );
      }

      const scenarioPath = `scenarios[${scenarioIndex}]`;
      const currentScenarioData = get(updatedData, scenarioPath);

      if (scenarioForUpdate.remove) {
        this.validateRemoval(currentScenarioData, scenarioForUpdate.remove, campaign.id);

        const updatedScenario = deepRemove(
          currentScenarioData, 
          scenarioForUpdate.remove, 
          (currentItem, toRemoveItem, path) => {
            const key = last(path) || '';
            const fields = this.getIdentityFields(key);

            return this.isMatchingForRemove(currentItem, toRemoveItem, fields);
          }
        );
        set(updatedData, scenarioPath, updatedScenario);
      }

      if (scenarioForUpdate.add) {
        const scenarioWithAddedData = deepAdd(get(updatedData, scenarioPath), scenarioForUpdate.add);
        set(updatedData, scenarioPath, scenarioWithAddedData);
      }
    }

    return updatedData;
  }

  private validateRemoval(currentScenarioData: any, removeDto: any, campaignId: string) {
    for (const key in removeDto) {
      const itemsToRemove = removeDto[key];
      if (!isArray(itemsToRemove)) continue;

      const targetArray = currentScenarioData[key];
      const fields = this.getIdentityFields(key);

      for (const toRemove of itemsToRemove) {
        const exists = targetArray?.some((item: any) => this.isMatchingForRemove(item, toRemove, fields));
        
        if (!exists) {
          // Generates a comma-separated list of key-value pairs (e.g., "code end, blockType end")
          const details = fields.map(field => `${field} "${toRemove[field]}"`).join(', ');
          const message = `Campaign with id ${campaignId} not contain ${key} with ${details}`;
          
          throw new Error(message);
        }
      }
    }
  }

  private getIdentityFields(key: string): string[] {
    return Object.keys(KEYS_TO_COMPARE_BY_TYPE_FOR_UPDATE_CAMPAIGN_DATA).includes(key)
      ? KEYS_TO_COMPARE_BY_TYPE_FOR_UPDATE_CAMPAIGN_DATA[key]
      : KEYS_TO_COMPARE_BY_TYPE_FOR_UPDATE_CAMPAIGN_DATA.default
  }

  private isMatchingForRemove = (storedRecord: any, deletionCriteria: any, identityFields: string[]): boolean => {
    return identityFields.every(field => storedRecord[field] === deletionCriteria[field]);
  };
}
