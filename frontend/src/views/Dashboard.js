import React, { useState, useEffect } from 'react';
import useAxios from "../utils/useAxios";
import { jwtDecode } from 'jwt-decode';
import './Dashboard.css'; // Ensure you import the CSS file
import {NavLink} from 'react-router-dom';
// import {Navbar} from 'react-bootstrap';
import Navbar from './Navbar';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
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
          <div className='sidebar'>
    <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Navigation
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/students" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list">Students List</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/manage" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Manage Students</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/company" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Companies</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/managecompany" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Manage Companies</CDBSidebarMenuItem>
            </NavLink>
           
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>

    </div>
  );
}

export default Dashboard;
