import { GetItemInfoQuery } from "@/features/utils/graphql/typeDefs/graphql";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/router";

interface CompanyProps {
    company?: NonNullable<NonNullable<GetItemInfoQuery["itemInfo"]>["company"]>;
}

const OwnerDetailsWithButtons = ({ company }: CompanyProps) => {
    const router = useRouter();

    return (
        <div>
            <div className="flex items-center">
                {/* TODO: Add a company image here instead (e.g., {company.logoURL}) */}
                <Image
                    alt="Owner Image"
                    src="/sampleImg.png"
                    className="h-12 w-12 rounded-full mr-4"
                    width={12}
                    height={12}
                    />
                <p>{company?.name}</p>
            </div>
            <p className="my-3">{company?.description}</p>
            <div className="flex">
                <button
                    className="flex py-1 btn rounded-full bg-info text-white font-normal justify-center mr-2"
                ><ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> Ask Questions</button>
                <button
                    className="py-1 btn rounded-full bg-secondary text-white font-normal px-4"
                    onClick={() => router.push({
                        pathname: "/[company]",
                        query: { company: company?.name }
                    })}
                >More</button>
            </div>
        </div>
    );
}

export default OwnerDetailsWithButtons;