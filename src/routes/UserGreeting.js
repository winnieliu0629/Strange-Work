import { useOutletContext } from "react-router-dom";
import jwt_decode from 'jwt-decode';

const UserGreeting = () => {
    const [token] = useOutletContext();
    const { username } = jwt_decode(token);
    return(
        <div className="panel">
            <h1>Welcome to Stranger's Things!</h1>
            <h2>Logged in as {username}</h2>
            <button>Log Out</button>
        </div>
    )
};

export default UserGreeting;