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
}
