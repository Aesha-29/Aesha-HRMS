import { PrismaClient } from '../../prisma/generated/client';

const prisma = new PrismaClient({
  log: ["error", "warn"],
});

export default prisma;