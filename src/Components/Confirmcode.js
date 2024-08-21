// import React from "react";
// import { Row, Col, Card, Form, FormLabel, Button } from "react-bootstrap";
// import { Formik, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Verifypg.css";

// function Confirmcode() {
//   const navigate = useNavigate();

//   // Validation schema using Yup
//   const validationSchema = Yup.object().shape({
//     verificationCode: Yup.string()
//       .required("Verification code is required")
//       .length(6, "Verification code must be 6 digits"),
//   });

//   return (
//     <div className="full-page">
//       <Row>
//         <Col sm={4}></Col>
//         <Col sm={4}>
//           <Card className="verify-card">
//             <Card.Body>
//               <Formik
//                 initialValues={{ verificationCode: "" }}
//                 validationSchema={validationSchema}
//                 onSubmit={(values) => {
//                   console.log("Form data", values);
//                   // Navigate to the next step or new page
//                   navigate("/Newpassword");
//                 }}
//               >
//                 {({ handleSubmit }) => (
//                   <Form onSubmit={handleSubmit}>
//                     <FormLabel className="line-1">
//                       Enter the Verification Code
//                     </FormLabel>
//                     <br />
//                     <Field
//                       name="verificationCode"
//                       type="text"
//                       className="form-control form-control-md"
//                     />
//                     <ErrorMessage
//                       name="verificationCode"
//                       component="div"
//                       className="text-danger"
//                     />
//                     <br />
//                     <Button type="submit" className="button-verify">
//                       Verify Code
//                     </Button>
//                   </Form>
//                 )}
//               </Formik>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col sm={4}></Col>
//       </Row>
//     </div>
//   );
// }

// export default Confirmcode;


// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';

// function Confirmcode() {
//   const [show, setShow] = useState(false);
//   const [code, setCode] = useState('');
//   const [inputCode, setInputCode] = useState('');

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleConfirm = () => {
//     if (inputCode === code) {
//       alert('Code confirmed successfully!');
//       handleClose();
//     } else {
//       alert('Incorrect code. Please try again.');
//     }
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Verify Code
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Code</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formCode">
//               <Form.Label>Enter your code</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter code"
//                 value={inputCode}
//                 onChange={(e) => setInputCode(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleConfirm}>
//             Confirm
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Confirmcode;


import React, { useState } from "react";
import { Row, Col, Card, Form, FormLabel, Button, Modal } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Verifypg.css";

function VerifyPg() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState("123456"); // Example code for testing
  const [inputCode, setInputCode] = useState("");

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    emailOrPhone: Yup.string()
      .required("Email or Phone Number is required")
      .test("emailOrPhone", "Invalid email or phone number", function (value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }),
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleConfirm = () => {
    if (inputCode === code) {
      alert("Code confirmed successfully!");
      handleClose();
      navigate("/Newpassword"); // Navigate to Newpassword page
    } else {
      alert("Incorrect code. Please try again.");
    }
  };

  return (
    <div className="full-page">
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <Card className="verify-card">
            <Card.Body>
              <Formik
                initialValues={{ emailOrPhone: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log("Form data", values);
                  // Show the modal to verify the code
                  handleShow();
                }}
              >
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <FormLabel className="line-1">
                      Enter Your Email Address Or Phone Number
                    </FormLabel>
                    <br />
                    <Field
                      name="emailOrPhone"
                      type="text"
                      className="form-control form-control-md"
                    />
                    <ErrorMessage
                      name="emailOrPhone"
                      component="div"
                      className="text-danger"
                    />
                    <br />
                    <Button type="submit" className="button-verify">
                      Get Verification Code
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}></Col>
      </Row>

      {/* Confirm Code Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCode">
              <Form.Label>Enter your code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter code"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default VerifyPg;
