import { PrismaClient } from '@prisma/client';
import { seed as employeeSeeding } from './dummies/employee';
import { seed as companySeeding } from './dummies/company';
import { seed as itemSeeding } from './dummies/item';
import { seed as reviewSeeding } from './dummies/review';
import { seed as renterSeeding } from './dummies/renter';
import { seed as renterApplicationSeeding } from './dummies/renterApplication';

const prisma = new PrismaClient();

const main = async () => {
    console.log(`Start seeding ...`);

    await companySeeding();
    await employeeSeeding();
    await itemSeeding();
    await reviewSeeding();
    await renterSeeding();
    await renterApplicationSeeding();

    console.log(`Seeding finished.`);
};

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
