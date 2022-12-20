const GuestGreeting = () => {
    return(
        <div className="panel">
            <h2>Welcome to Stranger's Things!</h2>
            <h3>You are not logged in.</h3>
            <button className="loginButton">Log In</button>
        </div>
    )
};

export default GuestGreeting;