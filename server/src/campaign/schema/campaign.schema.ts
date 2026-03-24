import { ApiProperty } from '@nestjs/swagger';
import { CampaignModel } from '../model/campaign.model';

export class CampaignSchema {
  constructor(campaign: CampaignModel) {
    this.id = campaign.id;
    this.data = campaign.data;
    this.name = campaign.name;
    this.cycleCode = campaign.cycleCode;
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

  @ApiProperty({
    example: {
      code: 'night_of_zealot',
      scenarios: [
        {
          lines: [{ startBlockCode: 'start', endBlockCode: 'end' }],
          blocks: [
            {
              blockType: 'start',
              code: 'start',
              width: 0.5,
              coordinates: { x: 0.25, y: 0 },
            },
          ],
        },
      ],
    },
  })
  data: { [key: string]: any };
}
