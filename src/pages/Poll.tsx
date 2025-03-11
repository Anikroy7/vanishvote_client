
import { useParams } from "react-router-dom";
import { useGetPollByIdQuery } from "../redux/api/pollApi";
import PollCard from "../components/Ui/PollCard";
import MainLayout from "../components/Layout/MainLayout";

export default function Poll() {
    const { id } = useParams<{ id: string }>();

    const { data, isLoading } = useGetPollByIdQuery(id as string);
    // console.log(data)
    if (isLoading) return <div>Loading...</div>;
    const poll = data?.data || {};
    return (
        <MainLayout>
            <div className="w-[50%] mx-auto mt-20">
                <PollCard poll={poll} />
            </div>
        </MainLayout>
    )
}
