# Migration `20200726190839-add-user-auth-models`

This migration has been generated at 7/26/2020, 7:08:39 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "Role" AS ENUM ('USER', 'GLOBAL_MODERATOR', 'ADMINISTRATOR');

CREATE TABLE "public"."User" (
"id" text  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"email" text  NOT NULL ,
"username" text  NOT NULL ,
"password" text  NOT NULL ,
"role" "Role" NOT NULL DEFAULT E'USER',
"isEmailVerified" boolean  NOT NULL DEFAULT false,
"verificationToken" text  NOT NULL ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."ResetPasswordToken" (
"id" text  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"expiresAt" timestamp(3)  NOT NULL ,
"token" text  NOT NULL ,
PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "ResetPasswordToken.token" ON "public"."ResetPasswordToken"("token")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200726180507-fix-field-names..20200726190839-add-user-auth-models
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model Game {
   id     String  @id
@@ -16,26 +16,51 @@
 }
 model Score {
   id          String   @id @default(uuid())
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @default(now())
   finalScore  Int
   playerAlias String
   platform    String
   submittedAt DateTime
-  createdAt   DateTime @default(now())
-  updatedAt   DateTime @default(now())
   gameId      String
   trackId     String
   game        Game     @relation(fields: [gameId], references: [id])
   track       Track    @relation(fields: [trackId], references: [id])
 }
 model Track {
   id         String   @id @default(uuid())
+  createdAt  DateTime @default(now())
+  updatedAt  DateTime @default(now())
   name       String
   friendlyId String
-  createdAt  DateTime @default(now())
-  updatedAt  DateTime @default(now())
   gameId     String
   game       Game     @relation(fields: [gameId], references: [id])
   scores     Score[]
 }
+
+model User {
+  id                String   @id @default(uuid())
+  createdAt         DateTime @default(now())
+  updatedAt         DateTime @default(now())
+  email             String
+  username          String
+  password          String
+  role              Role     @default(USER)
+  isEmailVerified   Boolean  @default(false)
+  verificationToken String
+}
+
+model ResetPasswordToken {
+  id        String   @id @default(uuid())
+  createdAt DateTime @default(now())
+  expiresAt DateTime
+  token     String   @unique
+}
+
+enum Role {
+  USER
+  GLOBAL_MODERATOR
+  ADMINISTRATOR
+}
```
