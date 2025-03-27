import React from "react";
import { useUser } from "../context/UserContext";

const Home = () => {
    const { user } = useUser();

    console.log("User object:", user); // Debugging

    return (
        <div>
            <h1>Welcome to the D&D Campaign App!</h1>
            {user.email ? (
                <p>Welcome Back, {user.email}!</p>
            ) : (
                <p>Please log in to start your adventure</p>
            )}
        </div>
    );
};


export default Home;