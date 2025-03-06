import Navbar from "../components/NavBar";
import Home from "../pages/Home";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Navbar 
       style={{
        position: 'sticky', // Makes the Navbar stick at the top
        top: 0, // Sticks the Navbar to the very top of the viewport
        zIndex: 1000, // Ensures it stays above other elements
        backgroundColor: '#FFFFFF', // Background color to match your theme
        padding: '10px 20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional: Add shadow for better visibility
      }}/>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App