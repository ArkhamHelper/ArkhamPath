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
import { ApiBody, ApiResponse } from '@nestjs/swagger';
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

  @Get('/')
  @ApiResponse({ type: CampaignSchema, isArray: true })
  async getCampaigns(
    @Query() query: GetManyCampaignsQuery,
  ): Promise<CampaignSchema[]> {
    return await this.campaignService.findManyByParams({
      name: query.name,
      limit: +query.limit,
      offset: query.offset ? +query.offset : 0,
      userId: query.userId,
      cycleCode: query.cycleCode,
      difficultyId: query.difficultyId,
    });
  }

  @Get('/{id}')
  @ApiResponse({ type: CampaignSchema })
  async getCampaign(
    @Param() params: GetOneCampaignParams,
  ): Promise<CampaignSchema> {
    return this.campaignService.findOneById({
      id: params.id,
    });
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

  @Delete('/{id}')
  async deleteCampaign(@Param() params: DeleteCampaignParams): Promise<void> {
    return this.campaignService.deleteCampaign(params);
  }
}
