import UserPost from "./UserPost";
import GuestPost from "./GuestPost";
import { useOutletContext } from "react-router-dom";

const Posts = () => {
    const [isLoggedIn] = useOutletContext();
    if (isLoggedIn) {
        return <UserPost />;
    }
    return <GuestPost />;
};

export default Posts;