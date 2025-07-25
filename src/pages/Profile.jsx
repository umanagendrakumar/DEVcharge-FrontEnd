import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
    const user = useSelector((store) => store.user);
    return (
        user ? <EditProfile user={user}/> : <h1>Loading Profile.....</h1>
    );

}
export default Profile;