import React from "react";
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar" style={{ paddingBottom: "100%" }}>
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin Panel</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="active">
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">Manage Users</p>
          <Link to="/addUsers" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltSharpIcon className="icon" />
              <span>Add Users</span>
            </li>
          </Link>
          <Link to="/viewUsers" style={{ textDecoration: "none" }}>
            <li>
              <StorefrontSharpIcon className="icon" />
              <span>View Users</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
