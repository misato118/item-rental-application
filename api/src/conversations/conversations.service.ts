import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Args, Int } from '@nestjs/graphql';

@Injectable()
export class ConversationsService {
    constructor(private prisma: PrismaService) { }

    deleteMany(@Args('itemId', { type: () => Int }) itemId: number) {
        // deleteMany to avoid an error when data doesn't exist
        return this.prisma.conversation.deleteMany({
            where: {
                id: itemId,
            },
        });
    }
}