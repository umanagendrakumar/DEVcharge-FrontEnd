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
            dispatch(addUser(res?.data));

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
        const setRealVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setRealVh();
        window.addEventListener('resize', setRealVh);
        return () => window.removeEventListener('resize', setRealVh);
    }, []);

    return (
        <div className="flex flex-col min-h-[calc(var(--vh,1vh)*100)]">
            <Header />
            <main className="bg-black flex-1 flex justify-center items-center p-4">
                <Outlet />
            </main>
        </div>
    );
};

export default Body;