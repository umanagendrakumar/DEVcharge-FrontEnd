import { Code2, Users, Zap, CornerRightDown } from "lucide-react";
import { Link } from "react-router-dom";

const DevChargeIntro = () => {
    return (
        <section className="h-[calc(100svh-80px)] flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#00ccff] to-[#00fff7]">
                    <span>Connect.</span>{" "}
                    <span>Collaborate.</span>{" "}
                    <span>Grow.</span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl mb-8">
                    A clean, developer-focused networking platform built for meaningful connections.
                </p>


                <Link to="/auth" className="w-40 sm:w-50 bg-gradient-to-r from-[#9766fa] via-[#3764f9] to-[#0edbff] py-4 rounded flex items-center justify-center cursor-pointer mx-auto">
                    GET STARTED
                </Link>


                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 ">
                    <div className="flex items-center gap-2">
                        <Code2 className="text-primary" />
                        <span>Developer-First</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="text-accent" />
                        <span>Real Connections</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="text-primary" />
                        <span>Lightning Fast</span>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex text-gray-600">Scroll to know more <CornerRightDown className="mt-2 text-gray-700"/></div>
        </section>
    );
}

export default DevChargeIntro;