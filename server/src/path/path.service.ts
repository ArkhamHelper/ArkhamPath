import { Injectable } from '@nestjs/common';
import type { IPathRepository } from './repository/path.repository';
import type { UserService } from '../user/user.service';
import type { PathModel } from './model/path.model';
import type { GetManyPathsDto } from './dto/getManyPaths.dto';

@Injectable()
export class PathService {
  constructor(
    private pathRepository: IPathRepository,
    private userService: UserService,
  ) {}

  async getManyByUserId(dto: GetManyPathsDto): Promise<PathModel[]> {
    const user = await this.userService.getOne({
      id: dto.userId,
    });

    return this.pathRepository.getManyByUserId(user.id);
  }
}
