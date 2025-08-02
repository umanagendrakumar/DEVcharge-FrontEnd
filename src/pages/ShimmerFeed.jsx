import "./ShimmerFeedAnim.css"; // Only for animation!

const ShimmerFeed = () => (
  <div className="relative bg-[#171c23] rounded-xl shadow-lg border border-cyan-500 max-w-md mx-auto p-8 flex flex-col items-center text-center overflow-hidden">
    {/* Avatar shimmer */}
    <div className="relative w-36 h-36 rounded-full bg-gray-700 mb-6 overflow-hidden">
      <div className="absolute inset-0 shimmer"></div>
    </div>
    {/* Name shimmer */}
    <div className="relative h-7 w-40 bg-gray-700 rounded mb-3 overflow-hidden">
      <div className="absolute inset-0 shimmer"></div>
    </div>
    {/* Description shimmer */}
    <div className="relative h-5 w-48 bg-gray-700 rounded mb-8 overflow-hidden">
      <div className="absolute inset-0 shimmer"></div>
    </div>
    {/* Buttons shimmer */}
    <div className="flex gap-6 mt-2">
      <div className="relative h-12 w-32 bg-gray-700 rounded overflow-hidden">
        <div className="absolute inset-0 shimmer"></div>
      </div>
      <div className="relative h-12 w-32 bg-gray-700 rounded overflow-hidden">
        <div className="absolute inset-0 shimmer"></div>
      </div>
    </div>
  </div>
);

export default ShimmerFeed;