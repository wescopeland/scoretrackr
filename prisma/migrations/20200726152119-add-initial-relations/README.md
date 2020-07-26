# Migration `20200726152119-add-initial-relations`

This migration has been generated at 7/26/2020, 3:21:19 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Score" ADD COLUMN "createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "updatedAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "gameId" text  NOT NULL ,
ADD COLUMN "trackId" integer  NOT NULL ;

ALTER TABLE "public"."Track" ADD COLUMN "createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "updatedAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "gameId" text  NOT NULL ;

ALTER TABLE "public"."Score" ADD FOREIGN KEY ("gameId")REFERENCES "public"."Game"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Score" ADD FOREIGN KEY ("trackId")REFERENCES "public"."Track"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Track" ADD FOREIGN KEY ("gameId")REFERENCES "public"."Game"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200726150647-init-db..20200726152119-add-initial-relations
--- datamodel.dml
+++ datamodel.dml
@@ -2,30 +2,43 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 model Game {
-  id    String @id
-  name  String
-  color String
+  id     String  @id
+  name   String
+  color  String
+  tracks Track[]
+  scores Score[]
 }
 model Track {
-  id         Int    @default(autoincrement()) @id
+  id         Int      @default(autoincrement()) @id
+  createdAt  DateTime @default(now())
+  updatedAt  DateTime @default(now())
   name       String
   friendlyId String
+  scores     Score[]
+  game       Game     @relation(fields: [gameId], references: [id])
+  gameId     String
 }
 model Score {
   id          Int      @default(autoincrement()) @id
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @default(now())
   finalScore  Int
   playerAlias String
   platform    String
   submittedAt DateTime
+  game        Game     @relation(fields: [gameId], references: [id])
+  gameId      String
+  track       Track    @relation(fields: [trackId], references: [id])
+  trackId     Int
 }
```
