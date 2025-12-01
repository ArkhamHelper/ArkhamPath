import { Controller, Get } from '@nestjs/common';
import { CampaignSchema } from './schema/campaign.schema';
import { GetCampaignDto } from './dto/campaign.dto';
import { CampaignService } from './campaign.service';

@Controller('campaigns')
export class CampaignController {
  constructor(private campaignService: CampaignService) {}

  @Get('/')
  async getCampaigns(dto: GetCampaignDto): Promise<CampaignSchema[]> {
    const campaigns: CampaignSchema[] = [];

    if (dto.id) {
      const foundCampaign = await this.campaignService.findOneById(dto.id);
      campaigns.push(foundCampaign);
    }

    if (dto.userId) {
      const foundCampaigns = await this.campaignService.findManyByUserId(
        dto.userId,
      );
      campaigns.push(...foundCampaigns);
    }

    return campaigns;
  }
}
