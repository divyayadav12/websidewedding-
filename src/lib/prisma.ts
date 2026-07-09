import { PrismaClient } from "@prisma/client";
import { createClient } from "@libsql/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const dbUrl = process.env.DATABASE_URL && process.env.DATABASE_URL !== "undefined"
  ? process.env.DATABASE_URL
  : "file:./dev.db";

const libsql = createClient({
  url: dbUrl,
});
const adapter = new PrismaLibSql(libsql);

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
