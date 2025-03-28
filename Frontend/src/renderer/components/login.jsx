import { useState } from "react";
import { useUser } from "../context/UserContext";
import React from "react";
import axios from "axios"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.API_BASE_URL}/api/auth/login`, { email, password });
      
            if (response.data.token) {
              localStorage.setItem("authToken", response.data.token);
              console.log("Token saved:", response.data.token);
              
              login({ email });
            }
      
          } catch (err) {
            console.error("Login failed:", err.response?.data?.message || err.message);
          }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;