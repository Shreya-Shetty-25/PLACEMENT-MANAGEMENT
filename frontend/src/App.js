import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import SideNav from './views/sidenav'
import HomePage from './views/HomePage'
import Register from './views/Register'
import LoginPage from './views/LoginPage'
import Dashboard from './views/Dashboard'
import Navbar from './views/Navbar'
import Students from './views/Students'
import Manage from "./views/Manage"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        
     
        <Routes>

          {/* <PrivateRoute element={<Dashboard />} path="/dashboard" exact /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/students" element={<Students/>} />
          <Route path="/manage" element={<Manage/>} />
        </Routes>
      
      </AuthProvider>
    </Router>
  )
}

export default App
