import type { CampaignModel } from '../../model/campaign.model';

export class GetOneCampaignFixture {
  campaigns: CampaignModel[] = [
    {
      id: '1',
      userId: '1',
      userResults: {},
      journalNotes: [],
      name: 'Dunwich User 1 Diff 1',
      cycleCode: 'the_dunwich_legacy',
      difficulty: { id: 1, name: 'easy_difficulty' },
    },
    {
      id: '2',
      userId: '2',
      userResults: {},
      journalNotes: [],
      name: 'Dunwich User 2 Diff 1',
      cycleCode: 'the_dunwich_legacy',
      difficulty: { id: 1, name: 'easy_difficulty' },
    },
  ];
}
