import { FaUserAstronaut } from "react-icons/fa";
import "./EmptyAnim.css"; // Only for animation!

const Empty = ({ value }) => {
    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-transparent">
            <div className="rounded-2xl shadow-lg border border-[#456796] w-[340px] px-6 py-10 text-center">
                <FaUserAstronaut className="text-5xl mx-auto mb-4 text-cyan-400 drop-shadow-[0_0_10px_rgba(72,224,228,0.6)] animate-astronaut" />
                <h1 className="text-cyan-300 font-bold text-2xl mb-2 ">
                    No {value}
                </h1>
                <p className="text-slate-300 mb-2">
                    Looks like there’s nothing here yet.
                </p>
            </div>
        </div>
    );
};

export default Empty;