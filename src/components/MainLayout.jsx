import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
// import "../pages/home/home.css";
import "../components/home.css";

export default function MainLayout({ login, setLogin }) {
  console.log(login);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div>  
          <Outlet />
        </div>
      </div>
    </div>
  );
}
