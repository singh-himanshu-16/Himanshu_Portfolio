import React from 'react'
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

//portfolio website 

//1.navbar
//2.homepage
//3.tech stack
//4.experience
//5.projects


function App() {
  return (
  <div>
    <div><Navbar /></div>
    <div><Homepage/></div>
    <div><TechStack /></div>
    <div className="app"><Experience/></div>
    <div className="app"><Projects/></div>
    </div>
  );
}

export default App;
