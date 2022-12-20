import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";
import { useOutletContext } from "react-router-dom";

const Home = () => {
    const [isLoggedIn] = useOutletContext();
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
};

export default Home;