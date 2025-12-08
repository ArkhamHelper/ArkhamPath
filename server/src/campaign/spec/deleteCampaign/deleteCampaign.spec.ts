import type { DeleteCampaignDto } from '../../dto/deleteCampaign.dto';
import { CampaignsInfrastructure } from '../campaigns.infrastructure';
import { DeleteCampaignFixture } from './deleteCampaign.fixture';

describe('DeleteCampaign', () => {
  let fixture: DeleteCampaignFixture;
  let infrastructure: CampaignsInfrastructure;

  beforeEach(() => {
    fixture = new DeleteCampaignFixture();
    infrastructure = new CampaignsInfrastructure();

    infrastructure.campaignRepository.set(fixture.campaigns);
  });

  it('should delete campaign', async () => {
    await deleteCampaign({ id: '1' });

    wasDeleted('1');
  });

  it('should throw error on invalid campaign id', async () => {
    await expect(deleteCampaign({ id: '2' })).rejects.toThrow(
      'Campaign with id 2 not found',
    );
  });

  function deleteCampaign(dto: DeleteCampaignDto): Promise<void> {
    return infrastructure.campaignService.deleteCampaign(dto);
  }

  function wasDeleted(id: string | number): void {
    expect(infrastructure.campaignRepository.wasDeleted(id)).toBeTruthy();
  }
});
