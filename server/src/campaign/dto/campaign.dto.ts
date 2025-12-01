import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetCampaignDto {
  @ApiPropertyOptional({ description: 'ID кампании' })
  id?: string;

  @ApiPropertyOptional({ description: 'ID пользователя' })
  userId?: string;
}
