import type { CreateCampaignDto } from '../../dto/createCampaign.dto';
import type { CampaignModel } from '../../model/campaign.model';
import { CampaignsInfrastructure } from '../campaigns.infrastructure';
import { CreateCampaignFixture } from './createCampaign.fixture';

describe('GetOneCampaign', () => {
  let fixture: CreateCampaignFixture;
  let fake: CampaignsInfrastructure;

  beforeEach(async () => {
    fixture = new CreateCampaignFixture();
    fake = new CampaignsInfrastructure();

    fake.userRepository.set(fixture.users);
    fake.difficultyRepository.set(fixture.campaignDifficulties);
  });

  it('should create campaign', async () => {
    await createCampaign(fixture.getDataForCreateCampaign());

    wasSaved(fixture.expectedCampaign());
  });

  it('should throw error on invalid userId', async () => {
    await expect(
      createCampaign(fixture.getDateWithInvalidUserId()),
    ).rejects.toThrow('User with id 2 not found');
  });

  function createCampaign(dto: CreateCampaignDto): Promise<CampaignModel> {
    return fake.campaignService.create(dto);
  }

  function wasSaved(expectedModel: CampaignModel): void {
    expect(fake.campaignRepository.wasSaved(expectedModel)).toBeTruthy();
  }
});
