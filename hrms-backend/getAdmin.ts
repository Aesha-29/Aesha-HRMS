import { PrismaClient } from './src/generated/client';

const prisma = new PrismaClient();

async function main() {
    console.log("Employees:");
    const emp = await prisma.employee.findFirst({
        select: { email: true, personalEmail: true, employeeId: true }
    });
    console.log(emp);

    console.log("Managers:");
    const mgr = await prisma.manager.findFirst({
        select: { email: true }
    });
    console.log(mgr);
}

main().finally(() => prisma.$disconnect());
