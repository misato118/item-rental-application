import { UserIcon, ListBulletIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import useLoginConfirmation from "@/hooks/useLoginConfirmation";
import Error from "./Error";
import Image from "next/image";

const SideNavigation = () => {
    const router = useRouter();
    const {
        data,
        error,
        employeeId        
    } = useLoginConfirmation();

    if (error || !data?.employeeInfo) {
        return (
            <Error />
        );
    }

    return (
        <nav className="flex flex-col items-center w-64 h-full bg-primary">
            <div className="mt-16 mb-4 flex justify-center items-center">
                <h1 className="font-bold text-white">{data?.employeeInfo?.company.name}</h1>
            </div>
            {/* Substitute this image with {renter.imageURL}*/}
            <div className="mb-4 flex justify-center items-center">
                <Image src="/UserIcon.png" alt="Renter Image" className="rounded-full w-32 h-32" height={32} width={32} />
            </div>
            <div className="text-center">
                <h2 className="font-bold text-white">{data?.employeeInfo?.firstName} {data?.employeeInfo?.lastName}</h2>
                <p className="text-white">{data?.employeeInfo?.email}</p>
            </div>
            <div className="flex flex-col items-center text-white mt-20 w-full">
                <ul className="w-full">
                    <li
                        className="flex justify-center space-x-2 py-5 hover:bg-base-300 hover:text-black cursor-pointer"
                        onClick={() => {
                            router.push(`/${data?.employeeInfo?.company}/${employeeId}/about`);
                        }}
                    >
                        <UserIcon className="w-8 h-8" />
                        <span>General Information</span>
                    </li>
                    <li
                        className="flex justify-center space-x-2 py-5 hover:bg-base-300 hover:text-black cursor-pointer"
                        onClick={() => {
                            router.push(`/${data?.employeeInfo?.company}/${employeeId}`);
                        }}
                    >
                        <ListBulletIcon className="w-8 h-8" />
                        <span>Company Item List</span>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li
                        className="flex justify-center space-x-2 py-5 cursor-pointer"
                        onClick={() => {
                            localStorage.removeItem("employeeId");
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