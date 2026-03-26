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
      },
      remove: {
        type: 'object',
        properties: {
          lines: { type: 'array', items: { type: 'object' } },
          blocks: { type: 'array', items: { type: 'object' } },
        },
        example: {
          lines: [{ startBlockCode: 'start', endBlockCode: 'end' }],
          blocks: [{ blockType: 'end', code: 'end' }],
        },
      },
    },
  })
  data?: {
    add: any;
    remove: any;
  };
}
