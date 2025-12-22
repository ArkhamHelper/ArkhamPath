import { ApiProperty } from '@nestjs/swagger';
import type { PathModel } from '../model/path.model';

export class PathSchema {
  constructor(path: PathModel) {
    this.data = path.data;
    this.cycleCode = path.cycleCode;
  }

  @ApiProperty({ example: 'the_dunwich_legacy' })
  cycleCode: string;

  /**
   * @todo Add example
   */
  @ApiProperty({ example: {} })
  data: { [key: string]: string };
}
