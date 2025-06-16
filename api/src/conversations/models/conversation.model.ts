import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Item } from 'src/items/models/item.model';
//import { Item } from 'src/items/models/item.model';

@ObjectType()
export class Conversation {
    @Field(type => Int)
    id: number;

    //@Field(type => [Question])
    //questions: Questions[];

    //@Field(type => [Answer])
    //answers: Answer[];

    @Field(type => [Item], { nullable: true })
    items: Item[];
}