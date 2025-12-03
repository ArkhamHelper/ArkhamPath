import { CampaignDifficultyModel } from '../../../generated/prisma/models';
import { ICampaignDifficultyRepository } from '../difficulty.repository';
import { BaseFakeRepository } from '../../../tools/test/baseFake.repository';

export class CampaignDifficultyFakeRepository
  extends BaseFakeRepository<CampaignDifficultyModel>
  implements ICampaignDifficultyRepository {}
