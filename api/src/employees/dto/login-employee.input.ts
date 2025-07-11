import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LoginEmployeeInput {
    @Field(() => String)
    username: string;
    @Field(() => String)
    password: string;
}