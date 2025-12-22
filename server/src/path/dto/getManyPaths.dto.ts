import { ApiProperty } from '@nestjs/swagger';

export type GetManyPathsDto = GetManyPathsQuery;

export class GetManyPathsQuery {
  @ApiProperty({
    type: 'string',
    example: 'c60694f6-cc79-41c3-9a12-c1cd8ee0d66e',
  })
  userId: string;
}
