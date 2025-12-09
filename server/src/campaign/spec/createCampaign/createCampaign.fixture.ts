import type { UserModel } from '../../../user/model/user.model';
import type { CreateCampaignDto } from '../../dto/createCampaign.dto';
import type { CampaignModel } from '../../model/campaign.model';
import type { CampaignDifficultyModel } from '../../model/difficulty.model';

export class CreateCampaignFixture {
  campaignDifficulties: CampaignDifficultyModel[] = [
    { id: 1, name: 'easy_difficulty' },
  ];

  users: UserModel[] = [
    {
      id: '1',
      email: 'a@b.com',
      password: '$2a$12$OM2MnF85ofncqmftam9ZsOa/L8raGkIHM3ASPWpN4MHWHOZuQ0rUm',
      arkhamCardsId: 'b742775b-403a-487a-b529-edf37aad6525',
    },
  ];

  getDataForCreateCampaign = (): CreateCampaignDto => ({
    difficultyId: 1,
    name: 'My campaign',
    cycleCode: 'the_dunwich_legacy',
    userId: '1',
  });

  getDateWithInvalidUserId = (): CreateCampaignDto => ({
    difficultyId: 1,
    name: 'My campaign',
    cycleCode: 'the_dunwich_legacy',
    userId: '2',
  });

  expectedCampaign = (): CampaignModel => ({
    id: '1',
    userId: '1',
    userResults: {},
    journalNotes: [],
    name: 'My campaign',
    cycleCode: 'the_dunwich_legacy',
    difficulty: {
      id: 1,
      name: 'easy_difficulty',
    },
  });
}
