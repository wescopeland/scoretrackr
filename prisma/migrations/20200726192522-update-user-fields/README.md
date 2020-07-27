# Migration `20200726192522-update-user-fields`

This migration has been generated at 7/26/2020, 7:25:22 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE UNIQUE INDEX "User.email" ON "public"."User"("email")

CREATE UNIQUE INDEX "User.username" ON "public"."User"("username")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200726190839-add-user-auth-models..20200726192522-update-user-fields
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
@@ -43,10 +43,10 @@
 model User {
   id                String   @id @default(uuid())
   createdAt         DateTime @default(now())
   updatedAt         DateTime @default(now())
-  email             String
-  username          String
+  email             String   @unique
+  username          String   @unique
   password          String
   role              Role     @default(USER)
   isEmailVerified   Boolean  @default(false)
   verificationToken String
```
