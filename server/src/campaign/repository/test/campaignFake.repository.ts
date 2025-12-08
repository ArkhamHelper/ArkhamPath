import { BaseFakeRepository } from '../../../tools/test/baseFake.repository';
import { ICampaignRepository } from '../campaign.repository';
import { CampaignModel } from '../../model/campaign.model';

export class CampaignFakeRepository
  extends BaseFakeRepository<CampaignModel>
  implements ICampaignRepository
{
  async findManyByUserId(
    userId: string,
    limit?: number,
    offset?: number,
  ): Promise<CampaignModel[]> {
    offset = offset ? offset : 0;

    const foundCampaigns = this.getAllBy(
      (campaign) => campaign.userId === userId,
    );

    return foundCampaigns.slice(
      offset,
      offset + (limit ?? foundCampaigns.length),
    );
  }
}
