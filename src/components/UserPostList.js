import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';

const UserPostList = ({ posts }) => {
    const token = localStorage.getItem('token')
    const { username } = jwt_decode(token);
    const navigate = useNavigate();

    const navigateSinglePost = (_id, author, description, price, location, title, isAuthor, messages) => {
        navigate('/singlePost', {state: { _id, author, description, price, location, title, isAuthor, messages }});
    };
    const navigateSendMessage = (_id, author, description, price, location, title, isAuthor) => {
        navigate('/sendMessage', {state: { _id, author, description, price, location, title, isAuthor }});
    };

    return (
        <section>
            {
                posts.map(({ _id, author, description, price, location, title, isAuthor, willDeliver })=> (
                    <div className="posts">
                        <div key={_id} onClick={() => navigateSinglePost(_id, author, description, price, location, title, isAuthor)}>
                            <h2>{title}</h2>
                            {description ? <h4>Description: {description}</h4> : null}
                            {price ? <h4>Price: {price}</h4> : null}
                            {author ? <h4>Seller: {author.username}</h4> : null}
                            {location ? <h4>Location: {location}</h4> : null}
                            {willDeliver ? <h4>Willing to Deliver: Yes</h4> : <h4>Willing to Deliver: No</h4>}
                        </div>
                        <div>
                            {author.username === username ? null : <button onClick={() => navigateSendMessage(_id, author, description, price, location, title, isAuthor)}>Send Message</button>}
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default UserPostList;