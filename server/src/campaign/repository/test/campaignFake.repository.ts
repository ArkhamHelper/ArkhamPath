import { BaseFakeRepository } from 'src/tools/test/baseFake.repository';
import { ICampaignRepository } from '../campaign.repository';
import { CampaignModel } from 'src/campaign/model/campaign.model';

export class CampaignFakeRepository
  extends BaseFakeRepository<CampaignModel>
  implements ICampaignRepository
{
  async findManyByUserId(userId: string): Promise<CampaignModel[]> {
    return this.getAllBy((campaign) => campaign.userId === userId);
  }
}
