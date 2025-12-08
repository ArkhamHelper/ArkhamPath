/*
  Warnings:

  - The primary key for the `CampaignDifficulty` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `CampaignDifficulty` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `difficultyId` on the `Campaign` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Campaign" DROP CONSTRAINT "Campaign_difficultyId_fkey";

-- AlterTable
ALTER TABLE "Campaign" DROP COLUMN "difficultyId",
ADD COLUMN     "difficultyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CampaignDifficulty" DROP CONSTRAINT "CampaignDifficulty_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "CampaignDifficulty_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_difficultyId_fkey" FOREIGN KEY ("difficultyId") REFERENCES "CampaignDifficulty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
