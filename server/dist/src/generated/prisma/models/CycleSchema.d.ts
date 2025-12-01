import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CycleSchemaModel = runtime.Types.Result.DefaultSelection<Prisma.$CycleSchemaPayload>;
export type AggregateCycleSchema = {
    _count: CycleSchemaCountAggregateOutputType | null;
    _min: CycleSchemaMinAggregateOutputType | null;
    _max: CycleSchemaMaxAggregateOutputType | null;
};
export type CycleSchemaMinAggregateOutputType = {
    dateCreate: Date | null;
    dateUpdate: Date | null;
    code: string | null;
    userId: string | null;
    dateLastFetchArkhamCards: Date | null;
};
export type CycleSchemaMaxAggregateOutputType = {
    dateCreate: Date | null;
    dateUpdate: Date | null;
    code: string | null;
    userId: string | null;
    dateLastFetchArkhamCards: Date | null;
};
export type CycleSchemaCountAggregateOutputType = {
    dateCreate: number;
    dateUpdate: number;
    data: number;
    code: number;
    userId: number;
    dateLastFetchArkhamCards: number;
    _all: number;
};
export type CycleSchemaMinAggregateInputType = {
    dateCreate?: true;
    dateUpdate?: true;
    code?: true;
    userId?: true;
    dateLastFetchArkhamCards?: true;
};
export type CycleSchemaMaxAggregateInputType = {
    dateCreate?: true;
    dateUpdate?: true;
    code?: true;
    userId?: true;
    dateLastFetchArkhamCards?: true;
};
export type CycleSchemaCountAggregateInputType = {
    dateCreate?: true;
    dateUpdate?: true;
    data?: true;
    code?: true;
    userId?: true;
    dateLastFetchArkhamCards?: true;
    _all?: true;
};
export type CycleSchemaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CycleSchemaWhereInput;
    orderBy?: Prisma.CycleSchemaOrderByWithRelationInput | Prisma.CycleSchemaOrderByWithRelationInput[];
    cursor?: Prisma.CycleSchemaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CycleSchemaCountAggregateInputType;
    _min?: CycleSchemaMinAggregateInputType;
    _max?: CycleSchemaMaxAggregateInputType;
};
export type GetCycleSchemaAggregateType<T extends CycleSchemaAggregateArgs> = {
    [P in keyof T & keyof AggregateCycleSchema]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCycleSchema[P]> : Prisma.GetScalarType<T[P], AggregateCycleSchema[P]>;
};
export type CycleSchemaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CycleSchemaWhereInput;
    orderBy?: Prisma.CycleSchemaOrderByWithAggregationInput | Prisma.CycleSchemaOrderByWithAggregationInput[];
    by: Prisma.CycleSchemaScalarFieldEnum[] | Prisma.CycleSchemaScalarFieldEnum;
    having?: Prisma.CycleSchemaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CycleSchemaCountAggregateInputType | true;
    _min?: CycleSchemaMinAggregateInputType;
    _max?: CycleSchemaMaxAggregateInputType;
};
export type CycleSchemaGroupByOutputType = {
    dateCreate: Date;
    dateUpdate: Date;
    data: runtime.JsonValue;
    code: string;
    userId: string;
    dateLastFetchArkhamCards: Date;
    _count: CycleSchemaCountAggregateOutputType | null;
    _min: CycleSchemaMinAggregateOutputType | null;
    _max: CycleSchemaMaxAggregateOutputType | null;
};
type GetCycleSchemaGroupByPayload<T extends CycleSchemaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CycleSchemaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CycleSchemaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CycleSchemaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CycleSchemaGroupByOutputType[P]>;
}>>;
export type CycleSchemaWhereInput = {
    AND?: Prisma.CycleSchemaWhereInput | Prisma.CycleSchemaWhereInput[];
    OR?: Prisma.CycleSchemaWhereInput[];
    NOT?: Prisma.CycleSchemaWhereInput | Prisma.CycleSchemaWhereInput[];
    dateCreate?: Prisma.DateTimeFilter<"CycleSchema"> | Date | string;
    dateUpdate?: Prisma.DateTimeFilter<"CycleSchema"> | Date | string;
    data?: Prisma.JsonFilter<"CycleSchema">;
    code?: Prisma.StringFilter<"CycleSchema"> | string;
    userId?: Prisma.StringFilter<"CycleSchema"> | string;
    dateLastFetchArkhamCards?: Prisma.DateTimeFilter<"CycleSchema"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type CycleSchemaOrderByWithRelationInput = {
    dateCreate?: Prisma.SortOrder;
    dateUpdate?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    dateLastFetchArkhamCards?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type CycleSchemaWhereUniqueInput = Prisma.AtLeast<{
    userId_code?: Prisma.CycleSchemaUserIdCodeCompoundUniqueInput;
    AND?: Prisma.CycleSchemaWhereInput | Prisma.CycleSchemaWhereInput[];
    OR?: Prisma.CycleSchemaWhereInput[];
    NOT?: Prisma.CycleSchemaWhereInput | Prisma.CycleSchemaWhereInput[];
    dateCreate?: Prisma.DateTimeFilter<"CycleSchema"> | Date | string;
    dateUpdate?: Prisma.DateTimeFilter<"CycleSchema"> | Date | string;
    data?: Prisma.JsonFilter<"CycleSchema">;
    code?: Prisma.StringFilter<"CycleSchema"> | string;
    userId?: Prisma.StringFilter<"CycleSchema"> | string;
    dateLastFetchArkhamCards?: Prisma.DateTimeFilter<"CycleSchema"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "userId_code">;
export type CycleSchemaOrderByWithAggregationInput = {
    dateCreate?: Prisma.SortOrder;
    dateUpdate?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    dateLastFetchArkhamCards?: Prisma.SortOrder;
    _count?: Prisma.CycleSchemaCountOrderByAggregateInput;
    _max?: Prisma.CycleSchemaMaxOrderByAggregateInput;
    _min?: Prisma.CycleSchemaMinOrderByAggregateInput;
};
export type CycleSchemaScalarWhereWithAggregatesInput = {
    AND?: Prisma.CycleSchemaScalarWhereWithAggregatesInput | Prisma.CycleSchemaScalarWhereWithAggregatesInput[];
    OR?: Prisma.CycleSchemaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CycleSchemaScalarWhereWithAggregatesInput | Prisma.CycleSchemaScalarWhereWithAggregatesInput[];
    dateCreate?: Prisma.DateTimeWithAggregatesFilter<"CycleSchema"> | Date | string;
    dateUpdate?: Prisma.DateTimeWithAggregatesFilter<"CycleSchema"> | Date | string;
    data?: Prisma.JsonWithAggregatesFilter<"CycleSchema">;
    code?: Prisma.StringWithAggregatesFilter<"CycleSchema"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"CycleSchema"> | string;
    dateLastFetchArkhamCards?: Prisma.DateTimeWithAggregatesFilter<"CycleSchema"> | Date | string;
};
export type CycleSchemaCreateInput = {
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    code: string;
    dateLastFetchArkhamCards: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCycleSchemasInput;
};
export type CycleSchemaUncheckedCreateInput = {
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    code: string;
    userId: string;
    dateLastFetchArkhamCards: Date | string;
};
export type CycleSchemaUpdateInput = {
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    dateLastFetchArkhamCards?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCycleSchemasNestedInput;
};
export type CycleSchemaUncheckedUpdateInput = {
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    dateLastFetchArkhamCards?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CycleSchemaCreateManyInput = {
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    code: string;
    userId: string;
    dateLastFetchArkhamCards: Date | string;
};
export type CycleSchemaUpdateManyMutationInput = {
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    dateLastFetchArkhamCards?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CycleSchemaUncheckedUpdateManyInput = {
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    dateLastFetchArkhamCards?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CycleSchemaUserIdCodeCompoundUniqueInput = {
    userId: string;
    code: string;
};
export type CycleSchemaCountOrderByAggregateInput = {
    dateCreate?: Prisma.SortOrder;
    dateUpdate?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    dateLastFetchArkhamCards?: Prisma.SortOrder;
};
export type CycleSchemaMaxOrderByAggregateInput = {
    dateCreate?: Prisma.SortOrder;
    dateUpdate?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    dateLastFetchArkhamCards?: Prisma.SortOrder;
};
export type CycleSchemaMinOrderByAggregateInput = {
    dateCreate?: Prisma.SortOrder;
    dateUpdate?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    dateLastFetchArkhamCards?: Prisma.SortOrder;
};
export type CycleSchemaListRelationFilter = {
    every?: Prisma.CycleSchemaWhereInput;
    some?: Prisma.CycleSchemaWhereInput;
    none?: Prisma.CycleSchemaWhereInput;
};
export type CycleSchemaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CycleSchemaCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CycleSchemaCreateWithoutUserInput, Prisma.CycleSchemaUncheckedCreateWithoutUserInput> | Prisma.CycleSchemaCreateWithoutUserInput[] | Prisma.CycleSchemaUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CycleSchemaCreateOrConnectWithoutUserInput | Prisma.CycleSchemaCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CycleSchemaCreateManyUserInputEnvelope;
    connect?: Prisma.CycleSchemaWhereUniqueInput | Prisma.CycleSchemaWhereUniqueInput[];
};
export type CycleSchemaUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CycleSchemaCreateWithoutUserInput, Prisma.CycleSchemaUncheckedCreateWithoutUserInput> | Prisma.CycleSchemaCreateWithoutUserInput[] | Prisma.CycleSchemaUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CycleSchemaCreateOrConnectWithoutUserInput | Prisma.CycleSchemaCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CycleSchemaCreateManyUserInputEnvelope;
    connect?: Prisma.CycleSchemaWhereUniqueInput | Prisma.CycleSchemaWhereUniqueInput[];
};
export type CycleSchemaUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CycleSchemaCreateWithoutUserInput, Prisma.CycleSchemaUncheckedCreateWithoutUserInput> | Prisma.CycleSchemaCreateWithoutUserInput[] | Prisma.CycleSchemaUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CycleSchemaCreateOrConnectWithoutUserInput | Prisma.CycleSchemaCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CycleSchemaUpsertWithWhereUniqueWithoutUserInput | Prisma.CycleSchemaUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CycleSchemaCreateManyUserInputEnvelope;
    set?: Prisma.CycleSchemaWhereUniqueInput | Prisma.CycleSchemaWhereUniqueInput[];
    disconnect?: Prisma.CycleSchemaWhereUniqueInput | Prisma.CycleSchemaWhereUniqueInput[];
    delete?: Prisma.CycleSchemaWhereUniqueInput | Prisma.CycleSchemaWhereUniqueInput[];
    connect?: Prisma.CycleSchemaWhereUniqueInput | Prisma.CycleSchemaWhereUniqueInput[];
    update?: Prisma.CycleSchemaUpdateWithWhereUniqueWithoutUserInput | Prisma.CycleSchemaUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CycleSchemaUpdateManyWithWhereWithoutUserInput | Prisma.CycleSchemaUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CycleSchemaScalarWhereInput | Prisma.CycleSchemaScalarWhereInput[];
};
export type CycleSchemaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CycleSchemaCreateWithoutUserInput, Prisma.CycleSchemaUncheckedCreateWithoutUserInput> | Prisma.CycleSchemaCreateWithoutUserInput[] | Prisma.CycleSchemaUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CycleSchemaCreateOrConnectWithoutUserInput | Prisma.CycleSchemaCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CycleSchemaUpsertWithWhereUniqueWithoutUserInput | Prisma.CycleSchemaUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CycleSchemaCreateManyUserInputEnvelope;
    set?: Prisma.CycleSchemaWhereUniqueInput | Prisma.CycleSchemaWhereUniqueInput[];
    disconnect?: Prisma.CycleSchemaWhereUniqueInput | Prisma.CycleSchemaWhereUniqueInput[];
    delete?: Prisma.CycleSchemaWhereUniqueInput | Prisma.CycleSchemaWhereUniqueInput[];
    connect?: Prisma.CycleSchemaWhereUniqueInput | Prisma.CycleSchemaWhereUniqueInput[];
    update?: Prisma.CycleSchemaUpdateWithWhereUniqueWithoutUserInput | Prisma.CycleSchemaUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CycleSchemaUpdateManyWithWhereWithoutUserInput | Prisma.CycleSchemaUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CycleSchemaScalarWhereInput | Prisma.CycleSchemaScalarWhereInput[];
};
export type CycleSchemaCreateWithoutUserInput = {
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    code: string;
    dateLastFetchArkhamCards: Date | string;
};
export type CycleSchemaUncheckedCreateWithoutUserInput = {
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    code: string;
    dateLastFetchArkhamCards: Date | string;
};
export type CycleSchemaCreateOrConnectWithoutUserInput = {
    where: Prisma.CycleSchemaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CycleSchemaCreateWithoutUserInput, Prisma.CycleSchemaUncheckedCreateWithoutUserInput>;
};
export type CycleSchemaCreateManyUserInputEnvelope = {
    data: Prisma.CycleSchemaCreateManyUserInput | Prisma.CycleSchemaCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CycleSchemaUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CycleSchemaWhereUniqueInput;
    update: Prisma.XOR<Prisma.CycleSchemaUpdateWithoutUserInput, Prisma.CycleSchemaUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CycleSchemaCreateWithoutUserInput, Prisma.CycleSchemaUncheckedCreateWithoutUserInput>;
};
export type CycleSchemaUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CycleSchemaWhereUniqueInput;
    data: Prisma.XOR<Prisma.CycleSchemaUpdateWithoutUserInput, Prisma.CycleSchemaUncheckedUpdateWithoutUserInput>;
};
export type CycleSchemaUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CycleSchemaScalarWhereInput;
    data: Prisma.XOR<Prisma.CycleSchemaUpdateManyMutationInput, Prisma.CycleSchemaUncheckedUpdateManyWithoutUserInput>;
};
export type CycleSchemaScalarWhereInput = {
    AND?: Prisma.CycleSchemaScalarWhereInput | Prisma.CycleSchemaScalarWhereInput[];
    OR?: Prisma.CycleSchemaScalarWhereInput[];
    NOT?: Prisma.CycleSchemaScalarWhereInput | Prisma.CycleSchemaScalarWhereInput[];
    dateCreate?: Prisma.DateTimeFilter<"CycleSchema"> | Date | string;
    dateUpdate?: Prisma.DateTimeFilter<"CycleSchema"> | Date | string;
    data?: Prisma.JsonFilter<"CycleSchema">;
    code?: Prisma.StringFilter<"CycleSchema"> | string;
    userId?: Prisma.StringFilter<"CycleSchema"> | string;
    dateLastFetchArkhamCards?: Prisma.DateTimeFilter<"CycleSchema"> | Date | string;
};
export type CycleSchemaCreateManyUserInput = {
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    code: string;
    dateLastFetchArkhamCards: Date | string;
};
export type CycleSchemaUpdateWithoutUserInput = {
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    dateLastFetchArkhamCards?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CycleSchemaUncheckedUpdateWithoutUserInput = {
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    dateLastFetchArkhamCards?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CycleSchemaUncheckedUpdateManyWithoutUserInput = {
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    dateLastFetchArkhamCards?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CycleSchemaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    dateCreate?: boolean;
    dateUpdate?: boolean;
    data?: boolean;
    code?: boolean;
    userId?: boolean;
    dateLastFetchArkhamCards?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cycleSchema"]>;
export type CycleSchemaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    dateCreate?: boolean;
    dateUpdate?: boolean;
    data?: boolean;
    code?: boolean;
    userId?: boolean;
    dateLastFetchArkhamCards?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cycleSchema"]>;
export type CycleSchemaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    dateCreate?: boolean;
    dateUpdate?: boolean;
    data?: boolean;
    code?: boolean;
    userId?: boolean;
    dateLastFetchArkhamCards?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cycleSchema"]>;
export type CycleSchemaSelectScalar = {
    dateCreate?: boolean;
    dateUpdate?: boolean;
    data?: boolean;
    code?: boolean;
    userId?: boolean;
    dateLastFetchArkhamCards?: boolean;
};
export type CycleSchemaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"dateCreate" | "dateUpdate" | "data" | "code" | "userId" | "dateLastFetchArkhamCards", ExtArgs["result"]["cycleSchema"]>;
export type CycleSchemaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CycleSchemaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CycleSchemaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CycleSchemaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CycleSchema";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        dateCreate: Date;
        dateUpdate: Date;
        data: runtime.JsonValue;
        code: string;
        userId: string;
        dateLastFetchArkhamCards: Date;
    }, ExtArgs["result"]["cycleSchema"]>;
    composites: {};
};
export type CycleSchemaGetPayload<S extends boolean | null | undefined | CycleSchemaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CycleSchemaPayload, S>;
export type CycleSchemaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CycleSchemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CycleSchemaCountAggregateInputType | true;
};
export interface CycleSchemaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CycleSchema'];
        meta: {
            name: 'CycleSchema';
        };
    };
    findUnique<T extends CycleSchemaFindUniqueArgs>(args: Prisma.SelectSubset<T, CycleSchemaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CycleSchemaClient<runtime.Types.Result.GetResult<Prisma.$CycleSchemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CycleSchemaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CycleSchemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CycleSchemaClient<runtime.Types.Result.GetResult<Prisma.$CycleSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CycleSchemaFindFirstArgs>(args?: Prisma.SelectSubset<T, CycleSchemaFindFirstArgs<ExtArgs>>): Prisma.Prisma__CycleSchemaClient<runtime.Types.Result.GetResult<Prisma.$CycleSchemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CycleSchemaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CycleSchemaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CycleSchemaClient<runtime.Types.Result.GetResult<Prisma.$CycleSchemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CycleSchemaFindManyArgs>(args?: Prisma.SelectSubset<T, CycleSchemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CycleSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CycleSchemaCreateArgs>(args: Prisma.SelectSubset<T, CycleSchemaCreateArgs<ExtArgs>>): Prisma.Prisma__CycleSchemaClient<runtime.Types.Result.GetResult<Prisma.$CycleSchemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CycleSchemaCreateManyArgs>(args?: Prisma.SelectSubset<T, CycleSchemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CycleSchemaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CycleSchemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CycleSchemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CycleSchemaDeleteArgs>(args: Prisma.SelectSubset<T, CycleSchemaDeleteArgs<ExtArgs>>): Prisma.Prisma__CycleSchemaClient<runtime.Types.Result.GetResult<Prisma.$CycleSchemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CycleSchemaUpdateArgs>(args: Prisma.SelectSubset<T, CycleSchemaUpdateArgs<ExtArgs>>): Prisma.Prisma__CycleSchemaClient<runtime.Types.Result.GetResult<Prisma.$CycleSchemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CycleSchemaDeleteManyArgs>(args?: Prisma.SelectSubset<T, CycleSchemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CycleSchemaUpdateManyArgs>(args: Prisma.SelectSubset<T, CycleSchemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CycleSchemaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CycleSchemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CycleSchemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CycleSchemaUpsertArgs>(args: Prisma.SelectSubset<T, CycleSchemaUpsertArgs<ExtArgs>>): Prisma.Prisma__CycleSchemaClient<runtime.Types.Result.GetResult<Prisma.$CycleSchemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CycleSchemaCountArgs>(args?: Prisma.Subset<T, CycleSchemaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CycleSchemaCountAggregateOutputType> : number>;
    aggregate<T extends CycleSchemaAggregateArgs>(args: Prisma.Subset<T, CycleSchemaAggregateArgs>): Prisma.PrismaPromise<GetCycleSchemaAggregateType<T>>;
    groupBy<T extends CycleSchemaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CycleSchemaGroupByArgs['orderBy'];
    } : {
        orderBy?: CycleSchemaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CycleSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCycleSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CycleSchemaFieldRefs;
}
export interface Prisma__CycleSchemaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CycleSchemaFieldRefs {
    readonly dateCreate: Prisma.FieldRef<"CycleSchema", 'DateTime'>;
    readonly dateUpdate: Prisma.FieldRef<"CycleSchema", 'DateTime'>;
    readonly data: Prisma.FieldRef<"CycleSchema", 'Json'>;
    readonly code: Prisma.FieldRef<"CycleSchema", 'String'>;
    readonly userId: Prisma.FieldRef<"CycleSchema", 'String'>;
    readonly dateLastFetchArkhamCards: Prisma.FieldRef<"CycleSchema", 'DateTime'>;
}
export type CycleSchemaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSchemaSelect<ExtArgs> | null;
    omit?: Prisma.CycleSchemaOmit<ExtArgs> | null;
    include?: Prisma.CycleSchemaInclude<ExtArgs> | null;
    where: Prisma.CycleSchemaWhereUniqueInput;
};
export type CycleSchemaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSchemaSelect<ExtArgs> | null;
    omit?: Prisma.CycleSchemaOmit<ExtArgs> | null;
    include?: Prisma.CycleSchemaInclude<ExtArgs> | null;
    where: Prisma.CycleSchemaWhereUniqueInput;
};
export type CycleSchemaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSchemaSelect<ExtArgs> | null;
    omit?: Prisma.CycleSchemaOmit<ExtArgs> | null;
    include?: Prisma.CycleSchemaInclude<ExtArgs> | null;
    where?: Prisma.CycleSchemaWhereInput;
    orderBy?: Prisma.CycleSchemaOrderByWithRelationInput | Prisma.CycleSchemaOrderByWithRelationInput[];
    cursor?: Prisma.CycleSchemaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CycleSchemaScalarFieldEnum | Prisma.CycleSchemaScalarFieldEnum[];
};
export type CycleSchemaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSchemaSelect<ExtArgs> | null;
    omit?: Prisma.CycleSchemaOmit<ExtArgs> | null;
    include?: Prisma.CycleSchemaInclude<ExtArgs> | null;
    where?: Prisma.CycleSchemaWhereInput;
    orderBy?: Prisma.CycleSchemaOrderByWithRelationInput | Prisma.CycleSchemaOrderByWithRelationInput[];
    cursor?: Prisma.CycleSchemaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CycleSchemaScalarFieldEnum | Prisma.CycleSchemaScalarFieldEnum[];
};
export type CycleSchemaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSchemaSelect<ExtArgs> | null;
    omit?: Prisma.CycleSchemaOmit<ExtArgs> | null;
    include?: Prisma.CycleSchemaInclude<ExtArgs> | null;
    where?: Prisma.CycleSchemaWhereInput;
    orderBy?: Prisma.CycleSchemaOrderByWithRelationInput | Prisma.CycleSchemaOrderByWithRelationInput[];
    cursor?: Prisma.CycleSchemaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CycleSchemaScalarFieldEnum | Prisma.CycleSchemaScalarFieldEnum[];
};
export type CycleSchemaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSchemaSelect<ExtArgs> | null;
    omit?: Prisma.CycleSchemaOmit<ExtArgs> | null;
    include?: Prisma.CycleSchemaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CycleSchemaCreateInput, Prisma.CycleSchemaUncheckedCreateInput>;
};
export type CycleSchemaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CycleSchemaCreateManyInput | Prisma.CycleSchemaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CycleSchemaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSchemaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CycleSchemaOmit<ExtArgs> | null;
    data: Prisma.CycleSchemaCreateManyInput | Prisma.CycleSchemaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CycleSchemaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CycleSchemaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSchemaSelect<ExtArgs> | null;
    omit?: Prisma.CycleSchemaOmit<ExtArgs> | null;
    include?: Prisma.CycleSchemaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CycleSchemaUpdateInput, Prisma.CycleSchemaUncheckedUpdateInput>;
    where: Prisma.CycleSchemaWhereUniqueInput;
};
export type CycleSchemaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CycleSchemaUpdateManyMutationInput, Prisma.CycleSchemaUncheckedUpdateManyInput>;
    where?: Prisma.CycleSchemaWhereInput;
    limit?: number;
};
export type CycleSchemaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSchemaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CycleSchemaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CycleSchemaUpdateManyMutationInput, Prisma.CycleSchemaUncheckedUpdateManyInput>;
    where?: Prisma.CycleSchemaWhereInput;
    limit?: number;
    include?: Prisma.CycleSchemaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CycleSchemaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSchemaSelect<ExtArgs> | null;
    omit?: Prisma.CycleSchemaOmit<ExtArgs> | null;
    include?: Prisma.CycleSchemaInclude<ExtArgs> | null;
    where: Prisma.CycleSchemaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CycleSchemaCreateInput, Prisma.CycleSchemaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CycleSchemaUpdateInput, Prisma.CycleSchemaUncheckedUpdateInput>;
};
export type CycleSchemaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSchemaSelect<ExtArgs> | null;
    omit?: Prisma.CycleSchemaOmit<ExtArgs> | null;
    include?: Prisma.CycleSchemaInclude<ExtArgs> | null;
    where: Prisma.CycleSchemaWhereUniqueInput;
};
export type CycleSchemaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CycleSchemaWhereInput;
    limit?: number;
};
export type CycleSchemaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSchemaSelect<ExtArgs> | null;
    omit?: Prisma.CycleSchemaOmit<ExtArgs> | null;
    include?: Prisma.CycleSchemaInclude<ExtArgs> | null;
};
export {};
