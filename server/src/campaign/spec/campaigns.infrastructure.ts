import { CampaignService } from '../campaign.service';
import { CampaignFakeRepository } from '../repository/test/campaignFake.repository';
import { CampaignDifficultyFakeRepository } from '../repository/test/difficultyFake.repository';

export class CampaignsInfrastructure {
  constructor(
    public campaignRepository = new CampaignFakeRepository(),
    public difficultyRepository = new CampaignDifficultyFakeRepository(),
    public campaignService = new CampaignService(
      this.campaignRepository,
      this.difficultyRepository,
    ),
  ) {}
}
