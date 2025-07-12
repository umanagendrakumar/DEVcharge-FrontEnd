import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/store/connectionsSlice";
import UserCard from "../components/UserCard";
import Empty from "../components/Empty";
import { BASE_URL } from "../constants";

const Connections = () => {
    const dispatch = useDispatch();
    const connectionsData = useSelector((store) => store.connections);

    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connections", {
                withCredentials: true
            });
            dispatch(addConnections(res?.data));
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchConnections();
    }, [])

    if (!connectionsData) return <h1>Fetching Connections....</h1>
    if (connectionsData.length === 0) return <Empty value={"Connections"}/>
    return (
        // To show recent connections first, change to flex-col-reverse
        <div className=" w-full p-2 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-2 border-b border-gray-500 p-2">{connectionsData.length} Connection(s)</h1>
            {
                connectionsData.map((connection) => {
                    return <UserCard key={connection._id} user={connection} isConnections={true}/>
                })
            }
        </div>
    );
}

export default Connections;