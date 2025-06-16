import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Company } from 'src/companies/models/company.model';
import { ItemCategory } from 'src/itemCategories/models/itemCategory.model';
import { Review } from 'src/reviews/models/review.model';
import { StockStatus } from 'src/stockStatuses/models/stockStatus.model';
import { OwnerApplication } from 'src/ownerApplications/models/ownerApplication.model';
import { RenterApplication } from 'src/renterApplications/models/renterApplication.model';
//import { Conversation } from 'src/conversations/models/conversation.model';

@ObjectType()
export class Item {
    @Field(type => Int)
    id: number;

    @Field(type => String, { nullable: true })
    name: string;

    @Field(type => String, { nullable: true })
    description: string;

    @Field(type => Date)
    createdAt: Date;

    @Field(type => Date)
    updatedAt: Date;

    @Field(type => ItemCategory, { nullable: true })
    category: ItemCategory;

    @Field(type => Float, { nullable: true })
    fee: number;

    @Field(type => String, { nullable: true })
    feeType: string;

    @Field(type => Int, { nullable: true })
    maxDuration: number;

    @Field(type => String, { nullable: true })
    maxDurationType: string;

    @Field({ nullable: true })
    imageURL?: string;

    @Field(type => Int, { nullable: true })
    deposit: number;

    //@Field(type => Decimal, { nullable: true })
    //overallReview?: number;

    @Field(type => Company)
    company: Company;

    @Field(type => Int)
    companyId: number;

    @Field(type => [Review], { nullable: true })
    reviews: Review[];

    @Field(type => OwnerApplication)
    ownerApplication: OwnerApplication;

    @Field(type => StockStatus, { nullable: true })
    stockStatus: StockStatus;

    //@Field(type => Conversation)
    //conversations: Conversation;

    @Field(type => [RenterApplication], { nullable: true })
    renterApplications: RenterApplication[];
}