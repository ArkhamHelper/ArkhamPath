import type { CreateCampaignDto } from '../../dto/createCampaign.dto';
import type { CampaignModel } from '../../model/campaign.model';
import type { CampaignDifficultyModel } from '../../model/difficulty.model';

export class CreateCampaignFixture {
  campaignDifficulties: CampaignDifficultyModel[] = [
    { id: 1, name: 'easy_difficulty' },
  ];

  getDataForCreateCampaign = (): CreateCampaignDto => ({
    difficultyId: 1,
    name: 'My campaign',
    cycleCode: 'the_dunwich_legacy',
    userId: 'b742775b-403a-487a-b529-edf37aad6525',
  });

  expectedCampaign = (): CampaignModel => ({
    userResults: {},
    journalNotes: [],
    name: 'My campaign',
    cycleCode: 'the_dunwich_legacy',
    id: '1',
    userId: 'b742775b-403a-487a-b529-edf37aad6525',
    difficulty: {
      id: 1,
      name: 'easy_difficulty',
    },
  });
}
