import { PrismaClient } from '@prisma/client';
import { RenterApplicationStatusType } from '@prisma/client';

const prisma = new PrismaClient();

export const seed = async () => {
    const transaction = [];
    const createRenterApp1 = prisma.renterApplication.create({
        data: {
            createdAt: new Date(),
            renter: {
                connect: {
                    id: 1,
                },
            },
            form: {
                create: {
                    offeringPrice: 300,
                    offeringDuration: 5,
                },
            },
            renterApplicationStatuses: {
                create: {
                    status: RenterApplicationStatusType.APPLIED,
                    updatedAt: new Date(),
                },
            },
            item: {
                connect: {
                    id: 1,
                },
            },
        },
    });
    transaction.push(createRenterApp1);

    const createRenterApp2 = prisma.renterApplication.create({
        data: {
            createdAt: new Date(),
            renter: {
                connect: {
                    id: 1,
                },
            },
            form: {
                create: {
                    offeringPrice: 20.99,
                    offeringDuration: 10,
                },
            },
            renterApplicationStatuses: {
                create: {
                    status: RenterApplicationStatusType.APPLIED,
                    updatedAt: new Date(),
                },
            },
            item: {
                connect: {
                    id: 2,
                },
            },
        },
    });
    transaction.push(createRenterApp2);

    const createRenterApp3 = prisma.renterApplication.create({
        data: {
            createdAt: new Date(),
            renter: {
                connect: {
                    id: 2,
                },
            },
            form: {
                create: {
                    offeringPrice: 50.99,
                    offeringDuration: 5,
                },
            },
            renterApplicationStatuses: {
                create: [
                    {
                        status: RenterApplicationStatusType.APPLIED,
                        updatedAt: new Date(),
                    },
                    {
                        status: RenterApplicationStatusType.ACCEPTED,
                        updatedAt: new Date(),
                    },
                    {
                        status: RenterApplicationStatusType.DELIVERED,
                        updatedAt: new Date(),
                    },
                ],
            },
            item: {
                connect: {
                    id: 1,
                },
            },
        },
    });
    transaction.push(createRenterApp3);

    const createRenterApp4 = prisma.renterApplication.create({
        data: {
            createdAt: new Date(),
            renter: {
                connect: {
                    id: 3,
                },
            },
            form: {
                create: {
                    offeringPrice: 21.00,
                    offeringDuration: 30,
                },
            },
            renterApplicationStatuses: {
                create: [
                    {
                        status: RenterApplicationStatusType.APPLIED,
                        updatedAt: new Date(),
                    },
                    {
                        status: RenterApplicationStatusType.DECLINED,
                        updatedAt: new Date(),
                    }
                ],
            },
            item: {
                connect: {
                    id: 1,
                },
            },
        },
    });
    transaction.push(createRenterApp4);

    const createRenterApp5 = prisma.renterApplication.create({
        data: {
            createdAt: new Date(),
            renter: {
                connect: {
                    id: 4,
                },
            },
            form: {
                create: {
                    offeringPrice: 22.00,
                    offeringDuration: 20,
                },
            },
            renterApplicationStatuses: {
                create: [
                    {
                        status: RenterApplicationStatusType.APPLIED,
                        updatedAt: new Date(),
                    },
                ],
            },
            item: {
                connect: {
                    id: 1,
                },
            },
        },
    });
    transaction.push(createRenterApp5);

    const createRenterApp6 = prisma.renterApplication.create({
        data: {
            createdAt: new Date(),
            renter: {
                connect: {
                    id: 5,
                },
            },
            form: {
                create: {
                    offeringPrice: 40.00,
                    offeringDuration: 12,
                },
            },
            renterApplicationStatuses: {
                create: [
                    {
                        status: RenterApplicationStatusType.APPLIED,
                        updatedAt: new Date(),
                    },
                    {
                        status: RenterApplicationStatusType.ACCEPTED,
                        updatedAt: new Date(),
                    },
                ],
            },
            item: {
                connect: {
                    id: 1,
                },
            },
        },
    });
    transaction.push(createRenterApp6);

    const createRenterApp7 = prisma.renterApplication.create({
        data: {
            createdAt: new Date(),
            renter: {
                connect: {
                    id: 6,
                },
            },
            form: {
                create: {
                    offeringPrice: 42.00,
                    offeringDuration: 22,
                },
            },
            renterApplicationStatuses: {
                create: [
                    {
                        status: RenterApplicationStatusType.APPLIED,
                        updatedAt: new Date(),
                    },
                    {
                        status: RenterApplicationStatusType.ACCEPTED,
                        updatedAt: new Date(),
                    },
                    {
                        status: RenterApplicationStatusType.DELIVERED,
                        updatedAt: new Date(),
                    },
                    {
                        status: RenterApplicationStatusType.RENTED,
                        updatedAt: new Date(),
                    },
                    {
                        status: RenterApplicationStatusType.RETURNED,
                        updatedAt: new Date(),
                    },
                ],
            },
            item: {
                connect: {
                    id: 1,
                },
            },
        },
    });
    transaction.push(createRenterApp7);

    return await prisma.$transaction(transaction);
};
