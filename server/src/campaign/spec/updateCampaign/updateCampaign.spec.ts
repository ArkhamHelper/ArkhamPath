import type { UpdateCampaignDto } from '../../dto/updateCampaign.dto';
import type { CampaignModel } from '../../model/campaign.model';
import { CampaignsInfrastructure } from '../campaigns.infrastructure';
import { UpdateCampaignFixture } from './updateCampaign.fixture';

describe('UpdateCampaign', () => {
  let fixture: UpdateCampaignFixture;
  let fake: CampaignsInfrastructure;

  beforeEach(async () => {
    fixture = new UpdateCampaignFixture();
    fake = new CampaignsInfrastructure();

    fake.campaignRepository.set(fixture.campaigns);
  });

  it('should update userResults', async () => {
    await updateCampaign(fixture.getUpdateUserResults());

    wasSaved(fixture.expectedUpdateUserResults());
  });

  it('should replace userResults', async () => {
    await updateCampaign(fixture.getReplaceUserResults());

    wasSaved(fixture.expectedReplaceUserResults());
  });

  it('should add journal notes', async () => {
    await updateCampaign(fixture.getAddJournalNotes());

    wasSaved(fixture.expectedAddJournalNotes());
  });

  it('should remove journal notes', async () => {
    await updateCampaign(fixture.getRemoveJournalNotes());

    wasSaved(fixture.expectedRemoveJournalNotes());
  });

  it('should throw error on invalid campaign id', async () => {
    await expect(
      updateCampaign(fixture.getInvalidCampaignId()),
    ).rejects.toThrow('Campaign with id 4 not found');
  });

  function updateCampaign(campaign: UpdateCampaignDto): Promise<CampaignModel> {
    return fake.campaignService.update(campaign);
  }

  function wasSaved(campaign: CampaignModel): void {
    expect(fake.campaignRepository.wasSaved(campaign)).toBeTruthy();
  }
});
