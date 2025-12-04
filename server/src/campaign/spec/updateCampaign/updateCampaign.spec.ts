import type { UpdateCampaignDto } from '../../dto/updateCampaign.dto';
import type { CampaignModel } from '../../model/campaign.model';
import type { CampaignSchema } from '../../schema/campaign.schema';
import { CampaignsInfrastructure } from '../campaigns.infrastructure';
import { UpdateCampaignFixture } from './updateCampaign.fixture';

describe('UpdateCampaign', () => {
  const fixture = new UpdateCampaignFixture();
  const infrastructure = new CampaignsInfrastructure();

  beforeEach(async () => {
    infrastructure.campaignRepository.set(fixture.campaigns);
  });

  it('should update userResults', async () => {
    const campaign = await updateCampaign(fixture.getUpdateUserResults());
    const expected = fixture.expectedUpdateUserResults();

    expect(campaign).toEqual(expected.schema);
    wasSaved(expected.model);
  });

  it('should replace userResults', async () => {
    const campaign = await updateCampaign(fixture.getReplaceUserResults());
    const expected = fixture.expectedReplaceUserResults();

    expect(campaign).toEqual(expected.schema);
    wasSaved(expected.model);
  });

  it('should add journal notes', async () => {
    const campaign = await updateCampaign(fixture.getAddJournalNotes());
    const expected = fixture.expectedAddJournalNotes();

    expect(campaign).toEqual(expected.schema);
    wasSaved(expected.model);
  });

  it('should remove journal notes', async () => {
    const campaign = await updateCampaign(fixture.getRemoveJournalNotes());
    const expected = fixture.expectedRemoveJournalNotes();

    expect(campaign).toEqual(expected.schema);
    wasSaved(expected.model);
  });

  it('should throw error on invalid campaign id', async () => {
    await expect(
      updateCampaign(fixture.getInvalidCampaignId()),
    ).rejects.toThrow('Campaign with id 4 not found');
  });

  function updateCampaign(
    campaign: UpdateCampaignDto,
  ): Promise<CampaignSchema> {
    return infrastructure.campaignService.update(campaign);
  }

  function wasSaved(campaign: CampaignModel): void {
    expect(infrastructure.campaignRepository.wasSaved(campaign)).toBeTruthy();
  }
});
