// import React, { useState } from "react";
// import { Button, Card, Row, Col, Form, FormLabel } from "react-bootstrap";
// import { Formik, Field, ErrorMessage } from "formik";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing the icons
// import * as Yup from "yup";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Loginpg.css";
// import { Link } from 'react-router-dom';

// function Loginpg() {
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

//   // Validation schema using Yup
//   const validationSchema = Yup.object().shape({
//     emailOrMobile: Yup.string()
//       .required("Email or Mobile Number is required")
//       .test(
//         "emailOrMobile",
//         "Invalid email or mobile number",
//         function (value) {
//           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//           const mobileRegex = /^[0-9]{10}$/;
//           return emailRegex.test(value) || mobileRegex.test(value);
//         }
//       ),
//     password: Yup.string()
//       .required("Password is required")
//       .min(6, "Password must be at least 6 characters"),
//   });

//   return (
//     <div className="full-screen">
//       <Row>
//         <Col sm={4}></Col>
//         <Col sm={4}>
//           <Card className="login-card">
//             <Card.Body className="card-body">
//               <Formik
//                 initialValues={{ emailOrMobile: "", password: "" }}
//                 validationSchema={validationSchema}
//                 validateOnChange={true} // Auto-validation on field change
//                 validateOnBlur={true} // Auto-validation on field blur
//                 onSubmit={(values) => {
//                   console.log("Form data", values);
//                   // Handle form submission
//                 }}
//               >
//                 {({ handleSubmit }) => (
//                   <Form onSubmit={handleSubmit}>
//                     <FormLabel className="line-1">
//                       LOG INTO YOUR ACCOUNT
//                     </FormLabel>
//                     <br />

//                     <FormLabel className="line-2">
//                       Email Address or Mobile Number
//                     </FormLabel>
//                     <br />
//                     <Field
//                       name="emailOrMobile"
//                       type="text" 
//                       className="form-control form-control-lg" 
//                     />
//                     <ErrorMessage
//                       name="emailOrMobile"
//                       component="div"
//                       className="text-danger"
//                     />
//                     <br />

//                     <FormLabel className="line-3">Password</FormLabel>
//                     <br />
//                     <div className="password-input-container">
//                       <Field
//                         name="password"
//                         type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password'
//                         className="form-control form-control-lg"
//                       />
//                       <span
//                         className="password-toggle-icon"
//                         onClick={() => setShowPassword(!showPassword)}
//                       >
//                         {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle icon */}
//                       </span>
//                     </div>
//                     <ErrorMessage
//                       name="password"
//                       component="div"
//                       className="text-danger"
//                     />
//                     <br />

//                     <Button type="submit" className="button-login">
//                       Login
//                     </Button>
//                     <hr />
//                     <div>
//                       {/* <img
//                         alt="verify"
//                         src={googlelogo}
//                         className="authenticate"
//                       /> */}
//                     </div>
//                     <div className="last-line">
//                       <Link to="/VerifyPg">Forgot Password?</Link>
//                     </div>
//                   </Form>
//                 )}
//               </Formik>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col sm={4}></Col>
//       </Row>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//     </div>
//   );
// }

// export default Loginpg;



import React, { useState } from "react";
import { Button, Card, Row, Col, Form, FormLabel } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing the icons
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Loginpg.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Loginpg() {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    phno: Yup.string()
      .required("Email or Mobile Number is required")
      .test("phno", "Invalid email or mobile number", function (value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^[0-9]{10}$/;
        return emailRegex.test(value) || mobileRegex.test(value);
      }),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  return (
    <div className="full-screen">
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <Card className="login-card">
            <Card.Body className="card-body">
              <Formik
                initialValues={{ phno: "", password: "" }}
                validationSchema={validationSchema}
                validateOnChange={true} // Auto-validation on field change
                validateOnBlur={true} // Auto-validation on field blur
                onSubmit={(values) => {
                  console.log("Form data", values);
                  // Prepare login data
                  const loginData = {
                    phno: values.phno,
                    password: values.password,
                  };
               console.log("login")
                  // Make an Axios POST request to the login endpoint
                  axios
                    .post("http://92.205.109.210:8028/user/login", loginData)
                    .then((response) => {
                      console.log("Login successful:", response.data);
                      alert("Login successful!");
                      // Handle successful login (e.g., navigate to a dashboard, store tokens, etc.)
                    })
                    .catch((error) => {
                      console.error(
                        "Error during login:",
                        error.response ? error.response.data : error.message
                      );
                      alert(
                        "Login failed. Please check your credentials and try again."
                      );
                    });
                }}
              >
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <FormLabel className="line-1">
                      LOG INTO YOUR ACCOUNT
                    </FormLabel>
                    <br />

                    <FormLabel className="line-2">
                      Email Address or Mobile Number
                    </FormLabel>
                    <br />
                    <Field
                      name="phno"
                      type="text"
                      className="form-control form-control-lg"
                    />
                    <ErrorMessage
                      name="phno"
                      component="div"
                      className="text-danger"
                    />
                    <br />

                    <FormLabel className="line-3">Password</FormLabel>
                    <br />
                    <div className="password-input-container">
                      <Field
                        name="password"
                        type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password'
                        className="form-control form-control-lg"
                      />
                      <span
                        className="password-toggle-icon"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
                        {/* Toggle icon */}
                      </span>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                    <br />

                    <Button type="submit" className="button-login">
                      Login
                    </Button>
                    <hr />
                    <div>
                      {/* <img
                        alt="verify"
                        src={googlelogo}
                        className="authenticate"
                      /> */}
                    </div>
                    <div className="last-line">
                      <Link to="/VerifyPg">Forgot Password?</Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}></Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Loginpg;
