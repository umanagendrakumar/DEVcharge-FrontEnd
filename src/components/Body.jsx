import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Body = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const userDetails = async () => {
        try {
            const res = await axios.get("http://localhost:7777/profile/view", {
                withCredentials: true
            });
            dispatch(addUser(res.data));
        }
        catch (err) {
            if (err.status === 401) {
                navigate("/login")
            }
            console.log(err);
        }
    };
    useEffect(() => {
        userDetails();
    }, []);

    return (
        <>
            <Header />
            <main className=" flex-1 flex justify-center items-center p-4">
                <Outlet />
            </main>
        </>
    );
};

export default Body;