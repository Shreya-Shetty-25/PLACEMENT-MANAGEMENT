import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
// import SideNav from './views/sidenav'
import HomePage from './views/HomePage'
import Register from './views/Register'
import LoginPage from './views/LoginPage'
import Dashboard from './views/Dashboard'
import Navbar from './views/Navbar'
import Students from './views/Students'
import Manage from "./views/Manage"
import ManageCompany from "./views/ManageCompany"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Company from './views/Company'
import ApplyCompany from './views/ApplyCompany'
import StudentApplication from './views/StudentApplication'
import StudentStatus from './views/StudentStatus'
// import HireStudents from './views/HireStudents'

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
          <Route path="/company" element={<Company/>} />
          <Route path="/managecompany" element={<ManageCompany/>} />
          <Route path="/applycompany" element={<ApplyCompany/>} />
          <Route path="/studentapplication" element={<StudentApplication/>} />
          <Route path="/appstatus" element={<StudentStatus/>} />
          {/* <Route path="/hirestudent" element={<HireStudents/>} /> */}
        </Routes>
      
      </AuthProvider>
    </Router>
  )
}

export default App
