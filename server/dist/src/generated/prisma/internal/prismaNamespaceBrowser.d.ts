import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Campaign: "Campaign";
    readonly CampaignDifficulty: "CampaignDifficulty";
    readonly CycleSchema: "CycleSchema";
    readonly User: "User";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CampaignScalarFieldEnum: {
    readonly id: "id";
    readonly dateCreate: "dateCreate";
    readonly dateUpdate: "dateUpdate";
    readonly name: "name";
    readonly userResults: "userResults";
    readonly journalNotes: "journalNotes";
    readonly userId: "userId";
    readonly difficultyId: "difficultyId";
};
export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum];
export declare const CampaignDifficultyScalarFieldEnum: {
    readonly id: "id";
    readonly dateCreate: "dateCreate";
    readonly dateUpdate: "dateUpdate";
    readonly name: "name";
};
export type CampaignDifficultyScalarFieldEnum = (typeof CampaignDifficultyScalarFieldEnum)[keyof typeof CampaignDifficultyScalarFieldEnum];
export declare const CycleSchemaScalarFieldEnum: {
    readonly dateCreate: "dateCreate";
    readonly dateUpdate: "dateUpdate";
    readonly data: "data";
    readonly code: "code";
    readonly userId: "userId";
    readonly dateLastFetchArkhamCards: "dateLastFetchArkhamCards";
};
export type CycleSchemaScalarFieldEnum = (typeof CycleSchemaScalarFieldEnum)[keyof typeof CycleSchemaScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly dateCreate: "dateCreate";
    readonly dateUpdate: "dateUpdate";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: "JsonNull";
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: "DbNull";
    readonly JsonNull: "JsonNull";
    readonly AnyNull: "AnyNull";
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
