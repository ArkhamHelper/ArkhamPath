import { ApiProperty } from '@nestjs/swagger';

export type CreateCampaignDto = CreateCampaignBody;

export class CreateCampaignBody {
  @ApiProperty({
    type: 'string',
    example: 'b742775b-403a-487a-b529-edf37aad6525',
  })
  userId: string;

  @ApiProperty({
    type: 'number',
    example: '1',
  })
  difficultyId: number;

  @ApiProperty({ type: 'string', example: 'My campaign' })
  name: string;

  @ApiProperty({ type: 'string', example: 'the_dunwich_legacy' })
  cycleCode: string;

  @ApiProperty({
    type: 'object',
    properties: {
      lines: { type: 'array', items: { type: 'object' } },
      blocks: { type: 'array', items: { type: 'object' } },
    },
    example: {
      lines: [
        {
          startBlockCode: 'start',
          endBlockCode: 'end',
          startBlockPadding: 0.2,
          endBlockPadding: 0.5,
          controlPointX: 0.3,
          controlPointY: 0.05,
        },
      ],
      blocks: [
        {
          blockType: 'end',
          code: 'end',
          width: 0.5,
          coordinates: { x: 0.25, y: 0.7 },
        },
      ],
    },
  })
  data: any;
}
