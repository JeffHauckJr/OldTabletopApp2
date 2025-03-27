import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom"
import React from "react";


const Navbar = () => {
    const { user, logout } = useUser();

    console.log("Navbar User object:", user); // Debugging

    return (
        <nav>
            <h1>My D&D App</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                {user.email ? (
                    <>
                        <li>Welcome, {user.email}!</li>
                        <li><button onClick={logout}>Logout</button></li>
                    </>
                ) : (
                    <li><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
};


export default Navbar;