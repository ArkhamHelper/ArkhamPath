import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CampaignDifficultyModel = runtime.Types.Result.DefaultSelection<Prisma.$CampaignDifficultyPayload>;
export type AggregateCampaignDifficulty = {
    _count: CampaignDifficultyCountAggregateOutputType | null;
    _min: CampaignDifficultyMinAggregateOutputType | null;
    _max: CampaignDifficultyMaxAggregateOutputType | null;
};
export type CampaignDifficultyMinAggregateOutputType = {
    id: string | null;
    dateCreate: Date | null;
    dateUpdate: Date | null;
    name: string | null;
};
export type CampaignDifficultyMaxAggregateOutputType = {
    id: string | null;
    dateCreate: Date | null;
    dateUpdate: Date | null;
    name: string | null;
};
export type CampaignDifficultyCountAggregateOutputType = {
    id: number;
    dateCreate: number;
    dateUpdate: number;
    name: number;
    _all: number;
};
export type CampaignDifficultyMinAggregateInputType = {
    id?: true;
    dateCreate?: true;
    dateUpdate?: true;
    name?: true;
};
export type CampaignDifficultyMaxAggregateInputType = {
    id?: true;
    dateCreate?: true;
    dateUpdate?: true;
    name?: true;
};
export type CampaignDifficultyCountAggregateInputType = {
    id?: true;
    dateCreate?: true;
    dateUpdate?: true;
    name?: true;
    _all?: true;
};
export type CampaignDifficultyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignDifficultyWhereInput;
    orderBy?: Prisma.CampaignDifficultyOrderByWithRelationInput | Prisma.CampaignDifficultyOrderByWithRelationInput[];
    cursor?: Prisma.CampaignDifficultyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CampaignDifficultyCountAggregateInputType;
    _min?: CampaignDifficultyMinAggregateInputType;
    _max?: CampaignDifficultyMaxAggregateInputType;
};
export type GetCampaignDifficultyAggregateType<T extends CampaignDifficultyAggregateArgs> = {
    [P in keyof T & keyof AggregateCampaignDifficulty]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCampaignDifficulty[P]> : Prisma.GetScalarType<T[P], AggregateCampaignDifficulty[P]>;
};
export type CampaignDifficultyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignDifficultyWhereInput;
    orderBy?: Prisma.CampaignDifficultyOrderByWithAggregationInput | Prisma.CampaignDifficultyOrderByWithAggregationInput[];
    by: Prisma.CampaignDifficultyScalarFieldEnum[] | Prisma.CampaignDifficultyScalarFieldEnum;
    having?: Prisma.CampaignDifficultyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CampaignDifficultyCountAggregateInputType | true;
    _min?: CampaignDifficultyMinAggregateInputType;
    _max?: CampaignDifficultyMaxAggregateInputType;
};
export type CampaignDifficultyGroupByOutputType = {
    id: string;
    dateCreate: Date;
    dateUpdate: Date;
    name: string;
    _count: CampaignDifficultyCountAggregateOutputType | null;
    _min: CampaignDifficultyMinAggregateOutputType | null;
    _max: CampaignDifficultyMaxAggregateOutputType | null;
};
type GetCampaignDifficultyGroupByPayload<T extends CampaignDifficultyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CampaignDifficultyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CampaignDifficultyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CampaignDifficultyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CampaignDifficultyGroupByOutputType[P]>;
}>>;
export type CampaignDifficultyWhereInput = {
    AND?: Prisma.CampaignDifficultyWhereInput | Prisma.CampaignDifficultyWhereInput[];
    OR?: Prisma.CampaignDifficultyWhereInput[];
    NOT?: Prisma.CampaignDifficultyWhereInput | Prisma.CampaignDifficultyWhereInput[];
    id?: Prisma.StringFilter<"CampaignDifficulty"> | string;
    dateCreate?: Prisma.DateTimeFilter<"CampaignDifficulty"> | Date | string;
    dateUpdate?: Prisma.DateTimeFilter<"CampaignDifficulty"> | Date | string;
    name?: Prisma.StringFilter<"CampaignDifficulty"> | string;
    campaigns?: Prisma.CampaignListRelationFilter;
};
export type CampaignDifficultyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    dateCreate?: Prisma.SortOrder;
    dateUpdate?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    campaigns?: Prisma.CampaignOrderByRelationAggregateInput;
};
export type CampaignDifficultyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CampaignDifficultyWhereInput | Prisma.CampaignDifficultyWhereInput[];
    OR?: Prisma.CampaignDifficultyWhereInput[];
    NOT?: Prisma.CampaignDifficultyWhereInput | Prisma.CampaignDifficultyWhereInput[];
    dateCreate?: Prisma.DateTimeFilter<"CampaignDifficulty"> | Date | string;
    dateUpdate?: Prisma.DateTimeFilter<"CampaignDifficulty"> | Date | string;
    name?: Prisma.StringFilter<"CampaignDifficulty"> | string;
    campaigns?: Prisma.CampaignListRelationFilter;
}, "id">;
export type CampaignDifficultyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    dateCreate?: Prisma.SortOrder;
    dateUpdate?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.CampaignDifficultyCountOrderByAggregateInput;
    _max?: Prisma.CampaignDifficultyMaxOrderByAggregateInput;
    _min?: Prisma.CampaignDifficultyMinOrderByAggregateInput;
};
export type CampaignDifficultyScalarWhereWithAggregatesInput = {
    AND?: Prisma.CampaignDifficultyScalarWhereWithAggregatesInput | Prisma.CampaignDifficultyScalarWhereWithAggregatesInput[];
    OR?: Prisma.CampaignDifficultyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CampaignDifficultyScalarWhereWithAggregatesInput | Prisma.CampaignDifficultyScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CampaignDifficulty"> | string;
    dateCreate?: Prisma.DateTimeWithAggregatesFilter<"CampaignDifficulty"> | Date | string;
    dateUpdate?: Prisma.DateTimeWithAggregatesFilter<"CampaignDifficulty"> | Date | string;
    name?: Prisma.StringWithAggregatesFilter<"CampaignDifficulty"> | string;
};
export type CampaignDifficultyCreateInput = {
    id?: string;
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    name: string;
    campaigns?: Prisma.CampaignCreateNestedManyWithoutDifficultyInput;
};
export type CampaignDifficultyUncheckedCreateInput = {
    id?: string;
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    name: string;
    campaigns?: Prisma.CampaignUncheckedCreateNestedManyWithoutDifficultyInput;
};
export type CampaignDifficultyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    campaigns?: Prisma.CampaignUpdateManyWithoutDifficultyNestedInput;
};
export type CampaignDifficultyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    campaigns?: Prisma.CampaignUncheckedUpdateManyWithoutDifficultyNestedInput;
};
export type CampaignDifficultyCreateManyInput = {
    id?: string;
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    name: string;
};
export type CampaignDifficultyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CampaignDifficultyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CampaignDifficultyScalarRelationFilter = {
    is?: Prisma.CampaignDifficultyWhereInput;
    isNot?: Prisma.CampaignDifficultyWhereInput;
};
export type CampaignDifficultyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dateCreate?: Prisma.SortOrder;
    dateUpdate?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type CampaignDifficultyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dateCreate?: Prisma.SortOrder;
    dateUpdate?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type CampaignDifficultyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dateCreate?: Prisma.SortOrder;
    dateUpdate?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type CampaignDifficultyCreateNestedOneWithoutCampaignsInput = {
    create?: Prisma.XOR<Prisma.CampaignDifficultyCreateWithoutCampaignsInput, Prisma.CampaignDifficultyUncheckedCreateWithoutCampaignsInput>;
    connectOrCreate?: Prisma.CampaignDifficultyCreateOrConnectWithoutCampaignsInput;
    connect?: Prisma.CampaignDifficultyWhereUniqueInput;
};
export type CampaignDifficultyUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignDifficultyCreateWithoutCampaignsInput, Prisma.CampaignDifficultyUncheckedCreateWithoutCampaignsInput>;
    connectOrCreate?: Prisma.CampaignDifficultyCreateOrConnectWithoutCampaignsInput;
    upsert?: Prisma.CampaignDifficultyUpsertWithoutCampaignsInput;
    connect?: Prisma.CampaignDifficultyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CampaignDifficultyUpdateToOneWithWhereWithoutCampaignsInput, Prisma.CampaignDifficultyUpdateWithoutCampaignsInput>, Prisma.CampaignDifficultyUncheckedUpdateWithoutCampaignsInput>;
};
export type CampaignDifficultyCreateWithoutCampaignsInput = {
    id?: string;
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    name: string;
};
export type CampaignDifficultyUncheckedCreateWithoutCampaignsInput = {
    id?: string;
    dateCreate?: Date | string;
    dateUpdate?: Date | string;
    name: string;
};
export type CampaignDifficultyCreateOrConnectWithoutCampaignsInput = {
    where: Prisma.CampaignDifficultyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignDifficultyCreateWithoutCampaignsInput, Prisma.CampaignDifficultyUncheckedCreateWithoutCampaignsInput>;
};
export type CampaignDifficultyUpsertWithoutCampaignsInput = {
    update: Prisma.XOR<Prisma.CampaignDifficultyUpdateWithoutCampaignsInput, Prisma.CampaignDifficultyUncheckedUpdateWithoutCampaignsInput>;
    create: Prisma.XOR<Prisma.CampaignDifficultyCreateWithoutCampaignsInput, Prisma.CampaignDifficultyUncheckedCreateWithoutCampaignsInput>;
    where?: Prisma.CampaignDifficultyWhereInput;
};
export type CampaignDifficultyUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: Prisma.CampaignDifficultyWhereInput;
    data: Prisma.XOR<Prisma.CampaignDifficultyUpdateWithoutCampaignsInput, Prisma.CampaignDifficultyUncheckedUpdateWithoutCampaignsInput>;
};
export type CampaignDifficultyUpdateWithoutCampaignsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CampaignDifficultyUncheckedUpdateWithoutCampaignsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CampaignDifficultyCountOutputType = {
    campaigns: number;
};
export type CampaignDifficultyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaigns?: boolean | CampaignDifficultyCountOutputTypeCountCampaignsArgs;
};
export type CampaignDifficultyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignDifficultyCountOutputTypeSelect<ExtArgs> | null;
};
export type CampaignDifficultyCountOutputTypeCountCampaignsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
};
export type CampaignDifficultySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dateCreate?: boolean;
    dateUpdate?: boolean;
    name?: boolean;
    campaigns?: boolean | Prisma.CampaignDifficulty$campaignsArgs<ExtArgs>;
    _count?: boolean | Prisma.CampaignDifficultyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campaignDifficulty"]>;
export type CampaignDifficultySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dateCreate?: boolean;
    dateUpdate?: boolean;
    name?: boolean;
}, ExtArgs["result"]["campaignDifficulty"]>;
export type CampaignDifficultySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dateCreate?: boolean;
    dateUpdate?: boolean;
    name?: boolean;
}, ExtArgs["result"]["campaignDifficulty"]>;
export type CampaignDifficultySelectScalar = {
    id?: boolean;
    dateCreate?: boolean;
    dateUpdate?: boolean;
    name?: boolean;
};
export type CampaignDifficultyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "dateCreate" | "dateUpdate" | "name", ExtArgs["result"]["campaignDifficulty"]>;
export type CampaignDifficultyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaigns?: boolean | Prisma.CampaignDifficulty$campaignsArgs<ExtArgs>;
    _count?: boolean | Prisma.CampaignDifficultyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CampaignDifficultyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CampaignDifficultyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CampaignDifficultyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CampaignDifficulty";
    objects: {
        campaigns: Prisma.$CampaignPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        dateCreate: Date;
        dateUpdate: Date;
        name: string;
    }, ExtArgs["result"]["campaignDifficulty"]>;
    composites: {};
};
export type CampaignDifficultyGetPayload<S extends boolean | null | undefined | CampaignDifficultyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CampaignDifficultyPayload, S>;
export type CampaignDifficultyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CampaignDifficultyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CampaignDifficultyCountAggregateInputType | true;
};
export interface CampaignDifficultyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CampaignDifficulty'];
        meta: {
            name: 'CampaignDifficulty';
        };
    };
    findUnique<T extends CampaignDifficultyFindUniqueArgs>(args: Prisma.SelectSubset<T, CampaignDifficultyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CampaignDifficultyClient<runtime.Types.Result.GetResult<Prisma.$CampaignDifficultyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CampaignDifficultyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CampaignDifficultyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampaignDifficultyClient<runtime.Types.Result.GetResult<Prisma.$CampaignDifficultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CampaignDifficultyFindFirstArgs>(args?: Prisma.SelectSubset<T, CampaignDifficultyFindFirstArgs<ExtArgs>>): Prisma.Prisma__CampaignDifficultyClient<runtime.Types.Result.GetResult<Prisma.$CampaignDifficultyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CampaignDifficultyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CampaignDifficultyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampaignDifficultyClient<runtime.Types.Result.GetResult<Prisma.$CampaignDifficultyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CampaignDifficultyFindManyArgs>(args?: Prisma.SelectSubset<T, CampaignDifficultyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignDifficultyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CampaignDifficultyCreateArgs>(args: Prisma.SelectSubset<T, CampaignDifficultyCreateArgs<ExtArgs>>): Prisma.Prisma__CampaignDifficultyClient<runtime.Types.Result.GetResult<Prisma.$CampaignDifficultyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CampaignDifficultyCreateManyArgs>(args?: Prisma.SelectSubset<T, CampaignDifficultyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CampaignDifficultyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CampaignDifficultyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignDifficultyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CampaignDifficultyDeleteArgs>(args: Prisma.SelectSubset<T, CampaignDifficultyDeleteArgs<ExtArgs>>): Prisma.Prisma__CampaignDifficultyClient<runtime.Types.Result.GetResult<Prisma.$CampaignDifficultyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CampaignDifficultyUpdateArgs>(args: Prisma.SelectSubset<T, CampaignDifficultyUpdateArgs<ExtArgs>>): Prisma.Prisma__CampaignDifficultyClient<runtime.Types.Result.GetResult<Prisma.$CampaignDifficultyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CampaignDifficultyDeleteManyArgs>(args?: Prisma.SelectSubset<T, CampaignDifficultyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CampaignDifficultyUpdateManyArgs>(args: Prisma.SelectSubset<T, CampaignDifficultyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CampaignDifficultyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CampaignDifficultyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignDifficultyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CampaignDifficultyUpsertArgs>(args: Prisma.SelectSubset<T, CampaignDifficultyUpsertArgs<ExtArgs>>): Prisma.Prisma__CampaignDifficultyClient<runtime.Types.Result.GetResult<Prisma.$CampaignDifficultyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CampaignDifficultyCountArgs>(args?: Prisma.Subset<T, CampaignDifficultyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CampaignDifficultyCountAggregateOutputType> : number>;
    aggregate<T extends CampaignDifficultyAggregateArgs>(args: Prisma.Subset<T, CampaignDifficultyAggregateArgs>): Prisma.PrismaPromise<GetCampaignDifficultyAggregateType<T>>;
    groupBy<T extends CampaignDifficultyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CampaignDifficultyGroupByArgs['orderBy'];
    } : {
        orderBy?: CampaignDifficultyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CampaignDifficultyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignDifficultyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CampaignDifficultyFieldRefs;
}
export interface Prisma__CampaignDifficultyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    campaigns<T extends Prisma.CampaignDifficulty$campaignsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CampaignDifficulty$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CampaignDifficultyFieldRefs {
    readonly id: Prisma.FieldRef<"CampaignDifficulty", 'String'>;
    readonly dateCreate: Prisma.FieldRef<"CampaignDifficulty", 'DateTime'>;
    readonly dateUpdate: Prisma.FieldRef<"CampaignDifficulty", 'DateTime'>;
    readonly name: Prisma.FieldRef<"CampaignDifficulty", 'String'>;
}
export type CampaignDifficultyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignDifficultySelect<ExtArgs> | null;
    omit?: Prisma.CampaignDifficultyOmit<ExtArgs> | null;
    include?: Prisma.CampaignDifficultyInclude<ExtArgs> | null;
    where: Prisma.CampaignDifficultyWhereUniqueInput;
};
export type CampaignDifficultyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignDifficultySelect<ExtArgs> | null;
    omit?: Prisma.CampaignDifficultyOmit<ExtArgs> | null;
    include?: Prisma.CampaignDifficultyInclude<ExtArgs> | null;
    where: Prisma.CampaignDifficultyWhereUniqueInput;
};
export type CampaignDifficultyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignDifficultySelect<ExtArgs> | null;
    omit?: Prisma.CampaignDifficultyOmit<ExtArgs> | null;
    include?: Prisma.CampaignDifficultyInclude<ExtArgs> | null;
    where?: Prisma.CampaignDifficultyWhereInput;
    orderBy?: Prisma.CampaignDifficultyOrderByWithRelationInput | Prisma.CampaignDifficultyOrderByWithRelationInput[];
    cursor?: Prisma.CampaignDifficultyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignDifficultyScalarFieldEnum | Prisma.CampaignDifficultyScalarFieldEnum[];
};
export type CampaignDifficultyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignDifficultySelect<ExtArgs> | null;
    omit?: Prisma.CampaignDifficultyOmit<ExtArgs> | null;
    include?: Prisma.CampaignDifficultyInclude<ExtArgs> | null;
    where?: Prisma.CampaignDifficultyWhereInput;
    orderBy?: Prisma.CampaignDifficultyOrderByWithRelationInput | Prisma.CampaignDifficultyOrderByWithRelationInput[];
    cursor?: Prisma.CampaignDifficultyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignDifficultyScalarFieldEnum | Prisma.CampaignDifficultyScalarFieldEnum[];
};
export type CampaignDifficultyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignDifficultySelect<ExtArgs> | null;
    omit?: Prisma.CampaignDifficultyOmit<ExtArgs> | null;
    include?: Prisma.CampaignDifficultyInclude<ExtArgs> | null;
    where?: Prisma.CampaignDifficultyWhereInput;
    orderBy?: Prisma.CampaignDifficultyOrderByWithRelationInput | Prisma.CampaignDifficultyOrderByWithRelationInput[];
    cursor?: Prisma.CampaignDifficultyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignDifficultyScalarFieldEnum | Prisma.CampaignDifficultyScalarFieldEnum[];
};
export type CampaignDifficultyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignDifficultySelect<ExtArgs> | null;
    omit?: Prisma.CampaignDifficultyOmit<ExtArgs> | null;
    include?: Prisma.CampaignDifficultyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignDifficultyCreateInput, Prisma.CampaignDifficultyUncheckedCreateInput>;
};
export type CampaignDifficultyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CampaignDifficultyCreateManyInput | Prisma.CampaignDifficultyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CampaignDifficultyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignDifficultySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CampaignDifficultyOmit<ExtArgs> | null;
    data: Prisma.CampaignDifficultyCreateManyInput | Prisma.CampaignDifficultyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CampaignDifficultyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignDifficultySelect<ExtArgs> | null;
    omit?: Prisma.CampaignDifficultyOmit<ExtArgs> | null;
    include?: Prisma.CampaignDifficultyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignDifficultyUpdateInput, Prisma.CampaignDifficultyUncheckedUpdateInput>;
    where: Prisma.CampaignDifficultyWhereUniqueInput;
};
export type CampaignDifficultyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CampaignDifficultyUpdateManyMutationInput, Prisma.CampaignDifficultyUncheckedUpdateManyInput>;
    where?: Prisma.CampaignDifficultyWhereInput;
    limit?: number;
};
export type CampaignDifficultyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignDifficultySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CampaignDifficultyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignDifficultyUpdateManyMutationInput, Prisma.CampaignDifficultyUncheckedUpdateManyInput>;
    where?: Prisma.CampaignDifficultyWhereInput;
    limit?: number;
};
export type CampaignDifficultyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignDifficultySelect<ExtArgs> | null;
    omit?: Prisma.CampaignDifficultyOmit<ExtArgs> | null;
    include?: Prisma.CampaignDifficultyInclude<ExtArgs> | null;
    where: Prisma.CampaignDifficultyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignDifficultyCreateInput, Prisma.CampaignDifficultyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CampaignDifficultyUpdateInput, Prisma.CampaignDifficultyUncheckedUpdateInput>;
};
export type CampaignDifficultyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignDifficultySelect<ExtArgs> | null;
    omit?: Prisma.CampaignDifficultyOmit<ExtArgs> | null;
    include?: Prisma.CampaignDifficultyInclude<ExtArgs> | null;
    where: Prisma.CampaignDifficultyWhereUniqueInput;
};
export type CampaignDifficultyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignDifficultyWhereInput;
    limit?: number;
};
export type CampaignDifficulty$campaignsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CampaignDifficultyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignDifficultySelect<ExtArgs> | null;
    omit?: Prisma.CampaignDifficultyOmit<ExtArgs> | null;
    include?: Prisma.CampaignDifficultyInclude<ExtArgs> | null;
};
export {};
