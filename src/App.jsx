import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Home from  "../components/Home/Home";


const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  // Add logic to set showLogin based on user interaction or application state

  return (
    <div className="app">
      <Navbar setShowLogin={setShowLogin} /> {/* Fixed prop name */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} /> {/* Capitalized component name */}
        <Route path="/order" element={<PlaceCart />} /> {/* Capitalized component name */}
      </Routes>
      <Footer />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    </div>
  );
};

export default App;
