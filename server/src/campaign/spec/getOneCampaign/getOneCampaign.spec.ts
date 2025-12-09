import type { GetOneCampaignDto } from '../../dto/getOneCampaign.dto';
import type { CampaignSchema } from '../../schema/campaign.schema';
import { CampaignsInfrastructure } from '../campaigns.infrastructure';
import { GetOneCampaignFixture } from './getOneCampaign.fixture';

describe('GetOneCampaign', () => {
  let fixture: GetOneCampaignFixture;
  let fake: CampaignsInfrastructure;

  beforeEach(async () => {
    fixture = new GetOneCampaignFixture();
    fake = new CampaignsInfrastructure();

    fake.campaignRepository.set(fixture.campaigns);
  });

  it('should find by id', async () => {
    const campaign = await getCampaign({ id: '2' });

    expect(campaign.id).toEqual('2');
  });

  it('should throw error on invalid campaign id', async () => {
    await expect(getCampaign({ id: '3' })).rejects.toThrow(
      'Campaign with id 3 not found',
    );
  });

  function getCampaign(dto: GetOneCampaignDto): Promise<CampaignSchema> {
    return fake.campaignService.findOneById(dto);
  }
});
