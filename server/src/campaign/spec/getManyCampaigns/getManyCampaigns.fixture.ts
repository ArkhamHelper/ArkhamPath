import { CampaignModel } from '../../../campaign/model/campaign.model';
import type { UserModel } from '../../../user/model/user.model';

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
      cycleCode: 'the_path_to_carcosa',
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

  users: UserModel[] = [
    {
      id: '1',
      arkhamCardsId: 'b742775b-403a-487a-b529-edf37aad6525',
    },
    {
      id: '2',
      arkhamCardsId: 'b742775b-403a-487b-b529-edf37aad6521',
    },
  ];
}
