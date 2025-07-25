import { useState } from "react";
import FeedCard from "../components/FeedCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../constants";
import { addUser } from "../utils/store/userSlice";

const EditProfile = ({ user }) => {

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age || "");
    const [gender, setGender] = useState(user.gender || "");
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl || "");
    const [about, setAbout] = useState(user.about);
    const [skills, setSkills] = useState(user.skills);
    const [errorMessage, setErrorMessage] = useState("");
    const [isSaving, setIsSaving] = useState(false);


    const dispatch = useDispatch();

    const saveProfile = async () => {
        setIsSaving(true);
        try {
            const res = await axios.put(BASE_URL + "/profile/edit",
                {
                    firstName,
                    lastName,
                    age,
                    gender,
                    photoUrl,
                    about,
                    skills,
                },
                {
                    withCredentials: true
                }
            );
            dispatch(addUser(res?.data));
            setErrorMessage("");
            setIsSaving(false);
        }
        catch (err) {
            setErrorMessage(err?.response?.data);
            setIsSaving(false);
        }

    }

    return (
        <div className="p-2 w-full flex flex-col-reverse gap-8 justify-center items-center lg:flex-row ">
            <div className=" rounded p-8 bg-black w-full max-w-md">
                <div className="mb-4">
                    <h2>FirstName :</h2>
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="border mt-2 p-2 w-full focus:border-blue-500 focus:outline-none" />
                </div>
                <div className="mb-4">
                    <h2>LastName :</h2>
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="border mt-1 p-2 w-full focus:border-blue-500 focus:outline-none" />
                </div>
                <div className="mb-4">
                    <h2 >Age :</h2>
                    <input
                        type="number"
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="border mt-1 p-2 w-full focus:border-blue-500 focus:outline-none" />
                </div>
                <div className="mb-4">
                    <h2 >Gender :</h2>
                    <input
                        type="text"
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="border mt-1 p-2 w-full focus:border-blue-500 focus:outline-none" />
                </div>
                <div className="mb-4">
                    <h2 >PhotoURL :</h2>
                    <input
                        type="text"
                        name="photoUrl"
                        value={photoUrl}
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        className="border mt-1 p-2 w-full focus:border-blue-500 focus:outline-none" />
                </div>
                <div className="mb-4">
                    <h2 >About :</h2>
                    <input
                        type="text"
                        name="about"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        className="border mt-1 p-2 w-full focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                    <h2 >Skills :</h2>
                    <input
                        type="text"
                        name="skills"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        className="border mt-1 p-2 w-full focus:border-blue-500 focus:outline-none" />
                </div>

                <div className="text-center text-red-400 mt-4">{errorMessage}</div>


                <button className="mt-8 px-6 py-2 rounded cursor-pointer bg-gradient-to-r from-[#905ef2] via-[#3e68f2] to-[#03d9ff]"
                    onClick={saveProfile}>
                    <span className={`${isSaving ? "loading loading-dots loading-xs mr-1" : ""}`}></span>
                    Save
                </button>
            </div>
            <div className="w-full max-w-sm">
                <FeedCard user={user} />
            </div>
        </div>
    );

}

export default EditProfile;