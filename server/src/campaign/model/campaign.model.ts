import { CampaignDifficultyModel } from './difficulty.model';

export class CampaignModel {
  id: string;
  name: string;
  userId: string;
  cycleCode: string;
  journalNotes: string[];
  difficulty: CampaignDifficultyModel;
  userResults: {
    [key: string]: string; // idScenario: idResolution
  };

  constructor(campaign: Partial<CampaignModel>) {
    this.journalNotes = [];
    this.userResults = {};

    Object.assign(this, campaign);
  }
}
