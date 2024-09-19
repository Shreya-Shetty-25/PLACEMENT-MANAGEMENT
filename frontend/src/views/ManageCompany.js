import React, { useEffect, useState } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import AddCompanyModal from "./AddCompanyModal";
import UpdateCompanyModel from "./UpdateCompanyModel";
import { getCompany, deleteCompany } from "../services/CompanyService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ManageCompany = () => {
  const [companies, setCompanies] = useState([]);
  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editCompany, setEditCompany] = useState(null); // Initialize with null
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (companies.length && !isUpdated) {
      return;
    }
    getCompany()
      .then((data) => {
        if (mounted) {
          setCompanies(data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch companies:", error);
      });

    return () => {
      mounted = false;
      setIsUpdated(false);
    };
  }, [isUpdated]);

  const handleUpdate = (e, comp) => {
    e.preventDefault();
    setEditCompany(comp);
    setEditModalShow(true);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setAddModalShow(true);
  };

  const handleDelete = (e, companyId) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this company?")) {
      deleteCompany(companyId)
        .then((result) => {
          alert(result);
          setIsUpdated(true);
        })
        .catch((error) => {
          alert("Failed to delete company");
          console.error("Delete error:", error);
        });
    }
  };

  const addModelClose = () => setAddModalShow(false);
  const editModelClose = () => setEditModalShow(false);

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <p id="manage"></p>
        <Table
          striped
          bordered
          hover
          className="react-bootstrap-table"
          id="dataTable"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Company Name</th>
              <th>Description</th>
              <th>Salary</th>
              <th>Job Role</th>
              <th>Location</th>
              <th>Criteria</th>
              <th>Last Date to Apply</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((comp) => (
              <tr key={comp.companyId}>
                <td>{comp.companyId}</td>
                <td>{comp.companyName}</td>
                <td>{comp.description}</td>
                <td>{comp.salary}</td>
                <td>{comp.jobrole}</td>
                <td>{comp.location}</td>
                <td>{comp.criteria}</td>
                <td>{comp.lastdate}</td>
                <td>
                  <div className="flex items-center">
                    <Button
                      className="mr-2 text-red-500 hover:text-red-700 p-2 transition-all duration-200 ease-in-out"
                      variant="danger"
                      onClick={(event) => handleDelete(event, comp.companyId)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} className="w-6 h-6" />
                      <span className="ml-2">Delete</span>
                    </Button>
                    <div className="mx-10"></div> {/* Add spacing here */}
                    <Button
                      className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg shadow-md text-blue-500 hover:text-blue-700 transition-all duration-200 ease-in-out"
                      onClick={(event) => handleUpdate(event, comp)}
                    >
                      <FaEdit className="w-6 h-6" />
                      <span className="ml-2 font-semibold">Edit</span>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button variant="primary" onClick={handleAdd}>
            Add Company
          </Button>
        </ButtonToolbar>
      </div>
      <AddCompanyModal
        show={addModalShow}
        setUpdated={setIsUpdated}
        onHide={addModelClose}
      />
      {editCompany && (
        <UpdateCompanyModel
          show={editModalShow}
          company={editCompany}
          setUpdated={setIsUpdated}
          onHide={editModelClose}
        />
      )}
    </div>
  );
};

export default ManageCompany;
