import React from "react";
import WelcomeCard from "./components/LandingScreen";
import LoginScreen from "./components/LoginScreen";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/" element={<WelcomeCard />} />
      </Routes>
    </Router>
  );  
};

export default App;
