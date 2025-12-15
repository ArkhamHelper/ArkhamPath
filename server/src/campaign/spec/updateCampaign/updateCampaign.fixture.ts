import type { UpdateCampaignDto } from '../../dto/updateCampaign.dto';
import type { CampaignModel } from '../../model/campaign.model';

export class UpdateCampaignFixture {
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
      userId: '1',
      userResults: { the_gathering: 'r1_house_burned' },
      journalNotes: [],
      name: 'Dunwich User 1 Diff 1',
      cycleCode: 'the_dunwich_legacy',
      difficulty: { id: 1, name: 'easy_difficulty' },
    },
    {
      id: '3',
      userId: '1',
      userResults: {},
      journalNotes: ['ghoul_priest_alive'],
      name: 'Dunwich User 1 Diff 1',
      cycleCode: 'the_dunwich_legacy',
      difficulty: { id: 1, name: 'easy_difficulty' },
    },
  ];

  getUpdateUserResults = (): UpdateCampaignDto => ({
    id: '1',
    userResults: { the_gathering: 'r1_house_burned' },
  });

  getReplaceUserResults = (): UpdateCampaignDto => ({
    id: '2',
    userResults: { the_gathering: 'r2_house_stay' },
  });

  getAddJournalNotes = (): UpdateCampaignDto => ({
    id: '1',
    journalNotes: { add: ['ghoul_priest_alive'], remove: [] },
  });

  getRemoveJournalNotes = (): UpdateCampaignDto => ({
    id: '3',
    journalNotes: { add: [], remove: ['ghoul_priest_alive'] },
  });

  getInvalidCampaignId = (): UpdateCampaignDto => ({
    id: '4',
  });

  expectedUpdateUserResults = (): CampaignModel => ({
    id: '1',
    userId: '1',
    userResults: { the_gathering: 'r1_house_burned' },
    journalNotes: [],
    name: 'Dunwich User 1 Diff 1',
    cycleCode: 'the_dunwich_legacy',
    difficulty: { id: 1, name: 'easy_difficulty' },
  });

  expectedReplaceUserResults = (): CampaignModel => ({
    id: '2',
    userId: '1',
    userResults: { the_gathering: 'r2_house_stay' },
    journalNotes: [],
    name: 'Dunwich User 1 Diff 1',
    cycleCode: 'the_dunwich_legacy',
    difficulty: { id: 1, name: 'easy_difficulty' },
  });

  expectedAddJournalNotes = (): CampaignModel => ({
    id: '1',
    userId: '1',
    userResults: {},
    journalNotes: ['ghoul_priest_alive'],
    name: 'Dunwich User 1 Diff 1',
    cycleCode: 'the_dunwich_legacy',
    difficulty: { id: 1, name: 'easy_difficulty' },
  });

  expectedRemoveJournalNotes = (): CampaignModel => ({
    id: '3',
    userId: '1',
    userResults: {},
    journalNotes: [],
    name: 'Dunwich User 1 Diff 1',
    cycleCode: 'the_dunwich_legacy',
    difficulty: { id: 1, name: 'easy_difficulty' },
  });
}
