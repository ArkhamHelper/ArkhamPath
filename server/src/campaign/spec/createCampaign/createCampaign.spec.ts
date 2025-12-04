import type { CreateCampaignDto } from '../../dto/createCampaign.dto';
import type { CampaignModel } from '../../model/campaign.model';
import type { CampaignSchema } from '../../schema/campaign.schema';
import { CampaignsInfrastructure } from '../campaigns.infrastructure';
import { CreateCampaignFixture } from './createCampaign.fixture';

describe('GetOneCampaign', () => {
  const fixture = new CreateCampaignFixture();
  const infrastructure = new CampaignsInfrastructure();

  beforeEach(async () => {
    infrastructure.userRepository.set(fixture.users);
    infrastructure.difficultyRepository.set(fixture.campaignDifficulties);
  });

  it('should create campaign', async () => {
    const expected = fixture.expectedCampaign();

    const createdCampaign = await createCampaign(
      fixture.getDataForCreateCampaign(),
    );

    expect({ ...createdCampaign, id: `${createdCampaign.id}` }).toEqual(
      expected.schema,
    );
    wasSaved(expected.model);
  });

  it('should throw error on invalid userId', async () => {
    await expect(
      createCampaign(fixture.getDateWithInvalidUserId()),
    ).rejects.toThrow('User with id 2 not found');
  });

  function createCampaign(dto: CreateCampaignDto): Promise<CampaignSchema> {
    return infrastructure.campaignService.create(dto);
  }

  function wasSaved(expectedModel: CampaignModel): void {
    expect(
      infrastructure.campaignRepository.wasSaved(expectedModel),
    ).toBeTruthy();
  }
});
