import { ApiProperty } from '@nestjs/swagger';

export type DeleteCampaignDto = DeleteCampaignParams;

export class DeleteCampaignParams {
  @ApiProperty({
    type: 'string',
    description: 'Campaign id',
    example: 'c60694f6-cc79-41c3-9a12-c1cd8ee0d66e',
  })
  id: string;
}
