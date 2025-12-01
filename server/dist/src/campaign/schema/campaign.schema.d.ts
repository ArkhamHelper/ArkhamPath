import { CampaignModel } from '../model/campaign.model';
export declare class CampaignSchema {
    constructor(campaign: CampaignModel);
    id: string;
    name: string;
    difficulty: string;
    journalNotes: string[];
}
