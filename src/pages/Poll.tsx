
import { useParams } from "react-router-dom";
import { useGetPollByIdQuery } from "../redux/api/pollApi";
import PollCard from "../components/Ui/PollCard";
import MainLayout from "../components/Layout/MainLayout";
import PollCardSkeleton from "../components/skeletons/PollCardSkeleton";

export default function Poll() {
    const { id } = useParams<{ id: string }>();

    const { data, isLoading } = useGetPollByIdQuery(id as string);

    const poll = data?.data || {};
    return (
        <MainLayout>
            <div className="w-[50%] mx-auto mt-20">
                {
                    isLoading ? <PollCardSkeleton /> : <PollCard poll={poll} />
                }
            </div>
        </MainLayout>
    )
}
