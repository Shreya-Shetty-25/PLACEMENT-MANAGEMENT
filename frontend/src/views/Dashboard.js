import React, { useState, useEffect } from 'react';
import useAxios from "../utils/useAxios";
import { jwtDecode } from 'jwt-decode';
import './Dashboard.css'; // Ensure you import the CSS file

function Dashboard() {
  const [res, setRes] = useState("");
  const [activeItem, setActiveItem] = useState("Dashboard"); // Keep track of the active nav item
  const api = useAxios();
  const token = localStorage.getItem("authTokens");

  if (token) {
    const decode = jwtDecode(token);
    var user_id = decode.user_id;
    var username = decode.username;
    var full_name = decode.full_name;
    var image = decode.image;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/test/");
        setRes(response.data.response);
      } catch (error) {
        console.log(error);
        setRes("Something went wrong");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await api.post("/test/");
        setRes(response.data.response);
      } catch (error) {
        console.log(error);
        setRes("Something went wrong");
      }
    };
    fetchPostData();
  }, []);

  // Function to handle click on nav items
  const handleNavClick = (itemName) => {
    setActiveItem(itemName); // Set the clicked item as active
  };

  return (
    <div className="containerss">
      <nav className="side-nav">
        <ul className="nav-menu">
          <li 
            className={`nav-item ${activeItem === "Dashboard" ? "active" : ""}`} 
            onClick={() => handleNavClick("Dashboard")}
          >
            <a href="#"><i className="fas fa-tachometer-alt"></i><span className="menu-text">Dashboard</span></a>
          </li>
          <li 
            className={`nav-item ${activeItem === "Users" ? "active" : ""}`} 
            onClick={() => handleNavClick("Users")}
          >
            <a href="#"><i className="fas fa-user"></i><span className="menu-text">Users</span></a>
          </li>
          <li 
            className={`nav-item ${activeItem === "Posts" ? "active" : ""}`} 
            onClick={() => handleNavClick("Posts")}
          >
            <a href="#"><i className="fas fa-file-alt"></i><span className="menu-text">Posts</span></a>
          </li>
          <li 
            className={`nav-item ${activeItem === "Media" ? "active" : ""}`} 
            onClick={() => handleNavClick("Media")}
          >
            <a href="#"><i className="fas fa-play"></i><span className="menu-text">Media</span></a>
          </li>
          <li 
            className={`nav-item ${activeItem === "Exit" ? "active" : ""}`} 
            onClick={() => handleNavClick("Exit")}
          >
            <a href="#"><i className="fas fa-sign-out-alt"></i><span className="menu-text">Exit</span></a>
          </li>
        </ul>
      </nav>

      <div className="dashboard-content">
        <h1>{activeItem} Content</h1>
        <p>{res}</p>
      </div>
    </div>
  );
}

export default Dashboard;
