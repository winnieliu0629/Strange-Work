import { useOutletContext } from "react-router-dom";
import jwt_decode from 'jwt-decode';

const UserPost = () => {
    const [token] = useOutletContext();
    const { username } = jwt_decode(token);
    return (
        <div className="panel">
            <h1>Welcome {username}!</h1>
            <h4>message to me:</h4>
        </div>
    )
};

export default UserPost;