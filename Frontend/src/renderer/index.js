import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./context/UserContext";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <App />
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
);
