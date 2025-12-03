import { CampaignModel } from 'src/campaign/model/campaign.model';

export class GetManyCampaignsFixture {
  campaigns: CampaignModel[] = [
    new CampaignModel({
      id: '1',
      userId: '1',
      userResults: {},
      journalNotes: [],
      name: 'Dunwich User 1 Diff 1',
      cycleCode: 'the_dunwich_legacy',
      difficulty: { id: 1, name: 'easy_difficulty' },
    }),
    new CampaignModel({
      id: '2',
      userId: '2',
      userResults: {},
      journalNotes: [],
      name: 'Dunwich User 2 Diff 1',
      cycleCode: 'the_dunwich_legacy',
      difficulty: { id: 1, name: 'easy_difficulty' },
    }),
    new CampaignModel({
      id: '3',
      userId: '1',
      userResults: {},
      journalNotes: [],
      name: 'Carcosa User 1 Diff 1',
      cycleCode: 'the-path_to_carcosa',
      difficulty: { id: 1, name: 'easy_difficulty' },
    }),
    new CampaignModel({
      id: '4',
      userId: '1',
      userResults: {},
      journalNotes: [],
      name: 'Dunwich User 1 Diff 2',
      cycleCode: 'the_dunwich_legacy',
      difficulty: { id: 2, name: 'standard_difficulty' },
    }),
  ];
}
