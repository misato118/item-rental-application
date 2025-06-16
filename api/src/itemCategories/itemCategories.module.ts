import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ItemCategoryResolver } from './itemCategory.resolver';

@Module({
    providers: [ItemCategoryResolver, PrismaService],
})
export class ItemCategoriesModule { }