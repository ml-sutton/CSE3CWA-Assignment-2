import { PrismaClient } from '../generated/prisma/client';

// Use globalThis to handle hot-reloading in development
declare global {
  var Prisma: PrismaClient | undefined;
}

export const Prisma = global.Prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.Prisma = Prisma; // Store Prisma client globally only in development mode
}
