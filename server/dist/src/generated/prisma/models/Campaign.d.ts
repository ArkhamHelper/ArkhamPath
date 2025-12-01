import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CampaignModel = runtime.Types.Result.DefaultSelection<Prisma.$CampaignPayload>;
export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null;
    _min: CampaignMinAggregateOutputType | null;
    _max: CampaignMaxAggregateOutputType | null;
};
export type CampaignMinAggregateOutputType = {
    id: string | null;
    dateCreate: Date | null;
    dateUpdate: Date | null;
    name: string | null;
    userId: string | null;
    difficultyId: string | null;
};
export type CampaignMaxAggregateOutputType = {
    id: string | null;
    dateCreate: Date | null;
    dateUpdate: Date | null;
    name: string | null;
    userId: string | null;
    difficultyId: string | null;
};
export type CampaignCountAggregateOutputType = {
    id: number;
    dateCreate: number;
    dateUpdate: number;
    name: number;
    userResults: number;
    journalNotes: number;
    userId: number;
    difficultyId: number;
    _all: number;
};
export type CampaignMinAggregateInputType = {
    id?: true;
    dateCreate?: true;
    dateUpdate?: true;
    name?: true;
    userId?: true;
    difficultyId?: true;
};
export type CampaignMaxAggregateInputType = {
    id?: true;
    dateCreate?: true;
    dateUpdate?: true;
    name?: true;
    userId?: true;
    difficultyId?: true;
};
export type CampaignCountAggregateInputType = {
    id?: true;
    dateCreate?: true;
    dateUpdate?: true;
    name?: true;
    userResults?: true;
    journalNotes?: true;
    userId?: true;
    difficultyId?: true;
    _all?: true;
};
export type CampaignAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CampaignCountAggregateInputType;
    _min?: CampaignMinAggregateInputType;
    _max?: CampaignMaxAggregateInputType;
};
export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
    [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCampaign[P]> : Prisma.GetScalarType<T[P], AggregateCampaign[P]>;
};
export type CampaignGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithAggregationInput | Prisma.CampaignOrderByWithAggregationInput[];
    by: Prisma.CampaignScalarFieldEnum[] | Prisma.CampaignScalarFieldEnum;
    having?: Prisma.CampaignScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CampaignCountAggregateInputType | true;
    _min?: CampaignMinAggregateInputType;
    _max?: CampaignMaxAggregateInputType;
};
export type CampaignGroupByOutputType = {
    id: string;
    dateCreate: Date;
    dateUpdate: Date;
    name: string;
    userResults: runtime.JsonValue;
    journalNotes: string[];
    userId: string;
    difficultyId: string;
    _count: CampaignCountAggregateOutputType | null;
    _min: CampaignMinAggregateOutputType | null;
    _max: CampaignMaxAggregateOutputType | null;
};
type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CampaignGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CampaignGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CampaignGroupByOutputType[P]>;
}>>;
export type CampaignWhereInput = {
    AND?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    OR?: Prisma.CampaignWhereInput[];
    NOT?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    id?: Prisma.StringFilter<"Campaign"> | string;
    dateCreate?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    dateUpdate?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    name?: Prisma.StringFilter<"Campaign"> | string;
    userResults?: Prisma.JsonFilter<"Campaign">;
    journalNotes?: Prisma.StringNullableListFilter<"Campaign">;
    userId?: Prisma.StringFilter<"Campaign"> | string;
    difficultyId?: Prisma.StringFilter<"Campaign"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    difficulty?: Prisma.XOR<Prisma.CampaignDifficultyScalarRelationFilter, Prisma.CampaignDifficultyWhereInput>;
};
export type CampaignOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    dateCreate?: Prisma.SortOrder;
    dateUpdate?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    userResults?: Prisma.SortOrder;
    journalNotes?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    difficultyId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    difficulty?: Prisma.CampaignDifficultyOrderByWithRelationInput;
};
export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    OR?: Prisma.CampaignWhereInput[];
    NOT?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    dateCreate?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    dateUpdate?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    name?: Prisma.StringFilter<"Campaign"> | string;
    userResults?: Prisma.JsonFilter<"Campaign">;
    journalNotes?: Prisma.StringNullableListFilter<"Campaign">;
    userId?: Prisma.StringFilter<"Campaign"> | string;
    difficultyId?: Prisma.StringFilter<"Campaign"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    difficulty?: Prisma.XOR<Prisma.CampaignDifficultyScalarRelationFilter, Prisma.CampaignDifficultyWhereInput>;
}, "id">;
export type CampaignOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    dateCreate?: Prisma.SortOrder;
    dateUpdate?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    userResults?: Prisma.SortOrder;
    journalNotes?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    difficultyId?: Prisma.SortOrder;
    _count?: Prisma.CampaignCountOrderByAggregateInput;
    _max?: Prisma.CampaignMaxOrderByAggregateInput;
    _min?: Prisma.CampaignMinOrderByAggregateInput;
};
export type CampaignScalarWhereWithAggregatesInput = {
    AND?: Prisma.CampaignScalarWhereWithAggregatesInput | Prisma.CampaignScalarWhereWithAggregatesInput[];
    OR?: Prisma.CampaignScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CampaignScalarWhereWithAggregatesInput | Prisma.CampaignScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    dateCreate?: Prisma.DateTimeWithAggregatesFilter<"Campaign"> | Date | string;
    dateUpdate?: Prisma.DateTimeWithAggregatesFilter<"Campaign"> | Date | string;
    name?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    userResults?: Prisma.JsonWithAggregatesFilter<"Campaign">;
    journalNotes?: Prisma.StringNullableListFilter<"Campaign">;
    userId?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    difficultyId?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
};
export type CampaignCreateInput = {
    id?: string;
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    name: string;
    userResults: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignCreatejournalNotesInput | string[];
    user: Prisma.UserCreateNestedOneWithoutCampaignsInput;
    difficulty: Prisma.CampaignDifficultyCreateNestedOneWithoutCampaignsInput;
};
export type CampaignUncheckedCreateInput = {
    id?: string;
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    name: string;
    userResults: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignCreatejournalNotesInput | string[];
    userId: string;
    difficultyId: string;
};
export type CampaignUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userResults?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignUpdatejournalNotesInput | string[];
    user?: Prisma.UserUpdateOneRequiredWithoutCampaignsNestedInput;
    difficulty?: Prisma.CampaignDifficultyUpdateOneRequiredWithoutCampaignsNestedInput;
};
export type CampaignUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userResults?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignUpdatejournalNotesInput | string[];
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    difficultyId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CampaignCreateManyInput = {
    id?: string;
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    name: string;
    userResults: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignCreatejournalNotesInput | string[];
    userId: string;
    difficultyId: string;
};
export type CampaignUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userResults?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignUpdatejournalNotesInput | string[];
};
export type CampaignUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userResults?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignUpdatejournalNotesInput | string[];
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    difficultyId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type CampaignCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dateCreate?: Prisma.SortOrder;
    dateUpdate?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    userResults?: Prisma.SortOrder;
    journalNotes?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    difficultyId?: Prisma.SortOrder;
};
export type CampaignMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dateCreate?: Prisma.SortOrder;
    dateUpdate?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    difficultyId?: Prisma.SortOrder;
};
export type CampaignMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dateCreate?: Prisma.SortOrder;
    dateUpdate?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    difficultyId?: Prisma.SortOrder;
};
export type CampaignListRelationFilter = {
    every?: Prisma.CampaignWhereInput;
    some?: Prisma.CampaignWhereInput;
    none?: Prisma.CampaignWhereInput;
};
export type CampaignOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CampaignCreatejournalNotesInput = {
    set: string[];
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type CampaignUpdatejournalNotesInput = {
    set?: string[];
    push?: string | string[];
};
export type CampaignCreateNestedManyWithoutDifficultyInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutDifficultyInput, Prisma.CampaignUncheckedCreateWithoutDifficultyInput> | Prisma.CampaignCreateWithoutDifficultyInput[] | Prisma.CampaignUncheckedCreateWithoutDifficultyInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutDifficultyInput | Prisma.CampaignCreateOrConnectWithoutDifficultyInput[];
    createMany?: Prisma.CampaignCreateManyDifficultyInputEnvelope;
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
};
export type CampaignUncheckedCreateNestedManyWithoutDifficultyInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutDifficultyInput, Prisma.CampaignUncheckedCreateWithoutDifficultyInput> | Prisma.CampaignCreateWithoutDifficultyInput[] | Prisma.CampaignUncheckedCreateWithoutDifficultyInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutDifficultyInput | Prisma.CampaignCreateOrConnectWithoutDifficultyInput[];
    createMany?: Prisma.CampaignCreateManyDifficultyInputEnvelope;
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
};
export type CampaignUpdateManyWithoutDifficultyNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutDifficultyInput, Prisma.CampaignUncheckedCreateWithoutDifficultyInput> | Prisma.CampaignCreateWithoutDifficultyInput[] | Prisma.CampaignUncheckedCreateWithoutDifficultyInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutDifficultyInput | Prisma.CampaignCreateOrConnectWithoutDifficultyInput[];
    upsert?: Prisma.CampaignUpsertWithWhereUniqueWithoutDifficultyInput | Prisma.CampaignUpsertWithWhereUniqueWithoutDifficultyInput[];
    createMany?: Prisma.CampaignCreateManyDifficultyInputEnvelope;
    set?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    disconnect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    delete?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    update?: Prisma.CampaignUpdateWithWhereUniqueWithoutDifficultyInput | Prisma.CampaignUpdateWithWhereUniqueWithoutDifficultyInput[];
    updateMany?: Prisma.CampaignUpdateManyWithWhereWithoutDifficultyInput | Prisma.CampaignUpdateManyWithWhereWithoutDifficultyInput[];
    deleteMany?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
};
export type CampaignUncheckedUpdateManyWithoutDifficultyNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutDifficultyInput, Prisma.CampaignUncheckedCreateWithoutDifficultyInput> | Prisma.CampaignCreateWithoutDifficultyInput[] | Prisma.CampaignUncheckedCreateWithoutDifficultyInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutDifficultyInput | Prisma.CampaignCreateOrConnectWithoutDifficultyInput[];
    upsert?: Prisma.CampaignUpsertWithWhereUniqueWithoutDifficultyInput | Prisma.CampaignUpsertWithWhereUniqueWithoutDifficultyInput[];
    createMany?: Prisma.CampaignCreateManyDifficultyInputEnvelope;
    set?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    disconnect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    delete?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    update?: Prisma.CampaignUpdateWithWhereUniqueWithoutDifficultyInput | Prisma.CampaignUpdateWithWhereUniqueWithoutDifficultyInput[];
    updateMany?: Prisma.CampaignUpdateManyWithWhereWithoutDifficultyInput | Prisma.CampaignUpdateManyWithWhereWithoutDifficultyInput[];
    deleteMany?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
};
export type CampaignCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutUserInput, Prisma.CampaignUncheckedCreateWithoutUserInput> | Prisma.CampaignCreateWithoutUserInput[] | Prisma.CampaignUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutUserInput | Prisma.CampaignCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CampaignCreateManyUserInputEnvelope;
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
};
export type CampaignUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutUserInput, Prisma.CampaignUncheckedCreateWithoutUserInput> | Prisma.CampaignCreateWithoutUserInput[] | Prisma.CampaignUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutUserInput | Prisma.CampaignCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CampaignCreateManyUserInputEnvelope;
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
};
export type CampaignUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutUserInput, Prisma.CampaignUncheckedCreateWithoutUserInput> | Prisma.CampaignCreateWithoutUserInput[] | Prisma.CampaignUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutUserInput | Prisma.CampaignCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CampaignUpsertWithWhereUniqueWithoutUserInput | Prisma.CampaignUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CampaignCreateManyUserInputEnvelope;
    set?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    disconnect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    delete?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    update?: Prisma.CampaignUpdateWithWhereUniqueWithoutUserInput | Prisma.CampaignUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CampaignUpdateManyWithWhereWithoutUserInput | Prisma.CampaignUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
};
export type CampaignUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutUserInput, Prisma.CampaignUncheckedCreateWithoutUserInput> | Prisma.CampaignCreateWithoutUserInput[] | Prisma.CampaignUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutUserInput | Prisma.CampaignCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CampaignUpsertWithWhereUniqueWithoutUserInput | Prisma.CampaignUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CampaignCreateManyUserInputEnvelope;
    set?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    disconnect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    delete?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    update?: Prisma.CampaignUpdateWithWhereUniqueWithoutUserInput | Prisma.CampaignUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CampaignUpdateManyWithWhereWithoutUserInput | Prisma.CampaignUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
};
export type CampaignCreateWithoutDifficultyInput = {
    id?: string;
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    name: string;
    userResults: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignCreatejournalNotesInput | string[];
    user: Prisma.UserCreateNestedOneWithoutCampaignsInput;
};
export type CampaignUncheckedCreateWithoutDifficultyInput = {
    id?: string;
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    name: string;
    userResults: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignCreatejournalNotesInput | string[];
    userId: string;
};
export type CampaignCreateOrConnectWithoutDifficultyInput = {
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutDifficultyInput, Prisma.CampaignUncheckedCreateWithoutDifficultyInput>;
};
export type CampaignCreateManyDifficultyInputEnvelope = {
    data: Prisma.CampaignCreateManyDifficultyInput | Prisma.CampaignCreateManyDifficultyInput[];
    skipDuplicates?: boolean;
};
export type CampaignUpsertWithWhereUniqueWithoutDifficultyInput = {
    where: Prisma.CampaignWhereUniqueInput;
    update: Prisma.XOR<Prisma.CampaignUpdateWithoutDifficultyInput, Prisma.CampaignUncheckedUpdateWithoutDifficultyInput>;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutDifficultyInput, Prisma.CampaignUncheckedCreateWithoutDifficultyInput>;
};
export type CampaignUpdateWithWhereUniqueWithoutDifficultyInput = {
    where: Prisma.CampaignWhereUniqueInput;
    data: Prisma.XOR<Prisma.CampaignUpdateWithoutDifficultyInput, Prisma.CampaignUncheckedUpdateWithoutDifficultyInput>;
};
export type CampaignUpdateManyWithWhereWithoutDifficultyInput = {
    where: Prisma.CampaignScalarWhereInput;
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyWithoutDifficultyInput>;
};
export type CampaignScalarWhereInput = {
    AND?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
    OR?: Prisma.CampaignScalarWhereInput[];
    NOT?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
    id?: Prisma.StringFilter<"Campaign"> | string;
    dateCreate?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    dateUpdate?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    name?: Prisma.StringFilter<"Campaign"> | string;
    userResults?: Prisma.JsonFilter<"Campaign">;
    journalNotes?: Prisma.StringNullableListFilter<"Campaign">;
    userId?: Prisma.StringFilter<"Campaign"> | string;
    difficultyId?: Prisma.StringFilter<"Campaign"> | string;
};
export type CampaignCreateWithoutUserInput = {
    id?: string;
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    name: string;
    userResults: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignCreatejournalNotesInput | string[];
    difficulty: Prisma.CampaignDifficultyCreateNestedOneWithoutCampaignsInput;
};
export type CampaignUncheckedCreateWithoutUserInput = {
    id?: string;
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    name: string;
    userResults: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignCreatejournalNotesInput | string[];
    difficultyId: string;
};
export type CampaignCreateOrConnectWithoutUserInput = {
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutUserInput, Prisma.CampaignUncheckedCreateWithoutUserInput>;
};
export type CampaignCreateManyUserInputEnvelope = {
    data: Prisma.CampaignCreateManyUserInput | Prisma.CampaignCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CampaignUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CampaignWhereUniqueInput;
    update: Prisma.XOR<Prisma.CampaignUpdateWithoutUserInput, Prisma.CampaignUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutUserInput, Prisma.CampaignUncheckedCreateWithoutUserInput>;
};
export type CampaignUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CampaignWhereUniqueInput;
    data: Prisma.XOR<Prisma.CampaignUpdateWithoutUserInput, Prisma.CampaignUncheckedUpdateWithoutUserInput>;
};
export type CampaignUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CampaignScalarWhereInput;
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyWithoutUserInput>;
};
export type CampaignCreateManyDifficultyInput = {
    id?: string;
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    name: string;
    userResults: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignCreatejournalNotesInput | string[];
    userId: string;
};
export type CampaignUpdateWithoutDifficultyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userResults?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignUpdatejournalNotesInput | string[];
    user?: Prisma.UserUpdateOneRequiredWithoutCampaignsNestedInput;
};
export type CampaignUncheckedUpdateWithoutDifficultyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userResults?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignUpdatejournalNotesInput | string[];
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CampaignUncheckedUpdateManyWithoutDifficultyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userResults?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignUpdatejournalNotesInput | string[];
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CampaignCreateManyUserInput = {
    id?: string;
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    name: string;
    userResults: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignCreatejournalNotesInput | string[];
    difficultyId: string;
};
export type CampaignUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userResults?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignUpdatejournalNotesInput | string[];
    difficulty?: Prisma.CampaignDifficultyUpdateOneRequiredWithoutCampaignsNestedInput;
};
export type CampaignUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userResults?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignUpdatejournalNotesInput | string[];
    difficultyId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CampaignUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userResults?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    journalNotes?: Prisma.CampaignUpdatejournalNotesInput | string[];
    difficultyId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CampaignSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dateCreate?: boolean;
    dateUpdate?: boolean;
    name?: boolean;
    userResults?: boolean;
    journalNotes?: boolean;
    userId?: boolean;
    difficultyId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    difficulty?: boolean | Prisma.CampaignDifficultyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campaign"]>;
export type CampaignSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dateCreate?: boolean;
    dateUpdate?: boolean;
    name?: boolean;
    userResults?: boolean;
    journalNotes?: boolean;
    userId?: boolean;
    difficultyId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    difficulty?: boolean | Prisma.CampaignDifficultyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campaign"]>;
export type CampaignSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dateCreate?: boolean;
    dateUpdate?: boolean;
    name?: boolean;
    userResults?: boolean;
    journalNotes?: boolean;
    userId?: boolean;
    difficultyId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    difficulty?: boolean | Prisma.CampaignDifficultyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campaign"]>;
export type CampaignSelectScalar = {
    id?: boolean;
    dateCreate?: boolean;
    dateUpdate?: boolean;
    name?: boolean;
    userResults?: boolean;
    journalNotes?: boolean;
    userId?: boolean;
    difficultyId?: boolean;
};
export type CampaignOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "dateCreate" | "dateUpdate" | "name" | "userResults" | "journalNotes" | "userId" | "difficultyId", ExtArgs["result"]["campaign"]>;
export type CampaignInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    difficulty?: boolean | Prisma.CampaignDifficultyDefaultArgs<ExtArgs>;
};
export type CampaignIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    difficulty?: boolean | Prisma.CampaignDifficultyDefaultArgs<ExtArgs>;
};
export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    difficulty?: boolean | Prisma.CampaignDifficultyDefaultArgs<ExtArgs>;
};
export type $CampaignPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Campaign";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        difficulty: Prisma.$CampaignDifficultyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        dateCreate: Date;
        dateUpdate: Date;
        name: string;
        userResults: runtime.JsonValue;
        journalNotes: string[];
        userId: string;
        difficultyId: string;
    }, ExtArgs["result"]["campaign"]>;
    composites: {};
};
export type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CampaignPayload, S>;
export type CampaignCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CampaignCountAggregateInputType | true;
};
export interface CampaignDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Campaign'];
        meta: {
            name: 'Campaign';
        };
    };
    findUnique<T extends CampaignFindUniqueArgs>(args: Prisma.SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CampaignFindFirstArgs>(args?: Prisma.SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CampaignFindManyArgs>(args?: Prisma.SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CampaignCreateArgs>(args: Prisma.SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CampaignCreateManyArgs>(args?: Prisma.SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CampaignDeleteArgs>(args: Prisma.SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CampaignUpdateArgs>(args: Prisma.SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CampaignDeleteManyArgs>(args?: Prisma.SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CampaignUpdateManyArgs>(args: Prisma.SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CampaignUpsertArgs>(args: Prisma.SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CampaignCountArgs>(args?: Prisma.Subset<T, CampaignCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CampaignCountAggregateOutputType> : number>;
    aggregate<T extends CampaignAggregateArgs>(args: Prisma.Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>;
    groupBy<T extends CampaignGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CampaignGroupByArgs['orderBy'];
    } : {
        orderBy?: CampaignGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CampaignFieldRefs;
}
export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    difficulty<T extends Prisma.CampaignDifficultyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CampaignDifficultyDefaultArgs<ExtArgs>>): Prisma.Prisma__CampaignDifficultyClient<runtime.Types.Result.GetResult<Prisma.$CampaignDifficultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CampaignFieldRefs {
    readonly id: Prisma.FieldRef<"Campaign", 'String'>;
    readonly dateCreate: Prisma.FieldRef<"Campaign", 'DateTime'>;
    readonly dateUpdate: Prisma.FieldRef<"Campaign", 'DateTime'>;
    readonly name: Prisma.FieldRef<"Campaign", 'String'>;
    readonly userResults: Prisma.FieldRef<"Campaign", 'Json'>;
    readonly journalNotes: Prisma.FieldRef<"Campaign", 'String[]'>;
    readonly userId: Prisma.FieldRef<"Campaign", 'String'>;
    readonly difficultyId: Prisma.FieldRef<"Campaign", 'String'>;
}
export type CampaignFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where: Prisma.CampaignWhereUniqueInput;
};
export type CampaignFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where: Prisma.CampaignWhereUniqueInput;
};
export type CampaignFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignScalarFieldEnum | Prisma.CampaignScalarFieldEnum[];
};
export type CampaignFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignScalarFieldEnum | Prisma.CampaignScalarFieldEnum[];
};
export type CampaignFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignScalarFieldEnum | Prisma.CampaignScalarFieldEnum[];
};
export type CampaignCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignCreateInput, Prisma.CampaignUncheckedCreateInput>;
};
export type CampaignCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CampaignCreateManyInput | Prisma.CampaignCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CampaignCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    data: Prisma.CampaignCreateManyInput | Prisma.CampaignCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CampaignIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CampaignUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignUpdateInput, Prisma.CampaignUncheckedUpdateInput>;
    where: Prisma.CampaignWhereUniqueInput;
};
export type CampaignUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyInput>;
    where?: Prisma.CampaignWhereInput;
    limit?: number;
};
export type CampaignUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyInput>;
    where?: Prisma.CampaignWhereInput;
    limit?: number;
    include?: Prisma.CampaignIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CampaignUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateInput, Prisma.CampaignUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CampaignUpdateInput, Prisma.CampaignUncheckedUpdateInput>;
};
export type CampaignDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where: Prisma.CampaignWhereUniqueInput;
};
export type CampaignDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
    limit?: number;
};
export type CampaignDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
};
export {};
