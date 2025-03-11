
import { FaFire, FaThumbsUp } from 'react-icons/fa'
import { useCreateReactionMutation } from '../../redux/api/pollApi'
import { useEffect, useState } from 'react'
import useDebounce from '../../hooks/debounce.hook'
import { TPoll, TReaction } from '../../types'

export default function Reaction({ poll }: { poll: TPoll }) {
  const vanishvote_user_id = localStorage.getItem('vanishvote_user_id')
  const [createReaction] = useCreateReactionMutation();
  const [reactions, setReactions] = useState({
    trending: poll.reactions.filter((r) => r.reactionType === "trending").length,
    like: poll.reactions.filter((r) => r.reactionType === "like").length,
  });
  const userReaction = poll.reactions.find(
    (reaction: TReaction) => reaction.userId === vanishvote_user_id
  );

  const [reactionType, setReactionType] = useState('')
  const reaction = useDebounce(reactionType)

  useEffect(() => {
    if (reaction) {

      createReaction({
        id: poll._id,
        body: {
          reactionType: reaction,
          userId: vanishvote_user_id
        }
      })
    }
  }, [reaction])

  useEffect(() => {
    setReactions({
      trending: poll.reactions.filter((r) => r.reactionType === "trending").length,
      like: poll.reactions.filter((r) => r.reactionType === "like").length
    })
  }, [poll.reactions])
  const handlesetReaction = (reactionType: keyof typeof reactions) => {
    setReactions((prev) => ({
      ...prev,
      [reactionType]: prev[reactionType] + 1
    }))
    setReactionType(reactionType)
  }

  return (
    <>

      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={() => handlesetReaction("trending")}
          className={`flex items-center space-x-2 text-lg font-medium transition px-4 py-2 rounded-full border ${userReaction?.reactionType === "trending"
            ? "bg-red-100 border-orange-500 text-orange-500"
            : "border-gray-300 text-gray-500 hover:bg-red-50 hover:border-orange-400"
            }`}
        >
          <FaFire className="text-2xl" />
          <span>{reactions.trending}</span>
        </button>

        <button
          onClick={() => handlesetReaction("like")}
          className={`flex items-center space-x-2 text-lg font-medium transition px-4 py-2 rounded-full border ${userReaction?.reactionType === "like"
            ? "bg-blue-100 border-blue-500 text-blue-600"
            : "border-gray-300 text-gray-500 hover:bg-blue-50 hover:border-blue-400"
            }`}
        >
          <FaThumbsUp className="text-2xl" />
          <span>{reactions.like}</span>
        </button>
      </div>

    </>
  )
}
