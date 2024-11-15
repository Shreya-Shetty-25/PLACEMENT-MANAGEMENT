import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Dashboard from "./Dashboard";
import { Button, ButtonToolbar } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import AddStudentModal from "./AddStudentModal";
import UpdateStudentModal from "./UpdateStudentModal";
import { getStudents, deleteStudent } from "../services/StudentService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Manage = () => {
  const [students, setStudents] = useState([]);
  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editStudent, setEditStudent] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (students.length && !isUpdated) {
      return;
    }
    getStudents().then((data) => {
      if (mounted) {
        setStudents(data);
      }
    });
    return () => {
      mounted = false;
      setIsUpdated(false);
    };
  }, [isUpdated, students]);

  const handleUpdate = (e, stu) => {
    e.preventDefault();
    setEditModalShow(true);
    setEditStudent(stu);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setAddModalShow(true);
  };

  const handleDelete = (e, studentId) => {
    if (window.confirm("Are you sure ?")) {
      e.preventDefault();
      deleteStudent(studentId).then(
        (result) => {
          alert(result);
          setIsUpdated(true);
        },
        (error) => {
          alert("Failed to Delete Student");
        }
      );
    }
  };

  let AddModelClose = () => setAddModalShow(false);
  let EditModelClose = () => setEditModalShow(false);
  return (
    <div className="container-fluid side-container">
      <Dashboard/>
      <div className="row side-row">
        <p id="manage"></p>
        <Table bordered hover className="react-bootstrap-table" id="dataTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Registration No</th>
              <th>Email</th>
              <th>Course</th>
              <th>Avergae Spi</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.studentId}</td>
                <td>{stu.FirstName}</td>
                <td>{stu.LastName}</td>
                <td>{stu.enrollment}</td>
                <td>{stu.Email}</td>
                <td>{stu.branch}</td>
                <td>{stu.avg_spi}</td>
                <td>
                  <Button
                    className="mr-2 text-red-500 hover:text-red-700 p-2 transition-all duration-200 ease-in-out"
                    variant="danger"
                    onClick={(event) => handleDelete(event, stu.studentId)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} className="w-6 h-6" />
                    <span className="ml-2">Delete</span>
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button
                    className="mr-2 flex items-center space-x-2 p-2 bg-gray-100 rounded-lg shadow-md text-blue-500 hover:text-blue-700 transition-all duration-200 ease-in-out"
                    onClick={(event) => handleUpdate(event, stu)}
                  >
                    <FaEdit className="w-6 h-6" />
                    <span className="ml-2 font-semibold">Edit</span>
                  </Button>
                  <UpdateStudentModal
                    show={editModalShow}
                    student={editStudent}
                    setUpdated={setIsUpdated}
                    onHide={EditModelClose}
                  ></UpdateStudentModal>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="flex justify-center items-center h-screen">
          <ButtonToolbar>
            <Button
              variant="primary"
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 ease-in-out"
              onClick={handleAdd}
            >
              Add Student
            </Button>
            <AddStudentModal
              show={addModalShow}
              setUpdated={setIsUpdated}
              onHide={AddModelClose}
            />
          </ButtonToolbar>
        </div>
      </div>
    </div>
  );
};

export default Manage;
