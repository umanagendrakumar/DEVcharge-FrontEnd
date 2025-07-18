import axios from "axios";

import { removeUserFromFeed } from "../utils/store/feedSlice";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../constants";

const FeedCard = ({ user }) => {
    const { firstName, lastName, age, gender, skills, about, _id, photoUrl } = user;

    const dispatch = useDispatch();

    const handleRequest = async (status) => {
        const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + _id,
            {},
            { withCredentials: true }
        );
        dispatch(removeUserFromFeed(_id));
    }
    
    return (
        <article className=" bg-base-300 p-4 w-full rounded-xl max-w-md flex flex-col text-center pb-2">
            <figure className=" w-45 h-45 rounded-full mx-auto my-4">
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
                <button className=" rounded px-6 py-3 cursor-pointer w-25 bg-black hover:text-red-500 m-1"
                    onClick={() => handleRequest("ignore")}>
                    Ignore 
                    
                </button>
                <button className=" rounded px-6 py-3 cursor-pointer bg-black hover:text-green-500 m-1"
                    onClick={() => handleRequest("interested")}>
                    Interested
                </button>
            </footer>
        </article>
    );
};

export default FeedCard;