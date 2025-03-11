import { ReactNode } from "react";
import Navbar from "../shared/Navbar";
import useUserId from "../../hooks/user.hook";

export default function MainLayout({ children }: { children: ReactNode }) {
    useUserId();

    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
