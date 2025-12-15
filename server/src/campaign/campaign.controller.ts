import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CampaignSchema } from './schema/campaign.schema';
import { GetOneCampaignParams } from './dto/getOneCampaign.dto';
import { CampaignService } from './campaign.service';
import { ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CreateCampaignBody } from './dto/createCampaign.dto';
import {
  UpdateCampaignBody,
  UpdateCampaignParams,
} from './dto/updateCampaign.dto';
import { GetManyCampaignsQuery } from './dto/getManyCampaigns.dto';
import type { DeleteCampaignParams } from './dto/deleteCampaign.dto';

@Controller('campaigns')
export class CampaignController {
  constructor(private campaignService: CampaignService) {}

  @Get('')
  @ApiResponse({ type: CampaignSchema, isArray: true })
  async getCampaigns(
    @Query() query: GetManyCampaignsQuery,
  ): Promise<CampaignSchema[]> {
    const campaigns = await this.campaignService.findManyByParams({
      name: query.name,
      limit: +query.limit,
      offset: query.offset ? +query.offset : 0,
      userId: query.userId,
      cycleCode: query.cycleCode,
      difficultyId: query.difficultyId,
    });

    return campaigns.map((campaign) => new CampaignSchema(campaign));
  }

  @Get(':id')
  @ApiResponse({ type: CampaignSchema })
  async getCampaign(
    @Param() params: GetOneCampaignParams,
  ): Promise<CampaignSchema> {
    const campaign = await this.campaignService.findOneById({
      id: params.id,
    });

    return new CampaignSchema(campaign);
  }

  @Post('')
  @ApiBody({ type: CreateCampaignBody })
  @ApiResponse({ type: CampaignSchema })
  async createCampaign(
    @Body() body: CreateCampaignBody,
  ): Promise<CampaignSchema> {
    const campaign = await this.campaignService.create(body);

    return new CampaignSchema(campaign);
  }

  @Post(':id')
  @ApiBody({ type: UpdateCampaignBody })
  @ApiResponse({ type: CampaignSchema })
  async updateCampaign(
    @Param() params: UpdateCampaignParams,
    @Body() body: UpdateCampaignBody,
  ): Promise<CampaignSchema> {
    const campaign = await this.campaignService.update({
      ...body,
      ...params,
    });

    return new CampaignSchema(campaign);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'string' })
  async deleteCampaign(@Param() params: DeleteCampaignParams): Promise<void> {
    await this.campaignService.deleteCampaign(params);
  }
}
