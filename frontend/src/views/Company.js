import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getCompany } from '../services/CompanyService';
import "../App.css";
import Dashboard from "./Dashboard"

const Company = () => {
  const [Companys, setCompanys] = useState([]);

  useEffect(() => {
   let mounted = true;
   getCompany()
     .then(data => {
       if(mounted) {
         setCompanys(data)
       }
     })
   return () => mounted = false;
 }, [])
 console.log(Companys)
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
            <th >ID</th>
                  <th>Company Name</th>
                  <th>Criteria</th>
                  <th>Salary</th>
                  <th>Job Role</th>
                  <th>Location</th>
                  <th>Description</th>
                  <th>Last Date to Apply</th>       
            </tr>
        </thead>
        <tbody>
            {Companys.map((comp) =>
            <tr key={comp.id}>
                <td>{comp.companyId}</td>
                <td>{comp.companyName}</td>
                <td>{comp.decription}</td>
                <td>{comp.salary}</td>
                <td>{comp.jobrole}</td>
                <td>{comp.location}</td>
                <td>{comp.criteria}</td>
                <td>{comp.lastdate}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  </>
  );
};

export default Company;