const PollCardSkeleton = () => (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-5 border border-gray-200 dark:border-gray-700 animate-pulse">
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-3"></div>
        <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="w-full h-10 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
            ))}
        </div>
        <div className="mt-4 flex justify-between items-center text-gray-400 dark:text-gray-500 text-sm">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
        </div>
    </div>
);

export default PollCardSkeleton;
