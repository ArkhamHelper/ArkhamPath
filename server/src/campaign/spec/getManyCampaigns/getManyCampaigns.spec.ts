import { GetManyCampaignsDto } from '../../../campaign/dto/getManyCampaigns.dto';
import { CampaignsInfrastructure } from '../campaigns.infrastructure';
import { GetManyCampaignsFixture } from './getManyCampaigns.fixture';
import { CampaignSchema } from '../../../campaign/schema/campaign.schema';

describe('GetManyCampaigns', () => {
  let fixture: GetManyCampaignsFixture;
  let infrastructure: CampaignsInfrastructure;

  beforeAll(async () => {
    fixture = new GetManyCampaignsFixture();
    infrastructure = new CampaignsInfrastructure();

    infrastructure.userRepository.set(fixture.users);
    infrastructure.campaignRepository.set(fixture.campaigns);
  });

  it('should find only by userId', async () => {
    const campaigns = await getCampaigns({
      userId: '1',
      limit: 10,
    });

    expect(campaigns.length).toEqual(3);
  });

  it('should find by cycleCode', async () => {
    const campaigns = await getCampaigns({
      userId: '1',
      cycleCode: 'the_dunwich_legacy',
      limit: 10,
    });

    expect(campaigns.length).toEqual(2);
  });

  it('should find only by difficultyId', async () => {
    const campaigns = await getCampaigns({
      userId: '1',
      difficultyId: 1,
      limit: 10,
    });

    expect(campaigns.length).toEqual(2);
  });

  it('should find only by name', async () => {
    const campaigns = await getCampaigns({
      userId: '1',
      name: 'dunwich',
      limit: 10,
    });

    expect(campaigns.length).toEqual(2);
  });

  it('should throw error on invalid userId', async () => {
    await expect(
      getCampaigns({
        userId: '3',
        limit: 10,
      }),
    ).rejects.toThrow('User with id 3 not found');
  });

  function getCampaigns(dto: GetManyCampaignsDto): Promise<CampaignSchema[]> {
    return infrastructure.campaignService.findManyByParams(dto);
  }
});
