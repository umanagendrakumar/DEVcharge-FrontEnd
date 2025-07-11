import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIgnoredProfiles } from "../utils/store/ignoredProfilesSlice";
import UserCard from "../components/UserCard";
import Empty from "../components/Empty";
import { BASE_URL } from "../constants";

const IgnoredProfiles = () => {
    const dispatch = useDispatch();

    const fetchIgnoredProfiles = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/ignoredProfiles", {
                withCredentials: true
            });
            dispatch(addIgnoredProfiles(res?.data));
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchIgnoredProfiles();
    }, []);

    const ignoredProfiles = useSelector((store) => store.ignoredProfiles);

    if (!ignoredProfiles) return <h1>Loading Profiles...</h1>;
    if (ignoredProfiles.length === 0) return <Empty value={"Profiles Ignored"}/>;
    return (
        <div className=" w-full p-2 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-2 border-b border-gray-500 p-2">{ignoredProfiles.length} Profile(s) Ignored</h1>
            {
                ignoredProfiles.map((profile) => {
                    return <UserCard key={profile._id} user={profile} />
                })
            }
        </div>
    );
}

export default IgnoredProfiles;
