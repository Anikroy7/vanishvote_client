import { useEffect, useState } from "react";
import { TPoll } from "../../types";
import useDebounce from "../../hooks/debounce.hook";
import { useCreateVoteMutation } from "../../redux/api/pollApi";

export default function PollCard({ poll }: { poll: TPoll }) {
    const vanishvote_user_id = localStorage.getItem("vanishvote_user_id");
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [votedOptionIndex, setVotedOptionIndex] = useState<number | null>(null);
    const finalSelection = useDebounce(selectedOption);
    const [createVote] = useCreateVoteMutation();
    const [copied, setCopied] = useState(false);
    const pollLink = `${window.location.origin}/poll/${poll._id}`;

    useEffect(() => {
        poll.options.forEach((option, index) => {
            if (option.vote.includes(vanishvote_user_id as string)) {
                setVotedOptionIndex(index);
            }
        });
    }, [poll]);

    useEffect(() => {
        if (finalSelection !== null && votedOptionIndex === null) {
            createVote({
                id: poll._id,
                body: {
                    optionIndex: finalSelection,
                    userId: vanishvote_user_id,
                },
            });
            setVotedOptionIndex(finalSelection);
        }
    }, [finalSelection, createVote, poll._id, vanishvote_user_id, votedOptionIndex]);
    console.log(votedOptionIndex)


    const copyToClipboard = () => {
        navigator.clipboard.writeText(pollLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000)
    };
    return (
        <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-200">

            <div className="flex items-center justify-between">

                <h2 className="text-xl font-semibold text-gray-900">{poll.question}</h2>
                <button
                    onClick={copyToClipboard}
                    className="ml-2 px-3 py-1 text-sm bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
            <p className="text-sm text-gray-500 mb-3">
                Ends: {new Date(poll.expiresAt).toLocaleString()}
            </p>

            <div className="space-y-3">
                {poll.options.map((option, i) => (
                    <button
                        key={i}
                        onClick={() => votedOptionIndex === null && setSelectedOption(i)}
                        className={`w-full flex justify-between items-center px-4 py-2 border rounded-lg transition ${votedOptionIndex === i
                            ? "bg-green-100 border-green-500 text-green-600 font-semibold cursor-not-allowed"
                            : selectedOption === i
                                ? "bg-blue-100 border-blue-500 text-blue-600 font-semibold"
                                : "hover:bg-gray-200"
                            }`}
                        disabled={votedOptionIndex !== null}
                    >
                        <span>{option.text}</span>
                        {!poll.resultsHidden && (
                            <span className="text-gray-500">
                                {option.vote.length} votes {votedOptionIndex === i && "✔️"}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {/* Poll Info */}
            <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
                <span>{poll.private ? "🔒 Private Poll" : "🌍 Public Poll"}</span>
                <span>📅 Created: {new Date(poll.createdAt).toLocaleDateString()}</span>
            </div>
        </div>
    );
}
