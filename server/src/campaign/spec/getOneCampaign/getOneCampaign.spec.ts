import type { GetOneCampaignDto } from '../../dto/getOneCampaign.dto';
import type { CampaignSchema } from '../../schema/campaign.schema';
import { CampaignsInfrastructure } from '../campaigns.infrastructure';
import { GetOneCampaignFixture } from './getOneCampaign.fixture';

describe('GetOneCampaign', () => {
  const fixture = new GetOneCampaignFixture();
  const infrastructure = new CampaignsInfrastructure();

  beforeEach(async () => {
    infrastructure.campaignRepository.set(fixture.campaigns);
  });

  it('should throw error on invalid userId', async () => {
    expect('TODO: add user repository').toBeUndefined();
  });

  it('should find by id', async () => {
    const campaign = await getCampaign({ id: '2' });

    expect(campaign.id).toEqual('2');
  });

  function getCampaign(dto: GetOneCampaignDto): Promise<CampaignSchema> {
    return infrastructure.campaignService.findOneById(dto);
  }
});
