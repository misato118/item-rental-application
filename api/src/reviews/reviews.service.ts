import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateReviewInput } from './dto/create-review.input';
import { Args, Int } from '@nestjs/graphql';

@Injectable()
export class ReviewsService {
    constructor(private prisma: PrismaService) { }

    findAll() {
        return this.prisma.review.findMany();
    }

    create(createReviewInput: CreateReviewInput) {
        const { itemId, ...updatedInput } = createReviewInput;

        return this.prisma.item.update({
            where: {
                id: itemId
            },
            data: {
                reviews: {
                    create: {
                        ...updatedInput,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                }
            },
            select: {
                reviews: true,
            }
        });
    }

    deleteMany(@Args('itemId', { type: () => Int }) itemId: number) {
        // deleteMany to avoid an error when data doesn't exist
        return this.prisma.review.deleteMany({
            where: {
                id: itemId,
            },
        });
    }
}