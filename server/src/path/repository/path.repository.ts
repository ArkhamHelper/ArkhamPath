import { Injectable } from '@nestjs/common';
import type { Path } from '../../generated/prisma/client';
import type { IBaseRepository } from '../../tools/interface/base.repository';
import type { PrismaService } from '../../tools/prisma/prisma.service';
import { PathModel } from '../model/path.model';

export interface IPathRepository extends IBaseRepository<PathModel> {
  getManyByUserId(userId: string): Promise<PathModel[]>;
}

@Injectable()
export class PathRepository implements IPathRepository {
  constructor(private prisma: PrismaService) {}

  async getManyByUserId(userId: string): Promise<PathModel[]> {
    const paths = await this.prisma.path.findMany({ where: { userId } });

    return Promise.all(paths.map((path) => this.generateModel(path)));
  }

  async findOneById(id: string): Promise<PathModel | undefined> {
    const foundPath = await this.prisma.path.findUnique({ where: { id } });

    if (!foundPath) {
      return undefined;
    }

    return this.generateModel(foundPath);
  }

  async save(path: PathModel): Promise<PathModel> {
    const resultPath: Path = path.id
      ? await this.prisma.path.update({
          where: { id: path.id },
          data: {
            data: path.data,
            dateLastFetchArkhamCards: path.dateLastFetchArkhamCards,
          },
        })
      : await this.prisma.path.create({
          data: {
            data: path.data,
            userId: path.userId,
            cycleCode: path.cycleCode,
            dateLastFetchArkhamCards: path.dateLastFetchArkhamCards,
          },
        });

    return this.generateModel(resultPath);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.path.delete({ where: { id } });
  }

  private async generateModel(path: Path): Promise<PathModel> {
    return new PathModel({
      userId: path.userId,
      cycleCode: path.cycleCode,
      data: path.data as { [key: string]: string },
      dateLastFetchArkhamCards: path.dateLastFetchArkhamCards,
    });
  }
}
