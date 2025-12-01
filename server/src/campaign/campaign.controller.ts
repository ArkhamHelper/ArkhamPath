import { Controller, Get, Query } from '@nestjs/common';
import { CampaignSchema } from './schema/campaign.schema';
import { GetCampaignQuery } from './dto/campaign.dto';
import { CampaignService } from './campaign.service';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';

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
}
