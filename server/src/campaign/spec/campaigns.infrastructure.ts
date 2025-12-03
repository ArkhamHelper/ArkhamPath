import { CampaignService } from '../campaign.service';
import { CampaignFakeRepository } from '../repository/test/campaignFake.repository';
import { CampaignDifficultyFakeRepository } from '../repository/test/difficultyFake.repository';

export class CampaignsInfrastructure {
  public campaignService: CampaignService;
  public campaignRepository: CampaignFakeRepository;
  public difficultyRepository: CampaignDifficultyFakeRepository;

  constructor() {
    this.campaignRepository = new CampaignFakeRepository();
    this.difficultyRepository = new CampaignDifficultyFakeRepository();
    this.campaignService = new CampaignService(
      this.campaignRepository,
      this.difficultyRepository,
    );
  }
}
