# Migration `20200726150647-init-db`

This migration has been generated at 7/26/2020, 3:06:47 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Game" (
"id" text  NOT NULL ,
"name" text  NOT NULL ,
"color" text  NOT NULL ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."Track" (
"id" SERIAL,
"name" text  NOT NULL ,
"friendlyId" text  NOT NULL ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."Score" (
"id" SERIAL,
"finalScore" integer  NOT NULL ,
"playerAlias" text  NOT NULL ,
"platform" text  NOT NULL ,
"submittedAt" timestamp(3)  NOT NULL ,
PRIMARY KEY ("id"))
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200726150647-init-db
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,31 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Game {
+  id    String @id
+  name  String
+  color String
+}
+
+model Track {
+  id         Int    @default(autoincrement()) @id
+  name       String
+  friendlyId String
+}
+
+model Score {
+  id          Int      @default(autoincrement()) @id
+  finalScore  Int
+  playerAlias String
+  platform    String
+  submittedAt DateTime
+}
```
