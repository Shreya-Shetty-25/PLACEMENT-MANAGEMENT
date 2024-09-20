// import React from 'react';
// import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
// import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
// import { addCompany } from '../services/CompanyService';


// const AddCompanyModal = (props) => {

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         addCompany(e.target)
//         .then((result)=>{
//             alert(result);
//             props.setUpdated(true);
//         },
//         (error)=>{
//             alert("Failed to Add Company");
//         })
//     }

//     return(
//         <div className="container">

//             <Modal
//                 {...props}
//                 size="lg"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered >

//                 <Modal.Header closeButton>
//                     <Modal.Title id="contained-modal-title-vcenter">
//                         Fill In Company Information
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Row>
//                         <Col sm={6}>
//                             <Form onSubmit={handleSubmit}>
//                                 <Form.Group controlId="companyName">
//                                     <Form.Label>Company Name</Form.Label>
//                                     <Form.Control type="text" name="companyName" required placeholder="" />
//                             </Form.Group>
//                             <Form.Group controlId="description">
//                                     <Form.Label>Description</Form.Label>
//                                     <Form.Control as="textarea" name="description" required placeholder="" rows={3}/>
//                             </Form.Group>
//                             <Form.Group controlId="salary">
//                                     <Form.Label>Salary</Form.Label>
//                                     <Form.Control type="text" name="salary" required placeholder="" />
//                             </Form.Group>
//                             <Form.Group controlId="jobrole">
//                                     <Form.Label>Job Role</Form.Label>
//                                     <Form.Control type="text" name="jobrole" required placeholder="" />
//                             </Form.Group>
//                             <Form.Group controlId="location">
//                                     <Form.Label>Location</Form.Label>
//                                     <Form.Control type="text" name="location" required placeholder="" />
//                             </Form.Group>
//                             <Form.Group controlId="criteria">
//                                     <Form.Label>Criteria</Form.Label>
//                                     <Form.Control type="text" name="criteria" required placeholder="" />
//                             </Form.Group>
//                             <Form.Group controlId="lastdate">
//                                     <Form.Label>Last Date</Form.Label>
//                                     <Form.Control type="date" name="lastdate" required placeholder="" />
//                             </Form.Group>
//                             <Form.Group>
//                                 <p></p>
//                                 <Button variant="primary" type="submit">
//                                     Submit
//                                 </Button>
//                             </Form.Group>
//                             </Form>
//                         </Col>
//                     </Row>
//                 </Modal.Body>
//                 <Modal.Footer>
//                 <Button variant="danger" type="submit" onClick={props.onHide}>
//                         Close
//                 </Button>

//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// };

// export default AddCompanyModal;
import React from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { addCompany } from '../services/CompanyService';

const AddCompanyModal = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        addCompany(e.target)
            .then((result) => {
                alert(result);
                props.setUpdated(true); // Notify parent to refresh data
                props.onHide(); // Close modal
            })
            .catch(() => {
                alert("Failed to Add Company");
            });
    };

    return (
        <div className="container">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Fill In Company Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="companyName">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control type="text" name="companyName" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="criteria">
                                    <Form.Label>Criteria</Form.Label>
                                    <Form.Control type="text" name="criteria" required placeholder="" />
                                </Form.Group>
                               
                                <Form.Group controlId="salary">
                                    <Form.Label>Salary</Form.Label>
                                    <Form.Control type="text" name="salary" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="jobrole">
                                    <Form.Label>Job Role</Form.Label>
                                    <Form.Control type="text" name="jobrole" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="location">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="text" name="location" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" name="description" required placeholder="" rows={3} />
                                </Form.Group>
                                <Form.Group controlId="lastdate">
                                    <Form.Label>Last Date</Form.Label>
                                    <Form.Control type="date" name="lastdate" required placeholder="" />
                                </Form.Group>
                                <Form.Group>
                                    <Button variant="primary" type="submit" style={{marginTop:"10px"}}>
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddCompanyModal;
