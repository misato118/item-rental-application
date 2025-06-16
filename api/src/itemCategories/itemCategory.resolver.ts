import { Query, Resolver } from '@nestjs/graphql';
import { ItemCategory } from './models/itemCategory.model';

@Resolver()
export class ItemCategoryResolver {
    @Query(() => [ItemCategory], { name: 'itemCategories' })
    getItemCategories(): ItemCategory[] {
        return Object.values(ItemCategory);
    }
}