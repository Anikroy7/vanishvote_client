
import { useGetPollsQuery } from "../../redux/api/pollApi";
import { TPoll } from "../../types";
import PollCardSkeleton from "../skeletons/PollCardSkeleton";
import PollCard from "./PollCard";


const PollPage = () => {

    const { data, isLoading } = useGetPollsQuery(null)
    const polls = data?.data || []

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🗳️ Popular Polls</h1>

            <div className="max-w-3xl mx-auto space-y-6">
                {isLoading
                    ? [...Array(3)].map((_, index) => <PollCardSkeleton key={index} />)
                    : polls.map((poll: TPoll, index: number) => <PollCard poll={poll} key={index} />)}
            </div>
        </div>
    );
};

export default PollPage;
