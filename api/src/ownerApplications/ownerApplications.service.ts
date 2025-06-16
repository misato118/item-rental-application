import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Args, Int } from '@nestjs/graphql';
import { ApplicationStatus } from 'src/applicationStatus/models/applicationStatus.model';

@Injectable()
export class OwnerApplicationsService {
    constructor(private prisma: PrismaService) { }

    // Find an owner application for an item
    findOneById(@Args('itemId', { type: () => Int }) itemId: number) {
        return this.prisma.item.findUnique({
            where: {
                id: itemId,
            }
        });
    }

    // Update an owner application status
    updateStatus(@Args('applicationId', { type: () => Int }) applicationId: number, @Args('newStatus', { type: () => ApplicationStatus }) newStatus: ApplicationStatus) {
        return this.prisma.ownerApplication.update({
            where: {
                id: applicationId,
            },
            data: {
                status: newStatus,
                updatedAt: new Date()
            }
        });
    }

    deleteMany(@Args('itemId', { type: () => Int }) itemId: number) {
        // deleteMany to avoid an error when data doesn't exist
        return this.prisma.ownerApplication.deleteMany({
            where: {
                id: itemId,
            },
        });
    }
}