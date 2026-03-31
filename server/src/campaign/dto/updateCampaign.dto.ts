import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export type UpdateCampaignDto = UpdateCampaignBody & UpdateCampaignParams;

export class UpdateCampaignParams {
  @ApiProperty({
    type: 'string',
    example: 'b742775b-403a-487f-b529-edf37aad6525',
  })
  id: string;
}

export class UpdateCampaignBody {
  @ApiPropertyOptional({ type: 'string', example: 'My campaign' })
  name?: string;

  @ApiPropertyOptional({
    type: 'object',
    properties: {
      scenarios: {
        type: 'array',
        items: {
          type: 'object',
          required: ['code'],
          properties: {
            code: { 
              type: 'string', 
              description: 'Unique identifier for the scenario',
              example: 'the_gathering' 
            },
            add: {
              type: 'object',
              properties: {
                lines: { type: 'array', items: { type: 'object' } },
                blocks: { type: 'array', items: { type: 'object' } },
              },
              example: {
                lines: [
                  {
                    startBlockCode: 'start',
                    endBlockCode: 'choice_to_burn_house',
                    startBlockPadding: 0.2,
                    endBlockPadding: 0.5,
                    controlPointX: 0.3,
                    controlPointY: 0.05,
                  },
                ],
                blocks: [
                  {
                    blockType: 'condition',
                    code: 'ghoul_priest_is_dead',
                    width: 0.4,
                    coordinates: { x: 0.1, y: 0.1 },
                    isSpoiler: true,
                  },
                ],
              },
            },
            remove: {
              type: 'object',
              properties: {
                lines: { type: 'array', items: { type: 'object' } },
                blocks: { type: 'array', items: { type: 'object' } },
              },
              example: {
                lines: [
                  { 
                    startBlockCode: 'start', 
                    endBlockCode: 'choice_to_burn_house' 
                  }
                ],
                blocks: [
                  { 
                    blockType: 'condition', 
                    code: 'ghoul_priest_is_dead' 
                  }
                ],
              },
            },
          },
        },
      },
    },
  })
  data?: {
    scenarios: {
      code: string;
      add?: any;
      remove?: any;
    }[];
  };
}
