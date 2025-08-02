import "./ShimmerAnim.css"; // Only the animation

const ShimmerLoading = () => {
    return (
        <div className="w-full p-4">
            {[...Array(5)].map((_, index) => (
                <div key={index} className="flex gap-4 justify-center items-center mb-4">

                    <div className="relative overflow-hidden w-16 h-16 rounded-full bg-base-100">
                        <div className="absolute inset-0 shimmer"></div>
                    </div>

                    <div className="relative overflow-hidden w-full max-w-2xl h-20 bg-base-100 rounded">
                        <div className="absolute inset-0 shimmer"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShimmerLoading;