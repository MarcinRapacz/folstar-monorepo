-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Media" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "assetId" TEXT,
    "height" TEXT NOT NULL,
    "originalFilename" TEXT NOT NULL,
    "thumbnailUrl" TEXT,
    "url" TEXT,
    "width" TEXT NOT NULL
);
INSERT INTO "new_Media" ("assetId", "height", "id", "originalFilename", "thumbnailUrl", "url", "width") SELECT "assetId", "height", "id", "originalFilename", "thumbnailUrl", "url", "width" FROM "Media";
DROP TABLE "Media";
ALTER TABLE "new_Media" RENAME TO "Media";
CREATE TABLE "new_Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "mediaId" TEXT,
    CONSTRAINT "Category_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Category" ("description", "id", "mediaId", "name") SELECT "description", "id", "mediaId", "name" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE INDEX "Category_mediaId_idx" ON "Category"("mediaId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
