/*
  Warnings:

  - You are about to drop the `CycleSchema` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CycleSchema" DROP CONSTRAINT "CycleSchema_userId_fkey";

-- DropTable
DROP TABLE "CycleSchema";

-- CreateTable
CREATE TABLE "Path" (
    "dateCreate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateUpdate" TIMESTAMP(3) NOT NULL,
    "data" JSONB NOT NULL,
    "userId" TEXT NOT NULL,
    "cycleCode" TEXT NOT NULL,
    "dateLastFetchArkhamCards" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Path_pkey" PRIMARY KEY ("userId","cycleCode")
);

-- AddForeignKey
ALTER TABLE "Path" ADD CONSTRAINT "Path_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
