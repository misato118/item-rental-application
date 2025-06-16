import { Resolver, Args, Query, Mutation, Int } from '@nestjs/graphql';
import { StockStatus } from './models/stockStatus.model';
import { StockStatusesService } from './stockStatuses.service';
import { Item } from 'src/items/models/item.model';
import { CreateStockStatusInput } from './dto/create-stockStatus.input';

@Resolver(() => StockStatus)
export class StockStatusesResolver {
    constructor(
        private stockStatusesService: StockStatusesService,
    ) { }

    @Query(() => StockStatus, { name: 'stockStatus' })
    async findStockStatus(@Args('itemId', { type: () => Int }) itemId: number) {
        return this.stockStatusesService.findOneById(itemId);
    }

    @Mutation(() => Item, { name: 'createStockStatus' })
    createStockStatus(@Args('createStockStatusInput') createStockStatusInput: CreateStockStatusInput) {
        return this.stockStatusesService.create(createStockStatusInput);
    }

    @Mutation(() => Int, { name: 'deleteStockStatuses' })
    async deleteStockStatuses(@Args('itemId', { type: () => Int }) itemId: number) {
        const result = await this.stockStatusesService.deleteMany(itemId);
        return result.count;
    }
}