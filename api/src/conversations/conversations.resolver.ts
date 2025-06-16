import { Resolver, Args, Mutation, Int } from '@nestjs/graphql';
import { ConversationsService } from './conversations.service';
import { Conversation } from './models/conversation.model';

@Resolver(() => Conversation)
export class ConversationsResolver {
    constructor(
        private conversationsService: ConversationsService,
    ) { }

    @Mutation(() => Int, { name: 'deleteConversations' })
    async deleteConversations(@Args('itemId', { type: () => Int }) itemId: number) {
        const result = await this.conversationsService.deleteMany(itemId);
        return result.count;
    }    
}