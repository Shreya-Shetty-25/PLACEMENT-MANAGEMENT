import React, { useState, useEffect , useContext} from 'react';
import useAxios from "../utils/useAxios";
import { jwtDecode } from 'jwt-decode';
import './Dashboard.css'; // Ensure you import the CSS file
import {NavLink} from 'react-router-dom';
import AuthContext from '../context/AuthContext';
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
  const { role, user } = useContext(AuthContext);
  console.log('Role:', role);
  console.log('Token:', token);
  
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
    <div className='container-fluid side-container' style={{marginTop:"30px"}}>
    <div className="containerss">
          <div className='sidebar'>
          
            {role==='admin' &&<>
              <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Navigation
        </CDBSidebarHeader>
        <CDBSidebarContent>
             <CDBSidebarMenu><NavLink exact to="/" activeClassName="activeClicked">
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
            <NavLink exact to="/studentapplication" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Student Applications</CDBSidebarMenuItem>
            </NavLink>
            </CDBSidebarMenu>
            
             </CDBSidebarContent>
            
            </CDBSidebar></>
            }
             {role==='student' &&<>
              <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Navigation
        </CDBSidebarHeader>
        <CDBSidebarContent>
             <CDBSidebarMenu><NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/students" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list">Students List</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/company" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Companies</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/applycompany" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Apply for Company</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/appstatus" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Application Status</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
          </> 
            }
    </div>
    </div>
    <div className='className="row side-row"'>
      <h1 className='container'>Welcome</h1>
    </div>
    </div>
  );
}

export default Dashboard;
