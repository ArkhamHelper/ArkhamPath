-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL,
    "dateCreate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateUpdate" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "userResults" JSONB NOT NULL,
    "journalNotes" TEXT[],
    "userId" TEXT NOT NULL,
    "difficultyId" TEXT NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampaignDifficulty" (
    "id" TEXT NOT NULL,
    "dateCreate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateUpdate" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CampaignDifficulty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CycleSchema" (
    "dateCreate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateUpdate" TIMESTAMP(3) NOT NULL,
    "data" JSONB NOT NULL,
    "code" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "dateLastFetchArkhamCards" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CycleSchema_pkey" PRIMARY KEY ("userId","code")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "dateCreate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateUpdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_difficultyId_fkey" FOREIGN KEY ("difficultyId") REFERENCES "CampaignDifficulty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CycleSchema" ADD CONSTRAINT "CycleSchema_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
