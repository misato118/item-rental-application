import { GetEmployeeInfoQuery } from "@/features/utils/graphql/typeDefs/graphql";
import { format } from 'date-fns';

interface AccountInfoCardProps {
    data?: GetEmployeeInfoQuery;
}

const AccountInfoCard = ({ data }: AccountInfoCardProps) => {
    return (
        <div className="card bg-base-100 shadow-xl w-2/5 h-auto max-h-fit w-auto max-w-fit">
            <div className="card-body p-5">
                <h2 className="card-title mb-2">My Account</h2>
                <p className="font-bold mb-2">General</p>
                <div className="grid grid-cols-2">
                    <p>Company</p>
                    <p>{data?.employeeInfo?.company?.name}</p>
                    <div className="divider mt-0 mb-3 col-span-2"></div>
                    <p>Name</p>
                    <p>{data?.employeeInfo?.firstName} {data?.employeeInfo?.lastName}</p>
                    <div className="divider mt-0 mb-3 col-span-2"></div>
                    <p>Date of Birth</p>
                    {data?.employeeInfo?.birthDate ? (
                        <p>{format(new Date(data?.employeeInfo?.birthDate), "MMM dd, yyyy")}</p>
                    ) : (
                        <p>Unknown date</p>
                    )}
                    <div className="divider mt-0 mb-3 col-span-2"></div>
                    <p>Email</p>
                    <p>{data?.employeeInfo?.email}</p>
                    <div className="divider mt-0 mb-3 col-span-2"></div>
                </div>
            </div>
        </div>
    );
}

export default AccountInfoCard;