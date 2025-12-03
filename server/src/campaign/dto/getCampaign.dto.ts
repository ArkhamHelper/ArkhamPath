import { ApiPropertyOptional } from '@nestjs/swagger';

export type GetCampaignDto = GetCampaignQuery;

export class GetCampaignQuery {
  @ApiPropertyOptional({ description: 'ID кампании' })
  id?: string;

  @ApiPropertyOptional({ description: 'ID пользователя' })
  userId?: string;
}
