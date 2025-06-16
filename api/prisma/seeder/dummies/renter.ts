import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seed = async () => {
    const transaction = [];
    const createRenter1 = prisma.renter.create({
        data: {
            username: 'isaacwilliams12345',
            firstName: 'Isaac',
            lastName: 'Williams',
            birthDate: new Date('1899-08-11'),
            email: 'isaacwilliams@noemail.invalid',
            createdAt: new Date(),
            updatedAt: new Date(),
            imageURL: 'https://www.test-image.com',
            password: '1'
        },
    });
    transaction.push(createRenter1);

    const createRenter2 = prisma.renter.create({
        data: {
            username: 'benjaminpeterson12345',
            firstName: 'Benjamin',
            lastName: 'Peterson',
            birthDate: new Date('2008-12-12'),
            email: 'benjaminpeterson@noemail.invalid',
            createdAt: new Date(),
            updatedAt: new Date(),
            imageURL: 'https://www.test-image.com',
            password: '1'
        },
    });
    transaction.push(createRenter2);

    const createRenter3 = prisma.renter.create({
        data: {
            username: 'cooperdiaz12345',
            firstName: 'Cooper',
            lastName: 'Diaz',
            birthDate: new Date('1998-03-30'),
            email: 'cooperdiaz@noemail.invalid',
            createdAt: new Date(),
            updatedAt: new Date(),
            imageURL: 'https://www.test-image.com',
            password: '1'
        },
    });
    transaction.push(createRenter3);

    const createRenter4 = prisma.renter.create({
        data: {
            username: 'elenaparker12345',
            firstName: 'Elena',
            lastName: 'Parker',
            birthDate: new Date('2001-12-25'),
            email: 'elenaparker@noemail.invalid',
            createdAt: new Date(),
            updatedAt: new Date(),
            imageURL: 'https://www.test-image.com',
            password: '1'
        },
    });
    transaction.push(createRenter4);

    const createRenter5 = prisma.renter.create({
        data: {
            username: 'marcusrivera12345',
            firstName: 'Marcus',
            lastName: 'Rivera',
            birthDate: new Date('1978-11-01'),
            email: 'marcusrivera@noemail.invalid',
            createdAt: new Date(),
            updatedAt: new Date(),
            imageURL: 'https://www.test-image.com',
            password: '1'
        },
    });
    transaction.push(createRenter5);

    const createRenter6 = prisma.renter.create({
        data: {
            username: 'talianguyen12345',
            firstName: 'Talia',
            lastName: 'Nguyen',
            birthDate: new Date('1999-06-15'),
            email: 'talianguyen@noemail.invalid',
            createdAt: new Date(),
            updatedAt: new Date(),
            imageURL: 'https://www.test-image.com',
            password: '1'
        },
    });
    transaction.push(createRenter6);
    return await prisma.$transaction(transaction);
};
