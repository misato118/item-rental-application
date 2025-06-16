import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { ItemCategory } from 'src/itemCategories/models/itemCategory.model';

@InputType()
export class CreateItemInput {
    @Field(() => Int, { nullable: true })
    id: number;
    @Field(() => String, { nullable: true })
    name: string;
    @Field(() => String, { nullable: true })
    description: string;
    @Field(() => ItemCategory, { nullable: true })
    category: ItemCategory;
    @Field(() => Float, { nullable: true })
    fee: number;
    @Field(() => String, { nullable: true })
    feeType: string;
    @Field(() => Int, { nullable: true })
    maxDuration: number;
    @Field(() => String, { nullable: true })
    maxDurationType: string;
    @Field(() => String, { nullable: true })
    imageURL: string;
    @Field(() => Float, { nullable: true })
    deposit: number;
    @Field(() => String)
    company: string;
    @Field(() => Int, { nullable: true })
    totalStock: number;
    @Field(() => Int, { nullable: true })
    currentStock: number;
}