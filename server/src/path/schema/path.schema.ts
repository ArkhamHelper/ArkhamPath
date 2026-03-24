import { ApiProperty } from '@nestjs/swagger';
import type { PathModel } from '../model/path.model';

export class PathSchema {
  constructor(path: PathModel) {
    this.data = path.data;
    this.cycleCode = path.cycleCode;
  }

  @ApiProperty({ example: 'the_dunwich_legacy' })
  cycleCode: string;

  @ApiProperty({
    example: {
      code: 'night_of_zealot',
      scenarios: [
        {
          lines: [{ startBlockCode: 'start', endBlockCode: 'end' }],
          blocks: [
            {
              blockType: 'start',
              code: 'start',
              width: 0.5,
              coordinates: { x: 0.25, y: 0 },
            },
          ],
        },
      ],
    },
  })
  data: { [key: string]: any };
}
