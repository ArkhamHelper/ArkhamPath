import { CampaignDifficultyModel } from './difficulty.model';

export class CampaignModel {
  id: string;
  name: string;
  userId: string;
  cycleCode: string;
  difficulty: CampaignDifficultyModel;
  data: {
    [key: string]: any;
  };

  constructor(campaign: Partial<CampaignModel>) {
    this.data = {};

    Object.assign(this, campaign);
  }
}
