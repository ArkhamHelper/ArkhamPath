"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignRepository = void 0;
const common_1 = require("@nestjs/common");
class CampaignRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findOneById(id) {
        const foundCampaign = await this.prisma.campaign.findUnique({
            where: { id },
        });
        if (!foundCampaign) {
            throw new common_1.NotFoundException(`Campaign with id ${id} not found`);
        }
        return this.generateModel(foundCampaign);
    }
    async findManyByUserId(userId) {
        const foundCampaigns = await this.prisma.campaign.findMany({
            where: { userId },
        });
        return Promise.all(foundCampaigns.map((campaign) => this.generateModel(campaign)));
    }
    async generateModel(campaign) {
        const foundDifficulty = await this.prisma.campaignDifficulty.findUnique({
            where: { id: campaign.difficultyId },
        });
        if (!foundDifficulty) {
            throw new common_1.NotFoundException(`Difficulty with id ${campaign.difficultyId} not found'`);
        }
        const difficulty = {
            id: foundDifficulty.id,
            name: foundDifficulty.name,
        };
        return {
            id: campaign.id,
            name: campaign.name,
            journalNotes: campaign.journalNotes,
            userResults: campaign.userResults,
            difficulty,
        };
    }
}
exports.CampaignRepository = CampaignRepository;
//# sourceMappingURL=campaign.repository.js.map