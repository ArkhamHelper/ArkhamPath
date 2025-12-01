"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignService = void 0;
const common_1 = require("@nestjs/common");
const campaign_repository_1 = require("./campaign.repository");
const prisma_service_1 = require("../tools/prisma/prisma.service");
let CampaignService = class CampaignService {
    campaignRepository;
    prisma;
    constructor(campaignRepository, prisma) {
        this.campaignRepository = campaignRepository;
        this.prisma = prisma;
    }
    async findOneById(id) {
        const campaign = await this.campaignRepository.findOneById(id);
        return {
            id: campaign.id,
            name: campaign.name,
            difficulty: campaign.difficulty.name,
            journalNotes: campaign.journalNotes,
        };
    }
    async findManyByUserId(userId) {
        const campaigns = await this.campaignRepository.findManyByUserId(userId);
        return campaigns.map((campaign) => ({
            id: campaign.id,
            name: campaign.name,
            difficulty: campaign.difficulty.name,
            journalNotes: campaign.journalNotes,
        }));
    }
};
exports.CampaignService = CampaignService;
exports.CampaignService = CampaignService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [campaign_repository_1.CampaignRepository,
        prisma_service_1.PrismaService])
], CampaignService);
//# sourceMappingURL=campaign.service.js.map