import "./ShimmerAnim.css"; // Only the animation

const ShimmerLoading = () => {
    return (
        <div className="w-full p-4">
            {[...Array(4)].map((_, index) => (
                <div key={index} className="flex gap-4 justify-center  mb-4">
                    <div className="relative overflow-hidden w-full max-w-2xl h-20 bg-base-100 rounded">
                        <div className="absolute inset-0 shimmer px-4 flex items-center">
                            <div className="w-15 h-15 rounded-full bg-gray-600">
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShimmerLoading;