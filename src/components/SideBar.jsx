import { RiMenuUnfold2Line } from "react-icons/ri";
import { Link } from "react-router-dom";


const SideBar = ({ closeMenu }) => {
    const sideBarItem = "hover:bg-gray-500 w-full border-t border-white py-2";

    return (
        <aside className="bg-base-300 z-10 text-right absolute left-0 top-0 p-4 pt-6"
            onClick={closeMenu}>
            <button className="mb-4 text-2xl cursor-pointer"><RiMenuUnfold2Line /></button>
            <ul className=" text-lg">
                <li className={sideBarItem}><Link to="/feed">Home</Link></li>
                <li className={sideBarItem}><Link to="/profile/edit">Profile</Link></li>
                <li className={sideBarItem}><Link to="/user/connections">Connections</Link></li>
                <li className={sideBarItem}><Link to="/user/requests">Requests Received</Link></li>
                <li className={sideBarItem}><Link to="/user/request/sent">Requests Sent</Link></li>
                <li className={`${sideBarItem} border-b`}><Link to="/user/ignoredProfiles">Ignored Profiles</Link></li>
            </ul>

        </aside>
    )
}
export default SideBar;