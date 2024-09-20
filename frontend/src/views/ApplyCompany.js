import React, { useState, useEffect , useContext} from 'react';
import { Table, Button, Modal,Form} from 'react-bootstrap';
import { getCompany } from '../services/CompanyService';
import { applyToCompany } from '../services/ApplicationService'; // Import the apply function
import { getStudentIdByEmail } from '../services/ApplicationService';
import AuthContext from '../context/AuthContext';

import "../App.css";

const ApplyCompany = () => {
  const [Companys, setCompanys] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [studentId, setStudentId] = useState(null); // Replace with actual student ID from context or props
  const [cvFile, setCvFile] = useState(null);
  const token = localStorage.getItem("authTokens");
  const { role, user } = useContext(AuthContext);
  console.log('Role: hello', role);
  console.log('Token:', token);
  console.log('mail:', user?.email);

  useEffect(() => {
    let mounted = true;
    getCompany()
      .then(data => {
        if (mounted) {
          setCompanys(data);
        }
      });
    return () => mounted = false;
  }, []);

  const handleApplyClick = (company) => {
    setSelectedCompany(company);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCompany(null);
  };
  const handleCvChange = (e) => {
    setCvFile(e.target.files[0]);
  };
  const handleApplyNow = async () => {
    if (selectedCompany && user?.email) {
      try {
        console.log('mail:again', user.email);
        // 1. Fetch the student ID based on the email
        const id = await getStudentIdByEmail(user.email);
        console.log("id",id)
        setStudentId(id); // Set the student ID
        
        if (id) {
          // 2. Proceed to apply to the selected company using the student ID
          await applyToCompany(id, selectedCompany.companyId, cvFile);
          console.log("Company ID:", selectedCompany.companyId);
          alert('Application submitted successfully!'); // Show success message
        } else {
          alert('Failed to fetch student ID.');
        }
      } catch (error) {
        console.error('Error applying to company:', error);
        alert('Failed to submit application.'); // Show error message
      }
      
      // Close modal after application attempt
      handleCloseModal();
    } else {
      alert('Email or company information is missing.');
    }
  };

  return (
    <>
      <div className="container-fluid side-container">
        <div className="row side-row">
          <p id="before-table"></p>
          <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Criteria</th>
                <th>Salary</th>
                <th>Job Role</th>
                <th>Location</th>
                <th>Description</th>
                <th>Last Date to Apply</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Companys.map((comp) => (
                <tr key={comp.id}>
                  <td>{comp.companyName}</td>
                  <td>{comp.criteria}</td>
                  <td>{comp.salary}</td>
                  <td>{comp.jobrole}</td>
                  <td>{comp.location}</td>
                  <td>{comp.decription}</td>
                  <td>{comp.lastdate}</td>
                  <td>
                    <Button variant="primary" onClick={() => handleApplyClick(comp)}>Apply</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      {/* Modal for Company Details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCompany ? selectedCompany.companyName : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCompany && (
            <div>
              <p><strong>Criteria:</strong> {selectedCompany.criteria}</p>
              <p><strong>Salary:</strong> {selectedCompany.salary}</p>
              <p><strong>Job Role:</strong> {selectedCompany.jobrole}</p>
              <p><strong>Location:</strong> {selectedCompany.location}</p>
              <p><strong>Description:</strong> {selectedCompany.decription}</p>
              <p><strong>Last Date to Apply:</strong> {selectedCompany.lastdate}</p>
              <Form.Group controlId="cvUpload">
                <Form.Label>Upload your CV</Form.Label>
                <Form.Control type="file" accept=".pdf,.doc,.docx" onChange={handleCvChange} />
              </Form.Group>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleApplyNow} disabled={!cvFile}>
            Apply Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ApplyCompany;
