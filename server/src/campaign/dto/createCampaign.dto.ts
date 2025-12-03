import { ApiProperty } from '@nestjs/swagger';

export type CreateCampaignDto = CreateCampaignBody;

export class CreateCampaignBody {
  @ApiProperty({
    type: 'string',
    required: true,
    example: 'b742775b-403a-487a-b529-edf37aad6525',
  })
  userId: string;

  @ApiProperty({
    type: 'number',
    required: true,
    example: '1',
  })
  difficultyId: number;

  @ApiProperty({ type: 'string', required: true, example: 'My campaign' })
  name: string;
}
