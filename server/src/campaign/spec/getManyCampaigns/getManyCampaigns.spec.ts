import { GetManyCampaignsDto } from '../../../campaign/dto/getManyCampaigns.dto';
import { CampaignsInfrastructure } from '../campaigns.infrastructure';
import { GetManyCampaignsFixture } from './getManyCampaigns.fixture';
import { CampaignSchema } from '../../../campaign/schema/campaign.schema';

describe('GetManyCampaigns', () => {
  const fixture = new GetManyCampaignsFixture();
  const infrastructure = new CampaignsInfrastructure();

  beforeAll(async () => {
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

  function getCampaigns(dto: GetManyCampaignsDto): Promise<CampaignSchema[]> {
    return infrastructure.campaignService.findManyByParams(dto);
  }
});
