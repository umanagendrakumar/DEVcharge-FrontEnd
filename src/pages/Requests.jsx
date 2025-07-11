import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/store/requestsSlice";
import UserCard from "../components/UserCard";
import Empty from "../components/Empty";

const Requests = () => {

    const dispatch = useDispatch();

    const fetchRequest = async () => {
        try {
            const res = await axios.get("http://localhost:7777/user/request/received", {
                withCredentials: true
            });
            dispatch(addRequests(res?.data));
        }
        catch (err) {
            console.log("Errrrr" + err.status);
        }
    }
    useEffect(() => {
        fetchRequest();
    }, []);

    const requests = useSelector((store) => store.requests);

    if (!requests) return <h2>Loading Requests......</h2>
    if (requests.length === 0) return <Empty value={"Requests Received"}/>
    return (
        // To show recent requests first, change to flex-col-reverse
        <div className=" w-full p-2 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-2 border-b border-gray-500 p-2">{requests.length} Request(s) Received</h1>
            {
                requests.map((request) => {
                    return <UserCard key={request._id} user={request} isRequestsReceived={true} />
                })
            }
        </div>
    );

}

export default Requests;