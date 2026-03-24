/*
  Warnings:

  - You are about to drop the column `journalNotes` on the `Campaign` table. All the data in the column will be lost.
  - You are about to drop the column `userResults` on the `Campaign` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Campaign" DROP COLUMN "journalNotes",
DROP COLUMN "userResults",
ADD COLUMN     "data" JSONB NOT NULL DEFAULT '{}';
