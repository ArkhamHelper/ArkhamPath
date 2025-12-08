import { ICampaignDifficultyRepository } from '../difficulty.repository';
import { BaseFakeRepository } from '../../../tools/test/baseFake.repository';
import type { CampaignDifficultyModel } from '../../model/difficulty.model';

export class CampaignDifficultyFakeRepository
  extends BaseFakeRepository<CampaignDifficultyModel>
  implements ICampaignDifficultyRepository {}
