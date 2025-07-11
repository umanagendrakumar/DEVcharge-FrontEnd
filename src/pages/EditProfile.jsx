import { useState } from "react";
import UserCard from "../components/FeedCard";
import axios from "axios";
import { useDispatch } from "react-redux";


const EditProfile = ({ user }) => {

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age || "");
    const [gender, setGender] = useState(user.gender || "");
    const [photoURL, setPhotoURL] = useState(user.photoURL);
    const [about, setAbout] = useState(user.about);
    const [skills, setSkills] = useState(user.skills);

    const saveProfile = async () => {
        try {
            const res = await axios.patch("http://localhost:7777/profile/edit",
                {
                    firstName,
                    lastName,
                    age,
                    gender,
                    photoURL,
                    about,
                    skills,
                },
                {
                    withCredentials: true
                }
            );
            console.log(res)
        }
        catch (err) {
            console.log(err);
        }

    }

    return (
        <div className="p-2 w-full flex flex-col-reverse gap-8 justify-center items-center lg:flex-row ">
            <div className="border rounded p-8 bg-black w-full max-w-md">
                <div className="mb-4">
                    <h2>FirstName :</h2>
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="border mt-2 p-2 w-full" />
                </div>
                <div className="mb-4">
                    <h2>LastName :</h2>
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="border mt-1 p-2 w-full" />
                </div>
                <div className="mb-4">
                    <h2 >Age :</h2>
                    <input
                        type="number"
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="border mt-1 p-2 w-full" />
                </div>
                <div className="mb-4">
                    <h2 >Gender :</h2>
                    <input
                        type="text"
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="border mt-1 p-2 w-full" />
                </div>
                <div className="mb-4">
                    <h2 >PhotoURL :</h2>
                    <input
                        type="text"
                        name="photoURL"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="border mt-1 p-2 w-full" />
                </div>
                <div className="mb-4">
                    <h2 >About :</h2>
                    <input
                        type="text"
                        name="about"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        className="border mt-1 p-2 w-full" />
                </div>
                <div>
                    <h2 >Skills :</h2>
                    <input
                        type="text"
                        name="skills"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        className="border mt-1 p-2 w-full" />
                </div>

                <button className="mt-8 border px-4 py-1 rounded cursor-pointer hover:bg-base-300"
                    onClick={saveProfile}>
                    Save
                </button>
            </div>
            <div className="w-full max-w-sm">
                <UserCard user={user} />
            </div>
        </div>
    );

}

export default EditProfile;