import Rating from "./Rating";
import useCompanyItems from "@/hooks/useCompanyItems";
import { GetCompanyInfoQuery } from "@/features/utils/graphql/typeDefs/graphql";
import Image from "next/image";

interface ItemsProps {
    items: NonNullable<GetCompanyInfoQuery["companyInfo"]>["items"];
}

const CompanyItems = ({ items }: ItemsProps) => {
    const {
        paginatedItems,
        overallRating,
        router,
        currentPage,
        totalPages,
        handlePageChange        
    } = useCompanyItems(items);

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 grid-rows-3 gap-3">
                {paginatedItems.map((item, index) => (
                    <div className="card bg-base-100 shadow-xl" key={item.id + index}>
                        <div className="card-body flex flex-row gap-4">
                            <div className="w-1/2">
                                {/* Substitute this image with {item.imageURL}*/}
                                <Image src="/sampleImg.png" alt="Item Image" height={300} width={300} />
                            </div>
                            <div className="w-1/2">
                                <p className="font-bold text-xl mb-2">{item.name}</p>
                                <p className="text-gray-700 text-base">${item.fee} /{item.feeType}</p>
                                <div><Rating rating={overallRating} name={item.name ?? "Not Available"} /></div>
                                <button
                                    className="py-1 btn rounded-full bg-info text-white font-normal mt-4"
                                    onClick={() => {
                                        router.push({
                                            pathname: "/items/[item]",
                                            query: { item: item.id }
                                        })
                                    }}
                                >Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    
            <div className="mt-6 flex items-center space-x-4">
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={`btn bg-whilte ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    Previous
                </button>
                <span className="text-lg font-medium">Page {currentPage} of {totalPages}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={`btn bg-whilte ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    Next
                </button>
            </div>
        </div>        
    );
}

export default CompanyItems;