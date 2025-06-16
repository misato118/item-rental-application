import { GetItemInfoQuery } from '@/features/utils/graphql/typeDefs/graphql';

interface ItemsProps {
    itemInfo?: GetItemInfoQuery["itemInfo"];
}

const ItemDetails = ({ itemInfo }: ItemsProps) => {
    return (
        <div>
            <p className="font-bold text-2xl mb-2">{itemInfo?.name}</p>
            <p >{itemInfo?.category}</p>
            <p>{itemInfo?.description}</p>
            <p className="my-2"><span className="font-bold text-xl mb-1">${itemInfo?.fee}</span> /{itemInfo?.feeType}</p>
            {/* TODO: Add review here */}
            <div className="collapse collapse-plus mt-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold pl-0">Max Duration</div>
                <div className="collapse-content text-sm">{itemInfo?.maxDuration} {itemInfo?.maxDurationType}</div>
            </div>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold pl-0">Deposit Fee</div>
                <div className="collapse-content text-sm">${itemInfo?.deposit}</div>
            </div>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold pl-0">Category</div>
                <div className="collapse-content text-sm">{itemInfo?.category}</div>
            </div>
        </div>
    );
}

export default ItemDetails;