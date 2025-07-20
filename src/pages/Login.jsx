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
    const [isPasswordForgot, setIsPasswordForgot] = useState(false);

    const [isProcessing, setIsProcessing] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        setIsProcessing(true);
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
            setIsProcessing(false);
            dispatch(addUser(res.data));
            return navigate("/feed");
        }
        catch (err) {
            setErrorMessage(err?.response?.data || "Something went wrong! Refresh page 2 times!!");
            setIsProcessing(false);
        }
    }
    const handleSignUp = async () => {
        setIsProcessing(true);
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
            setIsProcessing(false);
            dispatch(addUser(res?.data?.data));
            navigate("/profile/edit")
        } catch (err) {
            setErrorMessage(err?.response?.data || "Something went wrong! Refresh page 2 times!!");
            setIsProcessing(false);
        }
    }
    const handleForgotPassword = async () => {
        setIsProcessing(true);
        try {
            const res = await axios.patch(BASE_URL + "/profile/edit/password", {
                emailId,
                newPassword: password,
                confirmNewPassword: confirmPassword
            },
                {
                    withCredentials: true
                }
            );
            setIsProcessing(false);
        } catch (err) {
            setErrorMessage(err?.response?.data || "Something went wrong! Refresh page 2 times!!");
            setIsProcessing(false);
        }
    }

    const setToggle = () => {
        setErrorMessage("")
        setIsNewUser(!isNewUser);
    }

    const passwordForgot = () => {
        setErrorMessage("");
        setIsPasswordForgot(true);
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


            {
                isNewUser || isPasswordForgot && (
                    <div>
                        <h2 className="mt-4 text-sm">Confirm Password :</h2>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="border mt-2 p-2 w-full" />
                    </div>
                )
            }

            {
                isNewUser && (
                    <>
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
                )
            }

            {
                !isNewUser && !isPasswordForgot && (
                    <div className="text-right mt-1 w-max ml-auto text-sm cursor-pointer"
                        onClick={passwordForgot}>
                        Forgot Password
                    </div>
                )
            }

            <div className="text-center text-red-400 mt-4">{errorMessage}</div>

            <button className="mt-2 px-6 py-2 rounded cursor-pointer bg-primary hover:bg-base-300"
                onClick={isNewUser ? handleSignUp : (isPasswordForgot ? handleForgotPassword : handleLogin)}>

                <span className={`${isProcessing ? "loading loading-dots loading-xs mr-1" : ""}`}></span>
                {isNewUser ? "SignUp" : (isPasswordForgot ? "Update" : "Login")}

            </button>

            {
                !isPasswordForgot && (
                    <div className="text-right w-max ml-auto text-sm font-medium cursor-pointer"
                        onClick={setToggle}>
                        {isNewUser ? "Already have an account" : "I'm a New User"}
                    </div>
                )
            }



        </div>
    );

};

export default Login;