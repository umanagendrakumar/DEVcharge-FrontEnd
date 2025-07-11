import axios from "axios";

import { removeUserFromFeed } from "../utils/store/feedSlice";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../constants";

const FeedCard = ({ user }) => {
    const { firstName, lastName, age, gender, skills, about, _id } = user;

    const dispatch = useDispatch();

    const handleRequest = async (status) => {
        const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + _id,
            {},
            { withCredentials: true }
        );
        dispatch(removeUserFromFeed(_id));
    }
    
    return (
        <article className="bg-black w-full rounded max-w-sm flex flex-col text-center pb-2">
            <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjRkfdV2CW7Sg2sT7e3zRmUyUUIOh5IW0bw&s"
                    alt="userPhoto"
                    className="rounded-t w-full" />
            </figure>
            <header className="my-2 ml-4">
                <h2 className="font-bold text-xl">{firstName + " " + lastName}</h2>
                {gender && age && <p className="text-sm mb-2">{gender + ", " + age}</p>}
                <p>{about}</p>
                {skills && <p className="mb-2">{skills.join(" | ")}</p>}
            </header>
            <footer className="ml-4">
                <button className=" border px-4 py-2 cursor-pointer hover:text-red-500 m-1"
                    onClick={() => handleRequest("ignore")}>
                    Ignore
                </button>
                <button className=" border px-4 py-2 cursor-pointer hover:text-green-500 m-1"
                    onClick={() => handleRequest("interested")}>
                    Interested
                </button>
            </footer>
        </article>
    );
};

export default FeedCard;