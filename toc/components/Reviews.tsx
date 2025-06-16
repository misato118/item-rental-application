import { UserCircleIcon } from "@heroicons/react/24/outline";
import Rating from "./Rating";
import { GetItemInfoQuery } from "@/features/utils/graphql/typeDefs/graphql";

interface ReviewsProps {
    reviews?: NonNullable<NonNullable<GetItemInfoQuery["itemInfo"]>["reviews"]>;
}

// This shows a list of reviews for an item
const Reviews = (props: ReviewsProps) => {
    return (
        <main>
            {props.reviews?.length ? (props.reviews?.map((review, index) => (
                <div key={review?.id + index}>
                    <div className="flex items-center">
                        <div className="h-10 w-10 mr-2"><UserCircleIcon /></div>
                        <p className="font-bold">User</p>
                    </div>
                    <div className="flex items-center">
                        <Rating rating={review.rating} name={`rating-${review.id}`} />
                        <p className="font-bold">{review.title}</p>
                    </div>
                    <p>{review.contents}</p>
                    <div className="divider my-1"></div>
                </div>
            ))) : (
                <div>
                    <h1>No reviews yet!</h1>
                </div>
            )}
        </main>
    );
}

export default Reviews;