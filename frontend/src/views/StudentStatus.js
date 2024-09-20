import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import Dashboard from "./Dashboard";

const StudentApplication = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/applications/applied/");
        console.log("lo", response.data);

        const enrichedApplications = await Promise.all(
          response.data.map(async (app) => {
            const studentResponse = await axios.get(`http://127.0.0.1:8000/students/${app.student}/`);
            const companyResponse = await axios.get(`http://127.0.0.1:8000/company/companies/${app.company}/`);

            return {
              ...app,
              student: studentResponse.data,
              company: companyResponse.data,
            };
          })
        );

        setApplications(enrichedApplications);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="container-fluid side-container" style={{ marginTop: "20px" }}>
      <Dashboard />
      <div className="row side-row">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Job Role</th>
              <th>Status</th>
              <th>Applied On</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.company.companyName}</td>
                <td>{app.company.jobrole}</td>
                <td>
                  <Button
                    variant={app.status === "accepted" ? "success" : app.status === "rejected" ? "danger" : "secondary"}
                    disabled
                  >
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </Button>
                </td>
                <td>{app.applied_date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default StudentApplication;
