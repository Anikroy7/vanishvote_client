import { ReactNode } from "react";
import Navbar from "../shared/Navbar";
import useUserId from "../../hooks/user.hook";

export default function MainLayout({ children }: { children: ReactNode }) {
    useUserId();

    return (
        <div className="bg-gray-100 dark:bg-gray-800 min-h-screen">
            <Navbar />
            {children}
        </div>
    )
}
