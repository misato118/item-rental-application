import { UserIcon, BellIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/router";

// Header component with a logo, notification and navigation buttons
const Header = () => {
    const router = useRouter();

    return (
        <header className="bg-white">
            <nav
                aria-label="Global"
                className="mx-3 flex max-w-full items-center justify-between p-6 lg:px-8"
            >
                <div className="lg:flex lg:flex-1 lg:justify-start items-center grid grid-cols-4 gap-x-5">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Application Name</span>
                        <Image
                            alt="Logo"
                            src="/Logo.png"
                            width={32}
                            height={32}
                            onClick={() => router.push("/")}
                        />
                    </a>
                    <a href="#" className="text-base text-gray-900">
                        About
                    </a>
                    <a href="#" className="text-base text-gray-900">
                        Browse
                    </a>
                    <a href="#" className="text-base text-gray-900">
                        Help
                    </a>
                </div>
                <div className="lg:flex lg:flex-1 items-center lg:justify-end gap-x-5">
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        <BellIcon className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        <UserIcon
                            className="h-6 w-6"
                            onClick={() => {
                                const renterId = localStorage.getItem("renterId");
                                if (renterId) {
                                    router.push(`/renters/${renterId}`);
                                } else {
                                    const currentPath = router.asPath;
                                    router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
                                }
                            }}
                        />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
