import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateStockStatusInput } from './dto/create-stockStatus.input';
import { Args, Int } from '@nestjs/graphql';

@Injectable()
export class StockStatusesService {
    constructor(private prisma: PrismaService) { }

    findOneById(@Args('itemId', { type: () => Int }) itemId: number) {
        return this.prisma.stockStatus.findUnique({
            where: {
                id: itemId,
            }
        });
    }

    create(createStockStatusInput: CreateStockStatusInput) {
        const { itemId, ...updatedInput } = createStockStatusInput;

        return this.prisma.item.update({
            where: {
                id: itemId
            },
            data: {
                stockStatus: {
                    create: {
                        ...updatedInput
                    },
                }
            },
        });
    }

    deleteMany(@Args('itemId', { type: () => Int }) itemId: number) {
        // deleteMany to avoid an error when data doesn't exist
        return this.prisma.stockStatus.deleteMany({
            where: {
                id: itemId,
            },
        });        
    }
}