import { ApiProperty } from '@nestjs/swagger';
import { CampaignModel } from '../model/campaign.model';

export class CampaignSchema {
  constructor(campaign: CampaignModel) {
    this.id = campaign.id;
    this.name = campaign.name;
    this.cycleCode = campaign.cycleCode;
    this.userResults = campaign.userResults;
    this.journalNotes = campaign.journalNotes;
    this.difficulty = campaign.difficulty.name;
  }

  @ApiProperty({ example: 'b742775b-403a-487f-b529-edf37aad6525' })
  id: string;

  @ApiProperty({ example: 'My campaign' })
  name: string;

  @ApiProperty({ example: 'the_dunwich_legacy' })
  cycleCode: string;

  @ApiProperty({ example: 'hard_difficulty' })
  difficulty: string;

  @ApiProperty({ example: ['ghoul_priest_alive', 'house_burned'] })
  journalNotes: string[];

  @ApiProperty({
    example: {
      the_gathering: 'r1_house_burned',
    },
  })
  userResults: { [key: string]: string };
}
