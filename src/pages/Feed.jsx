import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/store/feedSlice";
import { useEffect } from "react";
import FeedCard from "../components/FeedCard";
import Empty from "../components/Empty";
import { BASE_URL } from "../constants";

const Feed = () => {

    const feed = useSelector((store) => store.feed); //subscribing to feed slice.
    const dispatch = useDispatch();
    const getfeed = async () => {
        if (feed) return; //if feed is already present in store, do nothing.
        try { //else add data to store.
            const res = await axios.get(BASE_URL + "/user/feed", {
                withCredentials: true
            });
            console.log(res);
            dispatch(addFeed(res.data));
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getfeed();
    }, [])

    if (!feed) return <h1>Loading Feed....</h1>
    if (feed.length === 0) return <Empty value={"Profiles to Show in FEED"}/>
    return (
        <div className=" w-full p-2 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4 border-b border-gray-500 p-2">F ee d</h1>
            <FeedCard user={feed[0]} />
        </div>
    );
}

export default Feed; 
