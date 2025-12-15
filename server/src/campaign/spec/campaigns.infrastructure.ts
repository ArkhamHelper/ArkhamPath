import { UserFakeRepository } from '../../user/repository/test/userFake.repository';
import { CampaignController } from '../campaign.controller';
import { CampaignService } from '../campaign.service';
import { CampaignFakeRepository } from '../repository/test/campaignFake.repository';
import { CampaignDifficultyFakeRepository } from '../repository/test/difficultyFake.repository';

export class CampaignsFakeInfrastructure {
  public userRepository: UserFakeRepository;
  public campaignRepository: CampaignFakeRepository;
  public difficultyRepository: CampaignDifficultyFakeRepository;

  public campaignService: CampaignService;
  public campaignController: CampaignController;

  constructor() {
    this.userRepository = new UserFakeRepository();
    this.campaignRepository = new CampaignFakeRepository();
    this.difficultyRepository = new CampaignDifficultyFakeRepository();

    this.campaignService = new CampaignService(
      this.userRepository,
      this.campaignRepository,
      this.difficultyRepository,
    );

    this.campaignController = new CampaignController(this.campaignService);
  }
}
