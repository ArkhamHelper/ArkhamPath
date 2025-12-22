import { BaseFakeRepository } from '../../../tools/test/baseFake.repository';
import type { PathModel } from '../../model/path.model';
import type { IPathRepository } from '../path.repository';

export class PathFakeRepository
  extends BaseFakeRepository<PathModel>
  implements IPathRepository
{
  async getManyByUserId(userId: string): Promise<PathModel[]> {
    return this.getAllBy((model) => model.userId === userId);
  }
}
