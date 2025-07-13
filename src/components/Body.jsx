import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "../constants";

const Body = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const userDetails = async () => {
        try {
            const res = await axios.get(BASE_URL + "/profile/view", {
                withCredentials: true
            });
            dispatch(addUser(res.data));
            navigate("/feed"); // when we visit app if user already logged in yesterday then he redirects to feed page.

        }
        catch (err) {
            if (err?.status === 401) {
                navigate("/")
            }
            // console.log(err.status);
        }
    };
    useEffect(() => {
        userDetails();
    }, []);

    return (
        <>
            <Header />
            <main className=" bg-black flex-1 flex justify-center items-center p-4">
                <Outlet />
            </main>
        </>
    );
};

export default Body;