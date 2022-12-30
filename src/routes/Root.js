import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { fetchAllPost } from "../api/API";

export default function Root() {
    const [token, setToken] =useState(localStorage.getItem('token'));
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [posts, setPosts] = useState(localStorage.getItem('posts'));

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [token])

    function logout() {
       localStorage.removeItem('token');
       setToken('');
       setIsLoggedIn(false);
    }

    useEffect(() => {
        Promise.all([fetchAllPost()])
        .then(([posts]) => {
            setPosts(localStorage.setItem('posts', JSON.stringify(posts)))
        })
    }, []);


    return (
        <div>
            <header>
                <h2 className="webName">Stranger's Things</h2>
                <nav className="headerLink">
                    <Link to="home" className="linkStyle">Home</Link>
                    <Link to="posts" className="linkStyle">Posts</Link>
                    {token ? <Link to="profile" className="linkStyle">Profile</Link> : null}
                    {token ? null : <Link to="register" className="linkStyle">Register</Link>}
                    {token ? null : <Link to="login" className="linkStyle">Login</Link>}
                    {token ? <button onClick={logout} className="logoutButton">Log Out</button> : null}
                </nav>
            </header>
            <main>
                <Outlet 
                context={[
                    token, setToken,
                    isLoggedIn,setIsLoggedIn
                    ]}
                />
            </main>
        </div>
    );
}