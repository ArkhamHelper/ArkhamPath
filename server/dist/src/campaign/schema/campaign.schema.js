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
exports.CampaignSchema = void 0;
const swagger_1 = require("@nestjs/swagger");
class CampaignSchema {
    constructor(campaign) {
        this.id = campaign.id;
        this.name = campaign.name;
        this.difficulty = campaign.difficulty.name;
        this.journalNotes = campaign.journalNotes;
    }
    id;
    name;
    difficulty;
    journalNotes;
}
exports.CampaignSchema = CampaignSchema;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'b742775b-403a-487f-b529-edf37aad6525' }),
    __metadata("design:type", String)
], CampaignSchema.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'My campaign' }),
    __metadata("design:type", String)
], CampaignSchema.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Hard' }),
    __metadata("design:type", String)
], CampaignSchema.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['ghoul_priest_alive', 'house_burned'] }),
    __metadata("design:type", Array)
], CampaignSchema.prototype, "journalNotes", void 0);
//# sourceMappingURL=campaign.schema.js.map