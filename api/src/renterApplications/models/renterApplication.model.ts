import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Form } from 'src/forms/models/form.model';
import { Item } from 'src/items/models/item.model';
import { RenterApplicationStatus } from 'src/renterApplicationStatuses/models/renterApplicationStatus.model';
import { Renter } from 'src/renters/models/renter.model';

@ObjectType()
export class RenterApplication {
    @Field(type => Int)
    id: number;

    @Field(type => Date)
    createdAt: Date;

    @Field(type => Renter)
    renter: Renter;

    @Field(type => Int)
    renterId: number;

    @Field(type => Form, { nullable: true })
    form: Form;

    @Field(type => Int)
    formId: number;

    @Field(type => [RenterApplicationStatus], { nullable: true })
    renterApplicationStatuses: RenterApplicationStatus[];

    @Field(type => Item, { nullable: true })
    item: Item;

    @Field(type => Int)
    itemId: number;
}