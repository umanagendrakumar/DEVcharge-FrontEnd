import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";

const Login = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errorMessage, setErrorMessage] = useState();
    const [isNewUser, setIsNewUser] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {

            const res = await axios.post(BASE_URL + "/login",
                {
                    emailId,
                    password
                },
                {
                    withCredentials: true
                }
            );
            dispatch(addUser(res.data));
            return navigate("/feed");
        }
        catch (err) {
            setErrorMessage(err?.response?.data || "Something went wrong!");
        }
    }
    const handleSignUp = async () => {
        try {
            if (password !== confirmPassword) {
                setErrorMessage("Passwords do not match!");
                return;
            }
            const res = await axios.post(BASE_URL + "/signup",
                {
                    firstName,
                    lastName,
                    emailId,
                    password
                },
                {
                    withCredentials: true
                }
            );
            dispatch(addUser(res?.data?.data));
            navigate("/profile/edit")
        } catch (err) {
            setErrorMessage(err?.response?.data || "Something went wrong!");
        }
    }

    const setToggle = () => {
        setIsNewUser(!isNewUser);
    }

    return (
        <div className=" rounded p-8 bg-black mx-auto w-full max-w-120">

            <div>
                <h2 className="mt-4 text-sm">EmailId :</h2>
                <input
                    type="email"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    className="border mt-2 p-2 w-full" />
            </div>
            <div>
                <h2 className="mt-4 text-sm">Password :</h2>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border mt-2 p-2 w-full" />
            </div>

            {isNewUser && (
                <>

                    <div>
                        <h2 className="mt-4 text-sm">Confirm Password :</h2>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="border mt-2 p-2 w-full" />
                    </div>
                    <div>
                        <h2 className="mt-4 text-sm">FirstName :</h2>
                        <input type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="border mt-2 p-2 w-full" />
                    </div>
                    <div>
                        <h2 className="mt-4 text-sm">LastName :</h2>
                        <input type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="border mt-2 p-2 w-full" />
                    </div>
                </>
            )}



            <div className="text-center font-bold text-red-400 mt-4">{errorMessage}</div>

            <button className="mt-6 px-6 py-2 rounded cursor-pointer bg-primary hover:bg-base-300"
                onClick={isNewUser ? handleSignUp : handleLogin}>
                {isNewUser ? "SignUp" : "Login"}
            </button>

            <p className="text-right  text-sm font-medium cursor-pointer"
                onClick={setToggle}>
                {isNewUser ? "Already have an account" : "I'm a New User"}
            </p>
        </div>
    );

};

export default Login;