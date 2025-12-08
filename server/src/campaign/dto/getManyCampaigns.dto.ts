import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export type GetManyCampaignsDto = GetManyCampaignsQuery;

export class GetManyCampaignsQuery {
  @ApiProperty({
    type: 'string',
    example: 'c60694f6-cc79-41c3-9a12-c1cd8ee0d66e',
  })
  userId: string;

  @ApiProperty({
    type: 'number',
    example: '10',
  })
  limit: number;

  @ApiPropertyOptional({
    type: 'number',
    example: '1',
  })
  difficultyId?: number;

  @ApiPropertyOptional({
    type: 'string',
    example: 'My camp',
  })
  name?: string;

  @ApiPropertyOptional({
    type: 'string',
    example: 'the_dunwich-legacy',
  })
  cycleCode?: string;

  @ApiPropertyOptional({
    type: 'number',
    example: '5',
  })
  offset?: number;
}
