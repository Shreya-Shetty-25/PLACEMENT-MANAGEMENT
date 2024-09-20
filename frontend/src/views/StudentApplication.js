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

  const handleAccept = async (applicationId) => {
    console.log("o")
    try {
      await axios.patch(`http://127.0.0.1:8000/applications/update_status/${applicationId}/`, {
        status: "accepted",
      });
      alert("Application accepted");
      setApplications((prevApplications) =>
        prevApplications.map((app) =>
          app.id === applicationId ? { ...app, status: "accepted" } : app
        )
      );
    } catch (error) {
      console.error("Error accepting application:", error);
    }
  };
  
  const handleReject = async (applicationId) => {
    try {
      await axios.patch(`http://127.0.0.1:8000/applications/update_status/${applicationId}/`, {
        status: "rejected",
      });
      alert("Application rejected");
      setApplications((prevApplications) =>
        prevApplications.map((app) =>
          app.id === applicationId ? { ...app, status: "rejected" } : app
        )
      );
    } catch (error) {
      console.error("Error rejecting application:", error);
    }
  };
  
  return (
    <div className="container-fluid side-container" style={{ marginTop: "20px" }}>
      <Dashboard />
      <div className="row side-row">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Enrollment</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Company</th>
              <th>Date Applied</th>
              <th>CV</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.student.enrollment}</td>
                <td>{app.student.FirstName}</td>
                <td>{app.student.LastName}</td>
                <td>{app.company.companyName}</td>
                <td>{app.applied_date}</td>
                <td>
                  <a
                    href={`http://127.0.0.1:8000/applications/download_cv/${app.id}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </td>
                <td>{app.status}</td>
                <td>
                  {app.status === "Pending" ? (
                    <>
                      <Button
                        variant="success"
                        onClick={() => handleAccept(app.id)}
                        disabled={app.status !== "Pending"}
                      >
                        Accept
                      </Button>
                      <Button
                        variant="danger"
                        style={{ marginLeft: "8px" }}
                        onClick={() => handleReject(app.id)}
                        disabled={app.status !== "Pending"}
                      >
                        Reject
                      </Button>
                    </>
                  ) : (
                    <Button variant="secondary" disabled>
                      Status Updated
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default StudentApplication;
