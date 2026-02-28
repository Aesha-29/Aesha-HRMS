import { PrismaClient } from '../generated/client';

const prisma = new PrismaClient({
  log: ["error", "warn"],
});

export default prisma;