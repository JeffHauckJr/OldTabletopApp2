import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/login";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        {console.log("App is rendering")}
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
};

export default App;
