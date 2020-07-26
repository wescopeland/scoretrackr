# Migration `20200726175047-use-uuid`

This migration has been generated at 7/26/2020, 5:50:47 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Score" DROP CONSTRAINT "Score_trackId_fkey"

ALTER TABLE "public"."Score" DROP CONSTRAINT "Score_pkey",
ALTER COLUMN "id" SET DATA TYPE text ,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "trackId" SET DATA TYPE text ,
ADD PRIMARY KEY ("id");;
DROP SEQUENCE "Score_id_seq";

ALTER TABLE "public"."Track" DROP CONSTRAINT "Track_pkey",
ALTER COLUMN "id" SET DATA TYPE text ,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" DROP DEFAULT,
ADD PRIMARY KEY ("id");;
DROP SEQUENCE "Track_id_seq";

ALTER TABLE "public"."Score" ADD FOREIGN KEY ("trackId")REFERENCES "public"."Track"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200726152119-add-initial-relations..20200726175047-use-uuid
--- datamodel.dml
+++ datamodel.dml
@@ -1,44 +1,41 @@
-// This is your Prisma schema file,
-// learn more about it in the docs: https://pris.ly/d/prisma-schema
+generator client {
+  provider = "prisma-client-js"
+}
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
-generator client {
-  provider = "prisma-client-js"
-}
-
 model Game {
-  id     String  @id
-  name   String
-  color  String
-  tracks Track[]
-  scores Score[]
+  id    String  @id
+  name  String
+  color String
+  Score Score[]
+  Track Track[]
 }
-model Track {
-  id         Int      @default(autoincrement()) @id
-  createdAt  DateTime @default(now())
-  updatedAt  DateTime @default(now())
-  name       String
-  friendlyId String
-  scores     Score[]
-  game       Game     @relation(fields: [gameId], references: [id])
-  gameId     String
-}
-
 model Score {
-  id          Int      @default(autoincrement()) @id
-  createdAt   DateTime @default(now())
-  updatedAt   DateTime @default(now())
+  id          String   @id @default(uuid())
   finalScore  Int
   playerAlias String
   platform    String
   submittedAt DateTime
-  game        Game     @relation(fields: [gameId], references: [id])
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @default(now())
   gameId      String
-  track       Track    @relation(fields: [trackId], references: [id])
-  trackId     Int
+  trackId     String
+  Game        Game     @relation(fields: [gameId], references: [id])
+  Track       Track    @relation(fields: [trackId], references: [id])
 }
+
+model Track {
+  id         String   @id @default(uuid())
+  name       String
+  friendlyId String
+  createdAt  DateTime @default(now())
+  updatedAt  DateTime @default(now())
+  gameId     String
+  Game       Game     @relation(fields: [gameId], references: [id])
+  Score      Score[]
+}
```
