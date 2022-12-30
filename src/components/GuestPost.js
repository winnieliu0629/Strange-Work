import { useState, useEffect } from "react";
import { fetchAllPost } from "../api/API";
import GuestPostList from "./GuestPostList";

const GuestPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Promise.all([fetchAllPost()])
        .then(([posts]) => {
            setPosts(posts)
        })
    }, []);
    
    return (
        <div className="panel">
            <h1>Welcome Guest!</h1>
            <GuestPostList posts={posts} />
        </div>
    )
};

export default GuestPost;