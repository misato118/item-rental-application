import { Resolver, Args, Query, Mutation, Int } from '@nestjs/graphql';
import { Item } from './models/item.model';
import { ItemsService } from './items.service';
import { CreateItemInput } from './dto/create-item.input';
import { Company } from 'src/companies/models/company.model';
import { FilterItemInput } from './dto/filter-item.input';

@Resolver(() => Item)
export class ItemsResolver {
    constructor(private itemsService: ItemsService) { }

    // Obtain all items
    @Query(() => [Item], { name: 'items' })
    async findAll(
        @Args('filter', {
            nullable: true,
        })
        filter?: FilterItemInput,
    ) {
        return this.itemsService.findAll(filter);
    }

    // Obtain all items by a company name
    @Query(() => Company, { name: 'itemByCompany' })
    async findAllByCompany(
        @Args('companyName', { type: () => String }) companyName: string,
    ) {
        return this.itemsService.findAllByCompany(companyName);
    }

    // Obtain item details
    @Query(() => Item, { name: 'itemInfo', nullable: true })
    async findOneByItemId(@Args('itemId', { type: () => Int }) itemId: number) {
        return this.itemsService.findOneById(itemId);
    }

    // Create a new item (e.g., when saving a new item draft)
    @Mutation(() => Company, { name: 'createItem' })
    async createItem(@Args('createItemInput') createItemInput: CreateItemInput) {
        return this.itemsService.create(createItemInput);
    }

    // Update an item
    @Mutation(() => Item, { name: 'updateItem' })
    async updateItem(@Args('createItemInput') createItemInput: CreateItemInput) {
        if (createItemInput.id) {
            return this.itemsService.update(createItemInput);
        } else {
            return this.itemsService.create(createItemInput);
        }
    }

    // Submit an item for assessment
    @Mutation(() => Item, { name: 'submitItem' })
    async submitItem(@Args('createItemInput') createItemInput: CreateItemInput) {
        let item;
        if (createItemInput.id) { // Modify an item if it exists
            item = await this.itemsService.update(createItemInput);
        } else { // Create a new item
            item = await this.itemsService.create(createItemInput);
        }

        return this.itemsService.submit(item.id);
    }

    // Delete an item
    @Mutation(() => Item, { name: 'deleteItem' })
    async deleteItem(@Args('itemId', { type: () => Int }) itemId: number) {
        return this.itemsService.delete(itemId);
    }

    hasNullFields(createItemInput: CreateItemInput) {
        for (var field in createItemInput) {
            if (field == null) {
                return true;
            }
        }
        return false;
    }
}
