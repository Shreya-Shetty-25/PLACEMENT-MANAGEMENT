import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getStudents } from '../services/StudentService';
import "../App.css";
import Dashboard from "./Dashboard"

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
   let mounted = true;
   getStudents()
     .then(data => {
       if(mounted) {
         setStudents(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
  <>
  
   <div className="container-fluid side-container">
    {/* <div>
    <Dashboard/>
    </div> */}

   <div className="row side-row" >
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Enrollment</th>
            <th>Email</th>
            <th>Branch</th>
            <th>Spi</th>
            
            
            </tr>
        </thead>
        <tbody>
            {students.map((stu) =>
            <tr key={stu.id}>
                <td>{stu.studentId}</td>
                <td>{stu.FirstName}</td>
                <td>{stu.LastName}</td>
                <td>{stu.enrollment}</td>
                <td>{stu.Email}</td>
                <td>{stu.branch}</td>
                <td>{stu.avg_spi}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  </>
  );
};

export default Students;