import { createContext, useState, useContext } from "react";
import React from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState("");
    console.log("User Context:", user)

    const login = (email) => {
        setUser( email );  // Fix the structure
        localStorage.setItem("user", JSON.stringify({ email }));
    };
    
    

    const logout = () => {
        setUser("");
        localStorage.removeItem("user");
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);