import type { CampaignModel } from '../../model/campaign.model';

export class DeleteCampaignFixture {
  campaigns: CampaignModel[] = [
    {
      id: '1',
      userId: '1',
      userResults: {},
      journalNotes: [],
      name: 'Campaign 1',
      cycleCode: 'the_dunwich_legacy',
      difficulty: { id: 1, name: 'easy_difficulty' },
    },
  ];
}
