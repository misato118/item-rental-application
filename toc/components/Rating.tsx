// This shows a rating (int) with 5 stars
const Rating = ({ rating, name }: { rating: number, name: string }) => {
    return (
        <div className="rating rating-xl rating-half mr-2 my-2">
            <input type="radio" name={name} className="rating-hidden" disabled />

            {Array.from({ length: 5 }, (_, i) => {
                const value = i + 1;

                return (
                    <input
                        key={value}
                        type="radio"
                        name={name}
                        className="mask mask-star-2 bg-secondary"
                        disabled
                        checked={rating >= value}
                        aria-label={`${value} star`} />
                );
            })}
        </div>
    );
}

export default Rating;