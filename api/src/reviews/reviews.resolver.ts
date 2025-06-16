import { Resolver, Args, Query, Mutation, Int } from '@nestjs/graphql';
import { Review } from './models/review.model';
import { Item } from 'src/items/models/item.model';
import { ReviewsService } from './reviews.service';
import { CreateReviewInput } from './dto/create-review.input';

@Resolver(() => Review)
export class ReviewsResolver {
    constructor(
        private reviewsService: ReviewsService,
    ) { }

    @Query(() => [Review], { name: 'reviews' })
    async findAll() {
        return this.reviewsService.findAll();
    }

    // TODO: Return a created review within the Item model
    @Mutation(() => Item, { name: 'createReview' })
    createReview(@Args('createReviewInput') createReviewInput: CreateReviewInput) {
        return this.reviewsService.create(createReviewInput);
    }

    @Mutation(() => Int, { name: 'deleteReviews' })
    async deleteReviews(@Args('itemId', { type: () => Int }) itemId: number) {
        const result = await this.reviewsService.deleteMany(itemId);
        return result.count;
    }    
}