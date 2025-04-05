import { Resolver, Args, Query, Mutation, Int } from '@nestjs/graphql';
import { RenterApplication } from './models/renterApplication.model';
import { RenterApplicationsService } from './renterApplications.service';
import { CreateFormInput } from 'src/forms/dto/create-form.input';
import { FindApplicationInput } from './dto/find-application.input';

@Resolver(() => RenterApplication)
export class RenterApplicationsResolver {
    constructor(
        private renterApplicationsService: RenterApplicationsService,
    ) { }

    @Query(() => [RenterApplication], { name: 'renterApplications' })
    async findAll() {
        return this.renterApplicationsService.findAll();
    }

    /*
    @Query(() => RenterApplication, { name: 'renterApplicationInfo' })
    async findOneByRenterApplicationId(@Args('applicationId', { type: () => Int }) applicationId: number) {
        return this.renterApplicationsService.findOneById(applicationId);
    }
    */

    @Query(() => Boolean, { name: 'canApply' })
    async findOneForRenter(@Args('canApplyInput') findApplicationInput: FindApplicationInput) {
        const applications = await this.renterApplicationsService.findOneByRenterId(findApplicationInput);

        // If user hasn't applied for the item, then return true
        if (applications?.length === 0) {
            return true;
        }

        // If user has applied for the item but already returned it (app completion), then return true
        const hasCompletedApplication = applications?.some(app => app.renterApplicationStatuses?.length === 6);

        return hasCompletedApplication;
    }

    @Mutation(() => RenterApplication, { name: 'createRenterApplication' })
    createRenterApplication(@Args('createRenterApplicationInput') createFormInput: CreateFormInput) {
        return this.renterApplicationsService.create(createFormInput);
    }
}