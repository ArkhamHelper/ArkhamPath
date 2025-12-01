import { CampaignModel } from './model/campaign.model';
import { PrismaService } from 'src/tools/prisma/prisma.service';
export declare class CampaignRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findOneById(id: string): Promise<CampaignModel>;
    findManyByUserId(userId: string): Promise<CampaignModel[]>;
    private generateModel;
}
