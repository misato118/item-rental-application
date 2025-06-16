import { UserIcon, ListBulletIcon, CreditCardIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import useLoginConfirmation from "@/hooks/useLoginConfirmation";
import Error from "./Error";
import Image from "next/image";

// SideNavigation component which stays on the left on a user page
const SideNavigation = () => {
    const router = useRouter();
    const {
        data,
        error,
        renterId        
    } = useLoginConfirmation();

    if (error || !data?.renterInfo) {
        return (
            <Error />
        );
    }

    return (
        <nav className="flex flex-col justify-between items-center w-64 h-full bg-primary">
            {/* Substitute this image with {renter.imageURL}*/}
            <div>
                <div className="mb-4 mt-16 flex justify-center items-start">
                    <Image src="/UserIcon.png" alt="Renter Image" className="rounded-full w-32 h-32" height={32} width={32} />
                </div>
                <div className="text-center">
                    <h2 className="font-bold text-white">{data?.renterInfo?.firstName} {data?.renterInfo?.lastName}</h2>
                    <p className="text-white">{data?.renterInfo?.username}</p>
                </div>
            </div>

            <div className="flex flex-col justify-start -mt-24 text-white w-full">
                <ul className="w-full">
                    <li
                        className="flex justify-center space-x-2 py-5 hover:bg-base-300 hover:text-black cursor-pointer"
                        onClick={() => {
                            router.push(`/renters/${renterId}`);
                        }}
                    >
                        <UserIcon className="w-8 h-8" />
                        <span>General Information</span>
                    </li>
                    <li
                        className="flex justify-center space-x-2 py-5 hover:bg-base-300 hover:text-black cursor-pointer"
                        onClick={() => {
                            router.push(`/renters/${renterId}/renter-item-list`);
                        }}
                    >
                        <ListBulletIcon className="w-8 h-8" />
                        <span>My Item List</span>
                    </li>
                    <li
                        className="flex justify-center space-x-2 py-5 hover:bg-base-300 hover:text-black cursor-pointer"
                        onClick={() => {
                            router.push(`/renters/${renterId}/billing-payments`);
                        }}                        
                    >
                        <CreditCardIcon className="w-8 h-8" />
                        <span>Billing & Payments</span>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li
                        className="flex justify-center space-x-2 py-5 cursor-pointer"
                        onClick={() => {
                            localStorage.removeItem("renterId");
                            router.push(`/login`);
                        }}
                    >
                        <span className="text-white">Logout</span>
                        <ArrowLeftStartOnRectangleIcon className="w-8 h-8 text-accent" />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default SideNavigation;