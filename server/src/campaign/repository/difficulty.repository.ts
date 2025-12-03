import { PrismaService } from 'src/tools/prisma/prisma.service';
import { CampaignDifficultyModel } from '../model/difficulty.model';
import { Injectable, NotFoundException } from '@nestjs/common';
@Injectable()
export class CampaignDifficultyRepository {
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
}
