import React, { useState } from "react";
import { FaFire, FaThumbsUp } from "react-icons/fa";
import { useGetPollsQuery } from "../../redux/api/pollApi";
import { TPoll } from "../../types";
import PollCard from "./PollCard";


const polls: TPoll[] = [
    {
        pollType: "yes_no",
        options: [
            { text: "Yes", vote: 5 },
            { text: "No", vote: 3 },
        ],
        question: "Do you support the new company policy?",
        createdAt: "2025-03-10T14:30:00.000Z",
        expiresAt: "2025-03-15T14:30:00.000Z",
        resultsHidden: false,
        private: true,
        createdBy: "user_67890",
    },
    {
        pollType: "multiple_choice",
        options: [
            { text: "JS", vote: 0 },
            { text: "PHP", vote: 0 },
            { text: "Python", vote: 0 },
        ],
        question: "Which programming language do you prefer?",
        createdAt: "2025-03-10T12:00:00.000Z",
        expiresAt: "2025-03-17T12:00:00.000Z",
        resultsHidden: true,
        private: false,
        createdBy: "user_12345",
    },
];

const PollPage = () => {
    /*  const [reactions, setReactions] = useState<{ [key: number]: { fire: number; like: number; userReaction: string } }>(
       polls.reduce((acc, _, index) => ({ ...acc, [index]: { fire: 0, like: 0, userReaction: "" } }), {})
     ); */

    /* const handleReaction = (pollIndex: number, type: "fire" | "like") => {
      setReactions((prev) => {
        const currentReaction = prev[pollIndex].userReaction;
        let updatedFire = prev[pollIndex].fire;
        let updatedLike = prev[pollIndex].like;
  
        if (currentReaction === type) {
          if (type === "fire") updatedFire--;
          if (type === "like") updatedLike--;
          return { ...prev, [pollIndex]: { fire: updatedFire, like: updatedLike, userReaction: "" } };
        }
  
        if (currentReaction === "fire") updatedFire--;
        if (currentReaction === "like") updatedLike--;
  
        if (type === "fire") updatedFire++;
        if (type === "like") updatedLike++;
  
        return { ...prev, [pollIndex]: { fire: updatedFire, like: updatedLike, userReaction: type } };
      });
    }; */

    const { data, isLoading } = useGetPollsQuery(null)
    const polls = data?.data || []

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🗳️ Popular Polls</h1>

            <div className="max-w-3xl mx-auto space-y-6">
                {polls.map((poll: TPoll, index: number) => (
                    <PollCard poll={poll} key={index}/>
                ))}
            </div>
        </div>
    );
};

export default PollPage;
