import { CampaignSchema } from './schema/campaign.schema';
import { GetCampaignDto } from './dto/campaign.dto';
import { CampaignService } from './campaign.service';
export declare class CampaignController {
    private campaignService;
    constructor(campaignService: CampaignService);
    getCampaigns(dto: GetCampaignDto): Promise<CampaignSchema[]>;
}
