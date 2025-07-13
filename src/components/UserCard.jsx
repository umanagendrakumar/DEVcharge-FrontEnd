import Photo from "../assets/Photo.png";

import { FaCheck, FaTimes } from 'react-icons/fa';
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeProcessedRequest } from "../utils/store/requestsSlice";
import { BASE_URL } from "../constants";

const UserCard = ({ user, isRequestsReceived, isConnections }) => {

    let { firstName, lastName, age, gender, skills, about, photoUrl } = user.fromId;
    if (typeof user.toId === "object") {
        ({ firstName, lastName, age, gender, skills, about, photoUrl } = user.toId);
    }

    const requestId = user._id;

    const dispatch = useDispatch();

    const reviewRequest = async (review) => {
        const res = await axios.post(BASE_URL + "/request/review/" + review + "/" + requestId,
            {},
            {
                withCredentials: true
            }
        );
       
        dispatch(removeProcessedRequest(requestId));

    };

    return (
        <div className=" bg-base-300 hover:bg-black rounded p-4 m-1 max-w-2xl w-full flex gap-4 items-center">
            <img src={Photo}
                alt="connectionPhoto"
                className="border w-12 rounded-2xl" />
            <div className=" flex-1">
                <h2 className="font-bold text-xl">{firstName + " " + lastName}</h2>
                {!isConnections && age && gender && <h2 className="text-sm mb-2">{age + ", " + gender}</h2>}
                <h2>{about}</h2>
                {skills && <h2 className="text-sm mb-2">{skills.join(", ")}</h2>}
            </div>
            {isRequestsReceived && (
                <div className="flex gap-4">
                    <button
                        onClick={() => reviewRequest("accepted")}
                        className="cursor-pointer">
                        <FaCheck className="border text-3xl rounded-full p-1" color="green" />
                    </button>
                    <button
                        onClick={() => reviewRequest("rejected")}
                        className="cursor-pointer">
                        <FaTimes className="border text-3xl rounded-full p-1" color="red" />
                    </button>
                </div>
            )}
        </div>
    );
}
export default UserCard;