import { PrismaService } from '../../tools/prisma/prisma.service';
import { CampaignDifficultyModel } from '../model/difficulty.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IBaseRepository } from '../../tools/interface/base.repository';

export interface ICampaignDifficultyRepository extends IBaseRepository<CampaignDifficultyModel> {}
@Injectable()
export class CampaignDifficultyRepository implements ICampaignDifficultyRepository {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: number): Promise<CampaignDifficultyModel> {
    const foundDifficulty = await this.prisma.campaignDifficulty.findUnique({
      where: { id },
    });

    if (!foundDifficulty) {
      throw new NotFoundException(`Difficulty with id ${id} not found`);
    }

    return {
      id: foundDifficulty.id,
      name: foundDifficulty.name,
    };
  }
  async save(
    difficulty: CampaignDifficultyModel,
  ): Promise<CampaignDifficultyModel> {
    return difficulty.id
      ? this.prisma.campaignDifficulty.update({
          where: { id: difficulty.id },
          data: { name: difficulty.name },
        })
      : this.prisma.campaignDifficulty.create({
          data: { name: difficulty.name },
        });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.campaignDifficulty.delete({ where: { id } });
  }
}
