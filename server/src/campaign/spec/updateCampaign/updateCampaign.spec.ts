import type { UpdateCampaignDto } from '../../dto/updateCampaign.dto';
import type { CampaignModel } from '../../model/campaign.model';
import { CampaignsFakeInfrastructure } from '../campaigns.infrastructure';
import { UpdateCampaignFixture } from './updateCampaign.fixture';

describe('UpdateCampaign', () => {
  let fixture: UpdateCampaignFixture;
  let fake: CampaignsFakeInfrastructure;

  beforeEach(async () => {
    fixture = new UpdateCampaignFixture();
    fake = new CampaignsFakeInfrastructure();

    fake.campaignRepository.set(fixture.campaigns);
  });

  it('should add blocks and lines to data', async () => {
    await updateCampaign(fixture.getAddDataBlocksAndLines());

    wasSaved(fixture.expectedAddDataBlocksAndLines());
  });

  it('should remove blocks and lines from data', async () => {
    await updateCampaign(fixture.getRemoveDataBlocksAndLines());

    wasSaved(fixture.expectedRemoveDataBlocksAndLines());
  });

  it('should remove then add blocks and lines to data', async () => {
    await updateCampaign(fixture.getRemoveAndAddDataBlocksAndLines());

    wasSaved(fixture.expectedRemoveAndAddDataBlocksAndLines());
  });

  it('should throw error on invalid campaign id', async () => {
    await expect(
      updateCampaign(fixture.getInvalidCampaignId()),
    ).rejects.toThrow('Campaign with id 4 not found');
  });

  it('should throw error when block to remove not found', async () => {
    await expect(
      updateCampaign(fixture.getRemoveNonExistentBlock()),
    ).rejects.toThrow(
      'Campaign with id 1 not contain blocks with code start and type end',
    );
  });

  function updateCampaign(campaign: UpdateCampaignDto): Promise<CampaignModel> {
    return fake.campaignService.update(campaign);
  }

  function wasSaved(campaign: CampaignModel): void {
    expect(fake.campaignRepository.wasSaved(campaign)).toBeTruthy();
  }
});
