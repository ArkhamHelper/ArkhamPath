import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export type UpdateCampaignDto = UpdateCampaignBody & UpdateCampaignParams;

export class UpdateCampaignParams {
  @ApiProperty({
    type: 'string',
    required: true,
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
        type: 'string',
        isArray: true,
        example: ['ghoul_priest_alive', 'house_burned'],
      },
      remove: {
        type: 'string',
        isArray: true,
        example: ['ghoul_priest_alive', 'house_burned'],
      },
    },
  })
  journalNotes?: {
    add: string[];
    remove: string[];
  };

  @ApiPropertyOptional({
    type: 'object',
    additionalProperties: {
      type: 'string',
    },
    example: {
      the_gathering: 'r1_house_burned',
    },
  })
  userResults?: Record<string, string>;
}
