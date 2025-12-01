import { CampaignRepository } from './campaign.repository';
import { CampaignSchema } from './schema/campaign.schema';
import { PrismaService } from 'src/tools/prisma/prisma.service';
export declare class CampaignService {
    private campaignRepository;
    private prisma;
    constructor(campaignRepository: CampaignRepository, prisma: PrismaService);
    findOneById(id: string): Promise<CampaignSchema>;
    findManyByUserId(userId: string): Promise<CampaignSchema[]>;
}
