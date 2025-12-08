import { ApiProperty } from '@nestjs/swagger';

export type GetOneCampaignDto = GetOneCampaignParams;

export class GetOneCampaignParams {
  @ApiProperty({ description: 'ID кампании' })
  id: string;
}
