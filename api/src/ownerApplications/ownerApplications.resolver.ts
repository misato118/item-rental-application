import { Resolver, Args, Query, Mutation, Int } from '@nestjs/graphql';
import { OwnerApplication } from './models/ownerApplication.model';
import { OwnerApplicationsService } from './ownerApplications.service';
//import { ConversationsService } from 'src/conversations/conversations.service';
import { ApplicationStatus } from 'src/applicationStatus/models/applicationStatus.model';

@Resolver(() => OwnerApplication)
export class OwnerApplicationsResolver {
    constructor(
        private ownerApplicationsService: OwnerApplicationsService,
        //private conversationsService: ConversationsService,
    ) { }

    @Query(() => OwnerApplication, { name: 'ownerApplication' })
    async findOneById(@Args('itemId', { type: () => Int }) itemId: number) {
        return this.ownerApplicationsService.findOneById(itemId);
    }

    @Mutation(() => Int, { name: 'deleteOwnerApplications' })
    async deleteOwnerApplications(@Args('itemId', { type: () => Int }) itemId: number) {
        const result = await this.ownerApplicationsService.deleteMany(itemId);
        return result.count;
    }

    /*
    @Mutation(() => OwnerApplication, { name: 'updateOwnerApplication' })
    updateOwnerApplication(
      @Args('applicationId', { type: () => Int }) applicationId: number,
      @Args('newStatus', { type: () => ApplicationStatus }) newStatus: ApplicationStatus,
      @Args('itemId', { type: () => Int }) itemId: number,
    ) {
      // If Accepted, create a Conversation
      if (newStatus.valueOf() === ApplicationStatus.ACCEPTED) {
        // TODO: Why does this not work here after passing the if statement?
        this.conversationsService.create(itemId);
      }
      return this.ownerApplicationsService.updateStatus(applicationId, newStatus);
    }
      */
}