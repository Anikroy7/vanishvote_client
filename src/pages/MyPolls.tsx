import MainLayout from "../components/Layout/MainLayout";
import PollCard from "../components/Ui/PollCard";
import { useGetMyPollsQuery } from "../redux/api/pollApi";
import { TPoll } from "../types";



const MyPolls = () => {
    const vanishvote_user_id = localStorage.getItem('vanishvote_user_id')
    const { data } = useGetMyPollsQuery(vanishvote_user_id as string)
    const polls = data?.data || []

    return (
        <MainLayout>
            <div className="min-h-screen bg-gray-100 p-4 md:p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🗳️ Own Polls</h1>
                <div className="max-w-3xl mx-auto space-y-6">
                    {polls.map((poll: TPoll, index: number) => (
                        <PollCard poll={poll} key={index} />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default MyPolls;
