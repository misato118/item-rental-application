import AccountInfoCard from "@/components/AccountInfoCard";
import Error from "@/components/Error";
import RootLayout from "@/components/Layout";
import SideNavigation from "@/components/SideNavigation";
import { GetEmployeeInfoDocument } from "@/features/utils/graphql/typeDefs/graphql";
import { useQuery } from "@apollo/client";
import { UserIcon } from "@heroicons/react/24/outline";
import { ReactElement, useEffect, useState } from "react";

const About = () => {
    const [employeeId, setEmployeeId] = useState<number>(0);

    useEffect(() => {
        const storedId = localStorage.getItem("employeeId");
        if (storedId !== null) {
            setEmployeeId(Number(storedId));
        }
    }, []);

    const { loading, error, data } = useQuery(GetEmployeeInfoDocument, {
        variables: { employeeId },
        skip: employeeId === 0
    });

    if (loading) return 'Loading...';

    if (error || !data?.employeeInfo) {
        return (
            <Error />
        );
    }

    return (
        <div>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li><a><UserIcon className="w-4 h-4" /> About</a></li>
                </ul>
            </div>
            <div className="flex flex-col items-center space-y-6 mb-20">
                <AccountInfoCard data={data} />
            </div>
        </div>
    );
}

About.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout>
            <div className="flex w-full h-full">
                <SideNavigation />
                <div className="flex-1 overflow-y-auto p-10 bg-base-200">
                    {page}
                </div>
            </div>
        </RootLayout>
    );
}

export default About;