import { ItemCategory, ApplicationStatus, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seed = async () => {
    const transaction = [];

    // Create an item, guitar
    const createGuitar = prisma.item.create({
        data: {
            name: 'Nice Guitar',
            description: 'This is a very expensive guitar.',
            createdAt: new Date(),
            updatedAt: new Date(),
            category: ItemCategory.MUSIC,
            fee: 50.99,
            feeType: 'daily',
            maxDuration: 30,
            maxDurationType: 'days',
            imageURL: 'https://www.test-image.com',
            deposit: 300.0,
            companyId: 1,
            ownerApplication: {
                create: {
                    status: ApplicationStatus.PUBLISHED,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            },
            stockStatus: {
                create: {
                    totalStock: 300,
                    currentStock: 300,
                },
            },
        },
    });
    transaction.push(createGuitar);

    // Connect an item to a company
    const updateCompanyGuitar = prisma.company.update({
        where: {
            id: 1,
        },
        data: {
            items: {
                connect: {
                    id: 1,
                },
            },
        },
    });
    transaction.push(updateCompanyGuitar);

    // Create an item, chair
    const createChair = prisma.item.create({
        data: {
            name: 'Very Fancy Chair',
            description: 'This chair is extremely fancy.',
            createdAt: new Date(),
            updatedAt: new Date(),
            category: ItemCategory.FURNITURE,
            fee: 300.0,
            feeType: 'monthly',
            maxDuration: 2,
            maxDurationType: 'years',
            imageURL: 'https://www.test-image.com',
            deposit: 400.0,
            companyId: 1,
            ownerApplication: {
                create: {
                    status: ApplicationStatus.PUBLISHED,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            },
            stockStatus: {
                create: {
                    totalStock: 500,
                    currentStock: 500,
                },
            },
        },
    });
    transaction.push(createChair);

    // Connect an item to a company
    const updateCompanyChair = prisma.company.update({
        where: {
            id: 1,
        },
        data: {
            items: {
                connect: {
                    id: 2,
                },
            },
        },
    });
    transaction.push(updateCompanyChair);

    // Create an item, piano
    const createPiano = prisma.item.create({
        data: {
            name: 'Fansy Piano',
            description: 'This is a piano.',
            createdAt: new Date(),
            updatedAt: new Date(),
            category: ItemCategory.MUSIC,
            fee: 950.99,
            feeType: 'yearly',
            maxDuration: 5,
            maxDurationType: 'years',
            imageURL: 'https://www.test-image.com',
            deposit: 1000.0,
            companyId: 2,
            ownerApplication: {
                create: {
                    status: ApplicationStatus.PUBLISHED,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            },
            stockStatus: {
                create: {
                    totalStock: 400,
                    currentStock: 400,
                },
            },
        },
    });
    transaction.push(createPiano);

    // Connect an item to a company
    const updateCompanyPiano = prisma.company.update({
        where: {
            id: 2,
        },
        data: {
            items: {
                connect: {
                    id: 3,
                },
            },
        },
    });
    transaction.push(updateCompanyPiano);

    // Create an item, hammer
    const createHammer = prisma.item.create({
        data: {
            name: 'Strong Hammer',
            description: "This is a hammer that doesn't break.",
            createdAt: new Date(),
            updatedAt: new Date(),
            category: ItemCategory.TOOL,
            fee: 250.0,
            feeType: 'daily',
            maxDuration: 60,
            maxDurationType: 'days',
            imageURL: 'https://www.test-image.com',
            deposit: 100.0,
            companyId: 2,
            ownerApplication: {
                create: {
                    status: ApplicationStatus.PUBLISHED,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            },
            stockStatus: {
                create: {
                    totalStock: 100,
                    currentStock: 100,
                },
            },
        },
    });
    transaction.push(createHammer);

    // Connect an item to a company
    const updateCompanyHammer = prisma.company.update({
        where: {
            id: 2,
        },
        data: {
            items: {
                connect: {
                    id: 4,
                },
            },
        },
    });
    transaction.push(updateCompanyHammer);

    // Create an item, wrench
    const createWrench = prisma.item.create({
        data: {
            name: 'Wrench',
            description: 'This is a wrench.',
            createdAt: new Date(),
            updatedAt: new Date(),
            category: ItemCategory.TOOL,
            fee: 10.0,
            feeType: 'daily',
            maxDuration: 60,
            maxDurationType: 'days',
            imageURL: 'https://www.test-image.com',
            deposit: 1.0,
            companyId: 2,
            ownerApplication: {
                create: {
                    status: ApplicationStatus.PENDING,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            },
            stockStatus: {
                create: {
                    totalStock: 50,
                    currentStock: 50,
                },
            },
        },
    });
    transaction.push(createWrench);

    // Connect an item to a company
    const updateCompanyWrench = prisma.company.update({
        where: {
            id: 2,
        },
        data: {
            items: {
                connect: {
                    id: 5,
                },
            },
        },
    });
    transaction.push(updateCompanyWrench);

    // Create an item, drill
    const createDrill = prisma.item.create({
        data: {
            name: 'Powerful Drill',
            description: 'This is a very powerful drill.',
            createdAt: new Date(),
            updatedAt: new Date(),
            category: ItemCategory.TOOL,
            fee: 500.0,
            feeType: 'monthly',
            maxDuration: 3,
            maxDurationType: 'months',
            imageURL: 'https://www.test-image.com',
            deposit: 300.0,
            companyId: 2,
            ownerApplication: {
                create: {
                    status: ApplicationStatus.PUBLISHED,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            },
            stockStatus: {
                create: {
                    totalStock: 3,
                    currentStock: 3,
                },
            },
        },
    });
    transaction.push(createDrill);

    // Connect an item to a company
    const updateCompanyDrill = prisma.company.update({
        where: {
            id: 2,
        },
        data: {
            items: {
                connect: {
                    id: 6,
                },
            },
        },
    });
    transaction.push(updateCompanyDrill);

    // Create an item, couch
    const createCouch = prisma.item.create({
        data: {
            name: 'Comfy Couch',
            description: 'This is a couch.',
            createdAt: new Date(),
            updatedAt: new Date(),
            category: ItemCategory.FURNITURE,
            fee: 500.0,
            feeType: 'monthly',
            maxDuration: 3,
            maxDurationType: 'months',
            imageURL: 'https://www.test-image.com',
            deposit: 300.0,
            companyId: 2,
            ownerApplication: {
                create: {
                    status: ApplicationStatus.PENDING,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            },
            stockStatus: {
                create: {
                    totalStock: 7,
                    currentStock: 7,
                },
            },
        },
    });
    transaction.push(createCouch);

    // Connect an item to a company
    const updateCompanyCouch = prisma.company.update({
        where: {
            id: 2,
        },
        data: {
            items: {
                connect: {
                    id: 7,
                },
            },
        },
    });
    transaction.push(updateCompanyCouch);

    return await prisma.$transaction(transaction);
};