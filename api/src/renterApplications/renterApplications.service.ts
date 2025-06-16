import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateFormInput } from 'src/forms/dto/create-form.input';
import { RenterApplicationStatusType } from 'src/renterApplicationStatusTypes/models/renterApplicationStatusType.model';
import { Args, Int } from '@nestjs/graphql';
import { FindApplicationInput } from './dto/find-application.input';
import { ChangeRenterAppStatusInput } from './dto/change-renter-app-status.input';

@Injectable()
export class RenterApplicationsService {
    constructor(private prisma: PrismaService) { }

    // Obtains renter applications
    findAll() {
        return this.prisma.renterApplication.findMany();
    }

    // Creates a new renter application
    create(createFormInput: CreateFormInput) {
        const { renterId, itemId, ...updatedInput } = createFormInput;

        // When a renter or item id is not provided
        if (renterId == null || itemId == null) {
            return null;
        }

        return this.prisma.renterApplication.create({
            data: {
                createdAt: new Date(),
                renter: {
                    connect: {
                        id: renterId
                    }
                },
                form: {
                    create: {
                        ...updatedInput
                    }
                },
                renterApplicationStatuses: {
                    create: {
                        status: RenterApplicationStatusType.APPLIED,
                        updatedAt: new Date()
                    }
                },
                item: {
                    connect: {
                        id: itemId
                    }
                }
            },
            include: {
                form: true,
                item: true,
                renter: true,
                renterApplicationStatuses: true,
            }
        });
    }

    // Find a renter application applied by a renter
    findOneByRenterId(findApplicationInput: FindApplicationInput) {
        return this.prisma.renterApplication.findMany({
            where: {
                renterId: findApplicationInput.renterId,
                itemId: findApplicationInput.renterApplicationId
            },
            include: {
                renterApplicationStatuses: true
            }
        });
    }

    deleteMany(@Args('itemId', { type: () => Int }) itemId: number) {
        // deleteMany to avoid an error when data doesn't exist
        return this.prisma.renterApplication.deleteMany({
            where: {
                id: itemId,
            },
        });
    }

    changeRenterAppStatus(changeRenterAppStatusInput: ChangeRenterAppStatusInput) {
        return this.prisma.renterApplication.update({
            where: {
                id: changeRenterAppStatusInput.id
            },
            data: {
                renterApplicationStatuses: {
                    create: {
                        status: changeRenterAppStatusInput.status,
                        updatedAt: new Date()
                    }
                }
            }
        });
    }

    async saveAllRenterAppStatuses(appStatusArr: ChangeRenterAppStatusInput[]): Promise<boolean> {
        for (const change of appStatusArr) {
            await this.changeRenterAppStatus(change);
        }
        return true;
    }

    /*
    findOneById(@Args('applicationId', { type: () => Int }) applicationId: number) {
      return this.prisma.renterApplication.findUnique({
          where: {
              id: applicationId,
          },
          include: {
              renter: true,
              form: true,
              renterApplicationStatuses: true,
              item: true
          }
      })
    }
      */
}