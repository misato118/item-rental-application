import { GetRenterInfoQuery } from "@/features/utils/graphql/typeDefs/graphql";

interface AccountInfoCardProps {
    data?: GetRenterInfoQuery;
}

const AccountInfoCard = ({ data }: AccountInfoCardProps) => {
    const date = new Date(data?.renterInfo?.createdAt.toString());
    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    return(
        <div className="card bg-base-100 shadow-xl w-2/5 h-auto max-h-fit w-auto max-w-fit">
            <div className="card-body p-5">
                <h2 className="card-title mb-2">My Account</h2> 
                <p className="font-bold mb-2">General</p>
                <div className="grid grid-cols-2">
                    <p>Username</p>
                    <p>{data?.renterInfo?.username}</p>
                    <div className="divider mt-0 mb-3 col-span-2"></div>
                    <p>Name</p>
                    <p>{data?.renterInfo?.firstName} {data?.renterInfo?.lastName}</p>
                    <div className="divider mt-0 mb-3 col-span-2"></div>
                    <p>Date of Birth</p>
                    <p>{formattedDate}</p>
                    <div className="divider mt-0 mb-3 col-span-2"></div>
                    <p>Email</p>
                    <p>{data?.renterInfo?.email}</p>
                    <div className="divider mt-0 mb-3 col-span-2"></div>
                </div>
            </div>
        </div>
    );
}

export default AccountInfoCard;