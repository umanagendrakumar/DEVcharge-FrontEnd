import { RiMenuUnfoldLine } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import photo from "../assets/Photo.png";
import { useState } from "react";

import SideBar from "./SideBar";

import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/store/userSlice";
import { removeFeed } from "../utils/store/feedSlice";
import { removeConnections } from "../utils/store/connectionsSlice";
import { removeRequests } from "../utils/store/requestsSlice";
import { removeIgnoredProfiles } from "../utils/store/ignoredProfilesSlice";
import { BASE_URL } from "../constants";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const setMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const user = useSelector((store) => store.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await axios.post(BASE_URL + "/logout", {}, {
                withCredentials: true
            });
            dispatch(removeUser());
            dispatch(removeFeed());
            dispatch(removeConnections());
            dispatch(removeRequests());
            dispatch(removeIgnoredProfiles());
            return navigate("/");

        }
        catch (err) {
            console.log(err);
        }
    };

    const navigateToProfile = () => {
        navigate("/profile/edit");
    }

    return (
        <>
            <header className=" bg-base-300 p-4 sticky top-0 h-20 flex items-center">
                <nav className="w-full flex justify-between items-center">

                    {isMenuOpen && <SideBar closeMenu={() => setIsMenuOpen(false)} />}

                    {
                        user && (
                            <button aria-label="Open menu"
                                className="text-2xl cursor-pointer relative"
                                onClick={setMenu}
                            >
                                <RiMenuUnfoldLine />
                            </button>
                        )
                    }


                    <h1 className="font-bold text-3xl mx-auto">
                        DevCharge
                    </h1>

                    {
                        user && (<div className="flex gap-2 ">
                            <button onClick={navigateToProfile}>
                                <img src={photo} alt="User Profile" className="rounded-[50%] w-8 cursor-pointer" />
                            </button>
                            <button
                                className="cursor-pointer text-xl"
                                onClick={handleLogout}>
                                <RiLogoutCircleRLine />
                            </button>
                        </div>
                        )
                    }

                </nav>
            </header>
        </>
    );
}
export default Header;