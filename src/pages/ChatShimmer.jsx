
const shimmerBubbles = [
  // [isOutgoing, bubbleWidth]
  [false, "w-32"],
  [true, "w-24"],
  [false, "w-60"],
  [true, "w-52"],
  [false, "w-24"],
  [true, "w-28"],
  [false, "w-48"],
  [true, "w-20"],
];

const ChatShimmer = () => (
  <div className="border border-gray-700 w-full md:w-3xl h-[80vh] md:h-[70vh] flex flex-col rounded relative overflow-hidden bg-black">
    <main className="flex-1 p-2 overflow-y-scroll">
      <div className="flex flex-col gap-1">
        {shimmerBubbles.map(([isOutgoing, bubbleWidth], idx) => (
          <div
            key={idx}
            className={`flex items-end gap-1 ${isOutgoing ? "justify-end" : ""} mt-4`}
          >
            {/* Incoming bubble: avatar left, bubble right */}
            {!isOutgoing && (
              <>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#23272f] to-[#11121a] animate-pulse" />
                <div className={`bg-gradient-to-r from-[#23272f] via-[#3764f9] to-[#0edbff] h-8 ${bubbleWidth} rounded-lg animate-shimmer`} />
              </>
            )}

            {/* Outgoing bubble: bubble left, avatar right */}
            {isOutgoing && (
              <>
                <div className={`bg-gradient-to-r from-[#905ef2] via-[#3e68f2] to-[#03d9ff] h-8 ${bubbleWidth} rounded-lg animate-shimmer`} />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#23272f] to-[#11121a] animate-pulse" />
              </>
            )}

          </div>
        ))}
      </div>
    </main>
    <style>
      {`
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer-move 2s linear infinite;
        }
        @keyframes shimmer-move {
          0% { background-position: -150% 0; }
          100% { background-position: 150% 0; }
        }
      `}
    </style>
  </div>
);

export default ChatShimmer;