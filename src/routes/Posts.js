import UserPost from "../components/UserPost";
import GuestPost from "../components/GuestPost";
import { useOutletContext } from "react-router-dom";

const Posts = () => {
    const [isLoggedIn, setIsLoggedIn] = useOutletContext();
    if (isLoggedIn) {
        return <UserPost />;
    }
    return <GuestPost />;
};

export default Posts;