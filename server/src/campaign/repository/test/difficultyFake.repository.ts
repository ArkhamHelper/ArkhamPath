import { CampaignDifficultyModel } from 'src/generated/prisma/models';
import { ICampaignDifficultyRepository } from '../difficulty.repository';
import { BaseFakeRepository } from 'src/tools/test/baseFake.repository';

export class CampaignDifficultyFakeRepository
  extends BaseFakeRepository<CampaignDifficultyModel>
  implements ICampaignDifficultyRepository {}
