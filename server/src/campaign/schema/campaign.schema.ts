import { ApiProperty } from '@nestjs/swagger';
import { CampaignModel } from '../model/campaign.model';

export class CampaignSchema {
  constructor(campaign: CampaignModel) {
    this.id = campaign.id;
    this.name = campaign.name;
    this.cycleCode = campaign.cycleCode;
    this.difficulty = campaign.difficulty.name;
    this.journalNotes = campaign.journalNotes;
  }

  @ApiProperty({ example: 'b742775b-403a-487f-b529-edf37aad6525' })
  id: string;

  @ApiProperty({ example: 'My campaign' })
  name: string;

  @ApiProperty({ example: 'The Dunwich Legacy' })
  cycleCode: string;

  @ApiProperty({ example: 'Hard' })
  difficulty: string;

  @ApiProperty({ example: ['ghoul_priest_alive', 'house_burned'] })
  journalNotes: string[];
}
