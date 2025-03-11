import React from 'react'

export default function Reaction() {
  /*   const [reactions, setReactions] = useState<{ [key: number]: { fire: number; like: number; userReaction: string } }>(
        polls.reduce((acc, _, index) => ({ ...acc, [index]: { fire: 0, like: 0, userReaction: "" } }), {})
      );
    
      const handleReaction = (pollIndex: number, type: "fire" | "like") => {
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
    return (
        <

            >
            {/* Reactions */}
            {/* <div className="mt-4 flex justify-center space-x-4">
                <button
                    onClick={() => handleReaction(index, "fire")}
                    className={`flex items-center space-x-2 text-lg font-medium transition px-4 py-2 rounded-full border ${reactions[index].userReaction === "fire"
                        ? "bg-red-100 border-red-500 text-red-600"
                        : "border-gray-300 text-gray-500 hover:bg-red-50 hover:border-red-400"
                        }`}
                >
                    <FaFire className="text-2xl" />
                    <span>{reactions[index].fire}</span>
                </button>

                <button
                    onClick={() => handleReaction(index, "like")}
                    className={`flex items-center space-x-2 text-lg font-medium transition px-4 py-2 rounded-full border ${reactions[index].userReaction === "like"
                        ? "bg-blue-100 border-blue-500 text-blue-600"
                        : "border-gray-300 text-gray-500 hover:bg-blue-50 hover:border-blue-400"
                        }`}
                >
                    <FaThumbsUp className="text-2xl" />
                    <span>{reactions[index].like}</span>
                </button>
            </div> */}

        </>
    )
}
