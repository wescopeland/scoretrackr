# Migration `20200726180507-fix-field-names`

This migration has been generated at 7/26/2020, 6:05:07 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200726175047-use-uuid..20200726180507-fix-field-names
--- datamodel.dml
+++ datamodel.dml
@@ -3,17 +3,17 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model Game {
-  id    String  @id
-  name  String
-  color String
-  Score Score[]
-  Track Track[]
+  id     String  @id
+  name   String
+  color  String
+  scores Score[]
+  tracks Track[]
 }
 model Score {
   id          String   @id @default(uuid())
@@ -24,10 +24,10 @@
   createdAt   DateTime @default(now())
   updatedAt   DateTime @default(now())
   gameId      String
   trackId     String
-  Game        Game     @relation(fields: [gameId], references: [id])
-  Track       Track    @relation(fields: [trackId], references: [id])
+  game        Game     @relation(fields: [gameId], references: [id])
+  track       Track    @relation(fields: [trackId], references: [id])
 }
 model Track {
   id         String   @id @default(uuid())
@@ -35,7 +35,7 @@
   friendlyId String
   createdAt  DateTime @default(now())
   updatedAt  DateTime @default(now())
   gameId     String
-  Game       Game     @relation(fields: [gameId], references: [id])
-  Score      Score[]
+  game       Game     @relation(fields: [gameId], references: [id])
+  scores     Score[]
 }
```
