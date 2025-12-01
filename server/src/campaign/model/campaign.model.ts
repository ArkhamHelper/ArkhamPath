import { CampaignDifficultyModel } from './difficulty.model';

export interface CampaignModel {
  id: string;
  name: string;
  journalNotes: string[];
  userResults: {
    [key: string]: string; // idScenario: idResolution
  };
  difficulty: CampaignDifficultyModel;
}
