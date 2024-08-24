// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import logo from './Image/Pooling logo dem.jpeg';


// const Userpg = () => {
//   return (
//     <div className="polling-booth">
//       <header className="header">
//       <h1>Polling Booth</h1>
//         {/* <img src={logo} alt="Polling Booth Logo" className="logo" /> */}
//         <input type="text" placeholder="Search" className="search-bar" />
//         <span className="greeting">Welcome! User</span>
//       </header>
//       <div className="content">
//         <aside className="sidebar">
//           <ul className="menu">
//             <li>Poll List</li>
//             <li>Add Poll</li>
//             <li>Voted Polls</li>
//             <li>User Details</li>
//           </ul>
//           <div className="categories">
//             <h4>Categories</h4>
//             <ul>
//               <li>Sample</li>
//               <li>Movies</li>
//               <li>Sports</li>
//               <li>Bikers</li>
//               {/* Add more categories as needed */}
//             </ul>
//           </div>
//           <button className="sign-out">Sign Out</button>
//         </aside>
//         <main className="main-content">
//           <div className="user-profile">
//             <div className="profile-header">
//               <h2>User</h2>
//               <p>0 posts | 0 Followers | 0 Following</p>
//               <button className="user-details-btn">User Details</button>
//             </div>
//           </div>
//         </main>
//         <aside className="trending-polls">
//           <h3>Trending Polls</h3>
//           <ul>
//             <li>
//             </li>
//             {/* Add more polls as needed */}
//           </ul>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default Userpg;

//////////////////////////////////////////////////////////

// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import './Userpg.css'; // Custom CSS file for styling

// function UserDetailsCard() {
//   return (
//     <Card>
//       <Card.Body>
//         <Card.Header className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6>Rahul</h6>
//             <p>Created: 3 hours ago</p>
//             <p>Title: testing</p>
//             <p>Status: open</p>
//           </div>
//           <Button variant="primary">Follow</Button>
//         </Card.Header>

//         <Card.Text>
//           <div className="mt-3 mb-3">test</div>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Header className="d-flex justify-content-between">
//                 <p>0 Votes</p>
//                 <p>Poll Ends in 9 days</p>
//               </Card.Header>
//               <Card.Text className="d-flex flex-column">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     id="option1"
//                     name="options"
//                     value="op1"
//                   />
//                   <label className="form-check-label" htmlFor="option1">
//                     op1
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     id="option2"
//                     name="options"
//                     value="op2"
//                   />
//                   <label className="form-check-label" htmlFor="option2">
//                     op2
//                   </label>
//                 </div>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Card.Text>

//         <Card.Footer className="d-flex justify-content-between">
//           <p>
//             <i className="bi bi-heart"></i> like
//           </p>
//           <p>
//             <i className="bi bi-chat-quote-fill"></i> Comments
//           </p>
//           <p>
//             <i className="bi bi-share"></i> Share
//           </p>
//         </Card.Footer>
//       </Card.Body>
//     </Card>
//   );
// }

// export default UserDetailsCard;


// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import './Userpg.css'; // Custom CSS file for styling

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <ul>
//         <li>Home</li>
//         <li>Explore</li>
//         <li>Notifications <span className="badge badge-pill badge-primary">19</span></li>
//         <li>Messages</li>
//         <li>Grok</li>
//         <li>Communities</li>
//         <li>Premium</li>
//         <li>Verified Orgs</li>
//         <li>Profile</li>
//         <li>More</li>
//       </ul>
//       <Button variant="primary" className="post-button">Post</Button>
//     </div>
//   );
// }

// function UserProfile() {
//   return (
//     <Card className="user-profile-card">
//       <Card.Body className="text-center">
//         <img src="/path-to-profile-pic" alt="Profile" className="profile-pic mb-3" />
//         <Card.Title>SANJAY</Card.Title>
//         <Card.Text>@SANJAY1987765</Card.Text>
//         <Card.Text>Joined May 2024</Card.Text>
//         <Card.Text>10 Following | 0 Followers</Card.Text>
//         <Button variant="primary" className="mb-2">Get verified</Button>
//         <Button variant="secondary" className="edit-profile-button">Edit profile</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// function Suggestions() {
//   return (
//     <div className="suggestions">
//       <h5>You might like</h5>
      
//         <div><Button variant="link">The GOAT Movie</Button></div>
//         <div><Button variant="link">Cristiano Ronaldo</Button></div>
//         <div><Button variant="link">Christopher Kanagara</Button></div>
      
//     </div>
//   );
// }

// function WhatsHappening() {
//   return (
//     <div className="whats-happening">
//       <h5>What's happening</h5>
//       <p>Esports World Cup 2024 - LIVE</p>
//       <p>#justice_for_pooja</p>
//     </div>
//   );
// }

// function UserDetailsCard() {
//   return (
//     <Card className="user-details-card">
//       <Card.Body>
//         <Card.Header className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6>Rahul</h6>
//             <p>Created: 3 hours ago</p>
//             <p>Title: testing</p>
//             <p>Status: open</p>
//           </div>
//           <Button variant="primary">Follow</Button>
//         </Card.Header>

//         <Card.Text>
//           <div className="mt-3 mb-3">test</div>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Header className="d-flex justify-content-between">
//                 <p>0 Votes</p>
//                 <p>Poll Ends in 9 days</p>
//               </Card.Header>
//               <Card.Text className="d-flex flex-column">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     id="option1"
//                     name="options"
//                     value="op1"
//                   />
//                   <label className="form-check-label" htmlFor="option1">
//                     op1
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     id="option2"
//                     name="options"
//                     value="op2"
//                   />
//                   <label className="form-check-label" htmlFor="option2">
//                     op2
//                   </label>
//                 </div>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Card.Text>

//         <Card.Footer className="d-flex justify-content-between">
//           <p>
//             <i className="bi bi-heart"></i> like
//           </p>
//           <p>
//             <i className="bi bi-chat-quote-fill"></i> Comments
//           </p>
//           <p>
//             <i className="bi bi-share"></i> Share
//           </p>
//         </Card.Footer>
//       </Card.Body>
//     </Card>
//   );
// }

// function App() {
//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div className="main-content">
//         <UserProfile />
//         <UserDetailsCard />
//         <Suggestions />
//         <WhatsHappening />
//       </div>
//     </div>
//   );
// }

// export default App;



// import React from 'react'
// import {Card , Button,} from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap-icons/font/bootstrap-icons.css";



// function Userdetails() {
//   return (
//     <div>
// <Card className="user-profile-card">
//       <Card.Body className="text-center">
//         <img src="/path-to-profile-pic" alt="Profile" className="profile-pic mb-3" />
//         <Card.Title>SANJAY</Card.Title>
//         <Card.Text>@SANJAY1987765</Card.Text>
//         <Card.Text>Joined May 2024</Card.Text>
//         <Card.Text>10 Following | 0 Followers</Card.Text>
//         <Button variant="primary" className="mb-2">Get verified</Button>
//         <Button variant="secondary" className="edit-profile-button">Edit profile</Button>
//       </Card.Body>
//     </Card>


//     </div>
//   )
// }

// export default Userdetails


// import React from 'react';
// import { Card, Button, Col, Row } from 'react-bootstrap';

// const UserProfileAndPolls = () => {
//   return (
//     <div>
//       {/* Profile Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <div className="text-center">
//             <img src="https://via.placeholder.com/150" alt="profile" className="rounded-circle" />
//             <h5>naruto</h5>
//             <p>1 post | 1 Follower | 0 Following</p>
//             <Button variant="primary">Edit Profile</Button>
//           </div>
//         </Card.Body>
//       </Card>

//       {/* Main Content - Polls Section */}
//       <Card className="mb-4">
//         <Card.Body><Row>
//           <Col sm={3} style={{textAlign:"center"}}><button variant="info" style={{background:"#06b4d6",border:"none"}}>Created Polls</button></Col>
//           <Col sm={3} style={{textAlign:"center"}}><button variant="info" style={{background:"#06b4d6",border:"none"}}>Voted Polls</button></Col>
//           <Col sm={3} style={{textAlign:"center"}}><button variant="info" style={{background:"#06b4d6",border:"none"}}>Liked Polls</button></Col>
//           <Col sm={3} style={{textAlign:"center"}}><button variant="info" style={{background:"#06b4d6",border:"none"}}>Commented Polls</button></Col>
          
//           </Row>
//         </Card.Body>
//       </Card>
      
//       {/* <h5>Created Polls</h5>
//       <Card className="mb-4">
//         <Card.Body>
//           <h6>naruto</h6>
//           <p>Created: 1 month ago</p>
//           <p>Title: Title | Status: Closed</p>
//         </Card.Body>
//       </Card> */}
//     </div>
//   );
// };

// export default UserProfileAndPolls;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import { Row, Col, Card, Form, Alert, Modal, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./Signup.css";
// import InputGroup from "react-bootstrap/InputGroup";
// function Signup() {
//   const startYear = 1901;
//   const endYear = 2024;

//   const [showPassword, setShowPassword] = React.useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
//   const [showAlert, setShowAlert] = React.useState(false);
//   const [otpSent, setOtpSent] = React.useState(false);
//   // const [otp, setOtp] = React.useState("");
//   const [otp, setOtp] = useState('');
//   const [timer, setTimer] = useState(30); // 30 seconds timer
//   const [canResend, setCanResend] = useState(false);
//   const [otpVerified, setOtpVerified] = React.useState(false);
//   const [otpError, setOtpError] = React.useState("");
//   const [showModal, setShowModal] = React.useState(false);

//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       phone: "",
//       day: "",
//       month: "",
//       year: "",
//       gender: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string()
//         .min(3, "Name must be at least 3 characters")
//         .required("Name is required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required")
//         .test("email", "Invalid email", function (value) {
//           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//           return emailRegex.test(value);
//         }),
//       phone: Yup.string()
//         .matches(/^\d{10}$/, "Phone number must be 10 digits")
//         .required("Phone number is required"),
//       day: Yup.string().required("Date of Birth is required"),
//       month: Yup.string().required("Month is required"),
//       year: Yup.string().required("Year is required"),
//       gender: Yup.string().required("Gender is required"),
//       password: Yup.string()
//         .min(6, "Password must be at least 6 characters")
//         .required("Password is required"),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref("password"), null], "Passwords must match")
//         .required("Confirm Password is required"),
//     }),
//     validateOnBlur: true, // Validate fields on blur event
//     onSubmit: (values) => {
//       if (otpVerified) {
//         setShowAlert(true);
//         setTimeout(() => {
//           navigate("/Loginpg");
//         }, 1500);
//       } else {
//         setOtpError("Please verify OTP.");
//       }
//     },
//   });
//   // let [records,setRecords]=useState([])
//   // useEffect(()=>{
//   //   axios.get("http://localhost:3000/user/signup") .then(res=>{
//   //     setRecords(res.data)
//   //     console.log(res.data)
//   //   })

//   // },[])

//   const handleLoginClick = () => {
//     navigate("/Loginpg");
//   };

//   const sendOtp = () => {
//     if (formik.values.phone && formik.errors.phone === undefined) {
//       setOtpSent(true);
//       setOtpError("");
//       setShowModal(true); // Open OTP Modal
//       setTimeout(() => {
//         alert("OTP sent to " + formik.values.phone);
//       }, 500);
//     } else {
//       setOtpError("Please enter a valid phone number first.");
//     }
//   };
  

//   const verifyOtp = () => {
//     if (otp === "123456") {
//       setOtpVerified(true);
//       setOtpError("");
//       setShowModal(false); // Close OTP Modal after verification
//     } else {
//       setOtpError("Invalid OTP. Please try again.");
//     }
//   };
//   const handleCloseModal = () => setShowModal(false);

//   //   let handleSignup=()=>{

//   //     let dob=new Date(formik.values.year,formik.values.month-1,formik.values.day);
//   //     console.log(dob)
//   //     let currentdate=new Date()
//   //     console.log(currentdate)

//   //     console.log(new Date(formik.values.year,formik.values.month-1,formik.values.day));

//   //     let age1= currentdate.getFullYear()-dob.getFullYear();
//   //     // console.log(formik.values);

//   // // Format date as "YYYY-MM-DD"
//   // let formattedDob = dob.toISOString().split('T')[0];

//   //     let signupdata={
//   //       user_name:formik.values.name,
//   //       e_mail:formik.values.email,
//   //       phno:formik.values.phone,
//   //       gender:formik.values.gender,
//   //       age:age1,
//   //       password:formik.values.password,
//   //       // dob:new Date(formik.values.year,formik.values.month-1,formik.values.day,"YYYY-MM-DD")
//   //       dob: formattedDob
//   //     }
//   //     console.log(signupdata)
//   //     axios.post("http://localhost:3000/user/signup",signupdata)
//   //     alert("created successfully")
//   //   }

//   // let handleSignup = async () => {
//   //   try {
//   //       let dob = new Date(formik.values.year, formik.values.month - 1, formik.values.day);
//   //       let currentdate = new Date();

//   //       let age1 = currentdate.getFullYear() - dob.getFullYear();

//   //       // Format date as "YYYY-MM-DD"
//   //       let formattedDob = dob.toISOString().split('T')[0];

//   //       let signupdata = {
//   //           user_name: formik.values.name,
//   //           e_mail: formik.values.email,
//   //           phno: formik.values.phone,
//   //           gender: formik.values.gender,
//   //           age: age1,
//   //           password: formik.values.password,
//   //           dob: formattedDob
//   //       };

//   //       console.log('Signup Data:', signupdata);

//   //       const response = await axios.post("http://92.205.109.210:8028/user/signup", signupdata);
//   //       alert("Created successfully");
//   //       console.log('Response:', response.data);
//   //   } catch (error) {
//   //       console.error('Error during signup:', error.response ? error.response.data : error.message);
//   //       alert("Signup failed. Please try again.");
//   //   }
//   // };

//   let handleSignup = () => {
//     let dob = new Date(
//       formik.values.year,
//       formik.values.month - 1,
//       formik.values.day
//     );
//     let currentdate = new Date();

//     let age1 = currentdate.getFullYear() - dob.getFullYear();

//     // Format date as "YYYY-MM-DD"
//     let formattedDob = dob.toISOString().split("T")[0];

//     let signupdata = {
//       user_name: formik.values.name,
//       e_mail: formik.values.email,
//       phno: formik.values.phone,
//       gender: formik.values.gender,
//       age: age1,
//       password: formik.values.password,
//       dob: formattedDob,
//     };

//     console.log("Signup Data:", signupdata);

//     axios
//       .post("http://92.205.109.210:8028/user/signup", signupdata)
//       .then((response) => {
//         alert("Created successfully");
//         console.log("Response:", response.data);
//       })
//       .catch((error) => {
//         console.error(
//           "Error during signup:",
//           error.response ? error.response.data : error.message
//         );
//         alert("Signup failed. Please try again.");
//       });
//   };

//   return (
//     <div className="signup-container">
//       <br />
//       <Row>
//         <Col sm={4}></Col>
//         <Col sm={4}>
//           <Card className="x1">
//             <Card.Header>
//               <Row>
//                 <Col sm={11}>
//                   <div className="text-center">
//                     <h3 className="x2">Create your account</h3>
//                   </div>
//                 </Col>
//               </Row>
//             </Card.Header>
//             <Card.Body>
//               {showAlert && (
//                 <Alert
//                   variant="success"
//                   onClose={() => setShowAlert(false)}
//                   dismissible
//                 >
//                   Sign up successful!
//                 </Alert>
//               )}
//               <Form onSubmit={formik.handleSubmit}>
//                 <Row>
//                   <Col>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter name"
//                       className="x3"
//                       {...formik.getFieldProps("name")}
//                       isInvalid={formik.touched.name && formik.errors.name}
//                       onBlur={formik.handleBlur}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.name}
//                     </Form.Control.Feedback>
//                   </Col>
//                 </Row>

//                 <Form.Control
//                   type="text"
//                   placeholder="Email address"
//                   className="x4"
//                   {...formik.getFieldProps("email")}
//                   isInvalid={formik.touched.email && formik.errors.email}
//                   onBlur={formik.handleBlur}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.email}
//                 </Form.Control.Feedback>

//                 {/* <Form.Control
//                   type="text"
//                   placeholder="Phone number"
//                   className='x4'
//                   {...formik.getFieldProps('phone')}
//                   isInvalid={formik.touched.phone && formik.errors.phone}
//                   onBlur={formik.handleBlur}
               
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.phone}
//                 </Form.Control.Feedback>
                
//                 <button type="button" className="otp-button" onClick={sendOtp} disabled={otpSent}>
//                   {otpSent ? 'OTP Sent' : 'Send OTP'}
//                 </button> */}

//                 <div className="phone-input-container">
//                   <Row>
//                     <Col sm={3}>
//                       <Form.Control
//                         type="text"
//                         placeholder="+91"
//                         defaultValue="+91"
//                         disabled
//                         className="x4"
//                       />
//                     </Col>
//                     <Col sm={9}>
//                       <Form.Control
//                         type="text"
//                         placeholder="Phone number"
//                         className="x4"
//                         {...formik.getFieldProps("phone")}
//                         isInvalid={formik.touched.phone && formik.errors.phone}
//                         onBlur={formik.handleBlur}
//                         maxLength={10}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {formik.errors.phone}
//                       </Form.Control.Feedback>
//                     </Col>
//                   </Row>
//                   {otpVerified && (
//                     <span style={{ color: "green" }} className="verified-label">
//                       Verified
//                     </span>
//                   )}
//                 </div>
//                 {/* 
//                 {!otpVerified && (
//                   <Form.Control
//                     type="button"
//                     className="z9"
//                     value="Verify OTP"
//                     onClick={() => {
//                       if (otpSent) {
//                         verifyOtp();
//                       } else {
//                         sendOtp();
//                       }
//                     }}
//                     placeholder={otpSent ? 'Enter OTP' : 'Send OTP'}
//                   />
//                 )} */}
//                 {!otpVerified && (
//                   <button
//                     className="otp-button"
//                     value="Verify OTP"
//                     type="button"
//                     onClick={() => {
//                       if (otpSent) {
//                         verifyOtp();
//                       } else {
//                         sendOtp();
//                       }
//                     }}
//                     placeholder={otpSent ? "Enter OTP" : "Send OTP"}
//                   >
//                     Verify
//                   </button>
//                 )}

//                 <h6>Date of Birth</h6>
//                 <Row>
//                   <Col className="x5" sm={4}>
//                     <Form.Select
//                       aria-label="Select Day"
//                       {...formik.getFieldProps("day")}
//                       isInvalid={formik.touched.day && formik.errors.day}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Day</option>
//                       {Array.from({ length: 31 }, (_, index) => (
//                         <option key={index + 1} value={index + 1}>
//                           {index + 1}
//                         </option>
//                       ))}
//                     </Form.Select>
//                   </Col>
//                   <Col className="x6" sm={4}>
//                     <Form.Select
//                       aria-label="Select Month"
//                       {...formik.getFieldProps("month")}
//                       isInvalid={formik.touched.month && formik.errors.month}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Month</option>
//                       {[
//                         "Jan",
//                         "Feb",
//                         "Mar",
//                         "Apr",
//                         "May",
//                         "Jun",
//                         "Jul",
//                         "Aug",
//                         "Sep",
//                         "Oct",
//                         "Nov",
//                         "Dec",
//                       ].map((month, index) => (
//                         <option key={index} value={index + 1}>
//                           {month}
//                         </option>
//                       ))}
//                     </Form.Select>
//                   </Col>
//                   <Col className="x7" sm={4}>
//                     <Form.Select
//                       aria-label="Select Year"
//                       {...formik.getFieldProps("year")}
//                       isInvalid={formik.touched.year && formik.errors.year}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Year</option>
//                       {Array.from(
//                         { length: endYear - startYear + 1 },
//                         (_, index) => (
//                           <option
//                             key={startYear + index}
//                             value={startYear + index}
//                           >
//                             {startYear + index}
//                           </option>
//                         )
//                       )}
//                     </Form.Select>
//                   </Col>
//                 </Row>
//                 {formik.touched.day && formik.errors.day && (
//                   <Form.Control.Feedback
//                     type="invalid"
//                     style={{ display: "block" }}
//                   >
//                     {formik.errors.day}
//                   </Form.Control.Feedback>
//                 )}
//                 {formik.touched.month && formik.errors.month && (
//                   <Form.Control.Feedback
//                     type="invalid"
//                     style={{ display: "block" }}
//                   >
//                     {formik.errors.month}
//                   </Form.Control.Feedback>
//                 )}
//                 {formik.touched.year && formik.errors.year && (
//                   <Form.Control.Feedback
//                     type="invalid"
//                     style={{ display: "block" }}
//                   >
//                     {formik.errors.year}
//                   </Form.Control.Feedback>
//                 )}

//                 <h6>Gender</h6>
//                 <Row>
//                   <Col sm={4} className="a1">
//                     <Form.Check
//                       // reverse
//                       label="Male"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-1"
//                       value="male"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "male"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col sm={4} className="a2">
//                     <Form.Check
//                       // reverse
//                       label="Female"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-2"
//                       value="female"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "female"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col sm={4} className="a">
//                     <Form.Check
//                       // reverse
//                       label="Custom"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-3"
//                       value="custom"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "custom"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                 </Row>
//                 {formik.touched.gender && formik.errors.gender && (
//                   <Form.Control.Feedback
//                     type="invalid"
//                     style={{ display: "block" }}
//                   >
//                     {formik.errors.gender}
//                   </Form.Control.Feedback>
//                 )}
//                 <p></p>

//                 {/* <h6>Password</h6>
//                 <div className="password-input-container">
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     placeholder="New password"
//                     className='x8'
//                     {...formik.getFieldProps('password')}
//                     isInvalid={formik.touched.password && formik.errors.password}
//                     onBlur={formik.handleBlur}
//                   />
//                   <span
//                     className="password-toggle-icon"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                   </span>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.password}
//                   </Form.Control.Feedback>
//                 </div>
//                 <p></p>
//                 <div className="password-input-container">
//                   <Form.Control
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm password"
//                     className='x8'
//                     {...formik.getFieldProps('confirmPassword')}
//                     isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
//                     onBlur={formik.handleBlur}
//                   />
//                   <span
//                     className="password-toggle-icon"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   >
//                     {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                   </span>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.confirmPassword}
//                   </Form.Control.Feedback>
//                 </div> */}

//                 <h6>Password</h6>
//                 {/* <div className="passwordd-input-container">
//   <Form.Label>
//     <Form.Control
//       type={showPassword ? "text" : "password"}
//       placeholder="Password"
//       className="x8"
//       {...formik.getFieldProps('password')}
//       isInvalid={formik.touched.password && formik.errors.password}
//       onBlur={formik.handleBlur}
//       maxLength={6}
//     />
//   </Form.Label>
//   <span
//     className="passwordd-toggle-icon"
//     onClick={() => setShowPassword(!showPassword)}
//   >
//     {showPassword ? <FaEyeSlash /> : <FaEye />}
//   </span>
//   <Form.Control.Feedback type="invalid">
//     {formik.errors.password}
    
//   </Form.Control.Feedback>
// </div>

// <p></p>

// <div style={{marginTop:"-20px"}} className="passwordd-input-container">
//   <Form.Label>
//     <Form.Control
//       type={showConfirmPassword ? "text" : "password"}
//       placeholder="Confirm password"
//       className="x8"
//       {...formik.getFieldProps('confirmPassword')}
//       isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
//       onBlur={formik.handleBlur}
//       maxLength={6}
//     />
//   </Form.Label>
//   <span
//     className="passwordd-toggle-icon"
//     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//   >
//     {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//   </span>
//   <Form.Control.Feedback type="invalid">
//     {formik.errors.confirmPassword}
//   </Form.Control.Feedback>
// </div> */}

//                 <div className="password-input-container">
//                   <InputGroup className="mb-3">
//                     <Form.Label>
//                       <Form.Control
//                         style={{ width: "420px" }}
//                         type={showPassword ? "text" : "password"}
//                         placeholder="Password"
//                         className="x8"
//                         {...formik.getFieldProps("password")}
//                         isInvalid={
//                           formik.touched.password && formik.errors.password
//                         }
//                         onBlur={formik.handleBlur}
//                       />
//                     </Form.Label>
//                     {/* <InputGroup.Text id="inputGroup-sizing-default"> */}
//                     <span
//                       style={{ marginTop: "-10px" }}
//                       className="password-toggle-icon"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? <FaEyeSlash /> : <FaEye />}
//                     </span>
//                     {/* </InputGroup.Text> */}

//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.password}
//                     </Form.Control.Feedback>
//                   </InputGroup>
//                 </div>
//                 <p></p>
//                 <div
//                   style={{ marginTop: "-20px" }}
//                   className="passwordd-input-container"
//                 >
//                   <InputGroup className="mb-3">
//                     <Form.Label>
//                       <Form.Control
//                         style={{ width: "420px" }}
//                         type={showConfirmPassword ? "text" : "password"}
//                         placeholder="Confirm password"
//                         className="x8"
//                         {...formik.getFieldProps("confirmPassword")}
//                         isInvalid={
//                           formik.touched.confirmPassword &&
//                           formik.errors.confirmPassword
//                         }
//                         onBlur={formik.handleBlur}
//                       />
//                     </Form.Label>
//                     {/* <InputGroup.Text id="inputGroup-sizing-default"> */}
//                     <span
//                       style={{ paddingLeft: "10px", marginTop: "5px" }}
//                       className="passwordd-toggle-icon"
//                       onClick={() =>
//                         setShowConfirmPassword(!showConfirmPassword)
//                       }
//                     >
//                       {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                     </span>
//                     {/* </InputGroup.Text> */}

//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.confirmPassword}
//                     </Form.Control.Feedback>
//                   </InputGroup>
//                 </div>

//                 <p></p>
//                 <div className="text-center">
//                   <button type="submit" className="z9" onClick={handleSignup}>
//                     Sign Up
//                   </button>
//                 </div>
//                 <p style={{ marginBottom: "-2px" }} className="or">
//                   or
//                 </p>
//                 <div className="text-center">
//                   <button
//                     type="button"
//                     className="z10"
//                     onClick={handleLoginClick}
//                   >
//                     Login
//                   </button>
//                 </div>
//               </Form>
//             </Card.Body>
//           </Card>
//           <br />
//           <br />
//           <br />
//         </Col>
//         <Col sm={4}></Col>
//       </Row>

//       {/* OTP Modal */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title style={{ color: "black" }}>OTP Verification</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Control
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             isInvalid={otpError !== ""}
//           />
//           {otpError && (
//             <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
//               {otpError}
//             </Form.Control.Feedback>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={verifyOtp}>
//             Verify OTP
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Signup;



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // send otp

// const sendOtp = async () => {
//   if (formik.values.phone && !formik.errors.phone) {
//     try {
//       const response = await axios.post("http://92.205.109.210:8028/mobileauth/send-otp-sms", {
//         phoneNumber: formik.values.phone,
//       });

//       if (response.data.success) {
//         console.log("OTP sent successfully");
//         setOtpSent(true);
//         setTimer(30); // Reset the timer
//         setCanResend(false); // Disable the resend button
//         setShowModal(true); // Open OTP Modal
//       } else {
//         console.error("Failed to send OTP:", response.data.message);
//         setOtpError("Failed to send OTP. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       setOtpError("Error sending OTP. Please try again.");
//     }
//   } else {
//     setOtpError("Please enter a valid phone number first.");
//   }
// };

// // verify otp

// const verifyOtp = async () => {
//   try {
//     const response = await axios.post("http://92.205.109.210:8028/mobileauth/verify-otp", {
//       phoneNumber: formik.values.phone,
//       otp: otp,
//     });

//     if (response.data.success) {
//       setOtpVerified(true);
//       setOtpError("");
//       setShowModal(false);
//     } else {
//       setOtpError("Invalid OTP. Please try again.");
//     }
//   } catch (error) {
//     console.error("Error verifying OTP:", error);
//     setOtpError("Error verifying OTP. Please try again.");
//   }
// };

