import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addRequestsSent } from "../utils/store/requestsSentSlice";
import UserCard from "../components/UserCard";
import Empty from "../components/Empty";

const RequestsSent = () => {

    const dispatch = useDispatch();

    const fetchRequestSent = async () => {
        try {
            const res = await axios.get("http://localhost:7777/user/request/sent", {
                withCredentials: true
            });
            dispatch(addRequestsSent(res?.data));
        } catch (err) {
            console.error("Error fetching sent requests:", err);
        }
    };
    useEffect(() => {
        fetchRequestSent();
    }, []);

    const requestsSent = useSelector((store) => store.requestsSent);

    if (!requestsSent) return <h2>Loading Requests......</h2>;
    if (requestsSent.length === 0) return <Empty value={"Requests Sent"}/>;
    return (
         <div className="w-full p-2 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-2 border-b border-gray-500 p-2">{requestsSent.length} Request(s) sent</h1>
            {
                requestsSent.map((request) => {
                    return <UserCard key={request._id} user={request} />
                })
            }
        </div>
    );
}

export default RequestsSent;