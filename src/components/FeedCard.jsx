import axios from "axios";

import { removeUserFromFeed } from "../utils/store/feedSlice";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../constants";
import { useState } from "react";

const FeedCard = ({ user }) => {
    const [isInterestedHandled, setIsInterestedHandled] = useState(false);
    const [isIgnoredHandled, setIsIgnoredHandled] = useState(false);
    const { firstName, lastName, age, gender, skills, about, _id, photoUrl } = user;

    const dispatch = useDispatch();

    const handleInterested = async (status) => {
        setIsInterestedHandled(true);
        try {
            const res = await axios.post(BASE_URL + "/request/send/interested/" + _id,
                {},
                { withCredentials: true }
            );
            setIsInterestedHandled(false);
            dispatch(removeUserFromFeed(_id));

        } catch (err) {
            console.log(err);
        }
    }

    const handleIgnored = async (status) => {
        setIsIgnoredHandled(true);
        try {
            const res = await axios.post(BASE_URL + "/request/send/ignore/" + _id,
                {},
                { withCredentials: true }
            );
            setIsIgnoredHandled(false);
            dispatch(removeUserFromFeed(_id));

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="p-[1px] rounded-xl bg-gradient-to-r from-[#ffffff] via-[#00ccff] to-[#00fff7] max-w-sm w-full">
            <article className=" bg-base-300 p-4 flex flex-col text-center">
                <figure className=" w-36 h-36 rounded-full mx-auto my-4">
                    <img src={photoUrl}
                        className="w-full h-full rounded-full" />
                </figure>
                <header className="my-2">
                    <h2 className="font-bold text-2xl">{firstName + " " + lastName}</h2>
                    {gender && age && <p className="text-sm mb-2">{gender + ", " + age}</p>}
                    <p className="text-sm">{about}</p>
                    {skills && <p className="mb-2">{skills.join(" | ")}</p>}
                </header>
                <footer className="ml-4">
                    <button className=" rounded py-3 cursor-pointer w-25 border border-red-700 m-1"
                        onClick={handleIgnored}>
                        <span className={`${isIgnoredHandled ? "loading loading-dots loading-xs mr-1" : ""}`}></span>
                        Ignore

                    </button>
                    <button className=" rounded px-6 py-3 cursor-pointer border border-green-300 m-1"
                        onClick={handleInterested}>
                        <span className={`${isInterestedHandled ? "loading loading-dots loading-xs mr-1" : ""}`}></span>
                        Interested
                    </button>
                </footer>
            </article>
        </div>
    );
};

export default FeedCard;