import { Controller, Get, Query } from '@nestjs/common';
import { PathService } from './path.service';
import type { GetManyPathsQuery } from './dto/getManyPaths.dto';
import { PathSchema } from './schema/path.schema';
import { ApiResponse } from '@nestjs/swagger';

@Controller('paths')
export class PathController {
  constructor(private pathService: PathService) {}

  @Get('')
  @ApiResponse({ type: PathSchema, isArray: true })
  async getManyByUserId(
    @Query() query: GetManyPathsQuery,
  ): Promise<PathSchema[]> {
    const paths = await this.pathService.getManyByUserId({
      ...query,
    });

    return paths.map((path) => new PathSchema(path));
  }
}
