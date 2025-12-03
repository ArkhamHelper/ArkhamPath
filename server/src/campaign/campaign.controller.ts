import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CampaignSchema } from './schema/campaign.schema';
import { GetCampaignQuery } from './dto/getCampaign.dto';
import { CampaignService } from './campaign.service';
import { ApiBody, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { CreateCampaignBody } from './dto/createCampaign.dto';
import {
  UpdateCampaignBody,
  UpdateCampaignParams,
} from './dto/updateCampaign.dto';

@Controller('campaigns')
export class CampaignController {
  constructor(private campaignService: CampaignService) {}

  @Get('/')
  @ApiQuery({ type: GetCampaignQuery })
  @ApiResponse({ type: CampaignSchema, isArray: true })
  async getCampaigns(
    @Query() query: GetCampaignQuery,
  ): Promise<CampaignSchema[]> {
    const campaigns: CampaignSchema[] = [];

    if (query.id) {
      const foundCampaign = await this.campaignService.findOneById(query.id);
      campaigns.push(foundCampaign);
    }

    if (query.userId) {
      const foundCampaigns = await this.campaignService.findManyByUserId(
        query.userId,
      );
      campaigns.push(...foundCampaigns);
    }

    return campaigns;
  }

  @Post('/')
  @ApiBody({ type: CreateCampaignBody })
  @ApiResponse({ type: CampaignSchema })
  async createCampaign(
    @Body() body: CreateCampaignBody,
  ): Promise<CampaignSchema> {
    return this.campaignService.create(body);
  }

  @Post('/{id}')
  @ApiBody({ type: UpdateCampaignBody })
  @ApiResponse({ type: CampaignSchema })
  async updateCampaign(
    @Param() params: UpdateCampaignParams,
    @Body() body: UpdateCampaignBody,
  ): Promise<CampaignSchema> {
    return this.campaignService.update({
      ...body,
      ...params,
    });
  }
}
