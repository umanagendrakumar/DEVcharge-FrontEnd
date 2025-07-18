import { ArrowRight, Code2, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const LandingHero = () => {
    return (
        <section>
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    <span>Connect.</span>{" "}
                    <span>Collaborate.</span>{" "}
                    <span>Grow.</span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl mb-8">
                    A clean, developer-focused networking platform built for meaningful connections.
                </p>


                <Link to="/auth" className=" w-40 sm:w-50 bg-primary py-4 rounded flex items-center justify-center cursor-pointer mx-auto">
                    GET STARTED
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>


                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-12 sm:mt-16 ">
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
        </section>
    );
}

export default LandingHero;