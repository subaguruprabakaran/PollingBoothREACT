// import React from 'react';
// import { Row, Col, Card, Form, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import './Signup.css';

// function Signup() {
//   const startYear = 1901;
//   const endYear = 2024;

//   const [showPassword, setShowPassword] = React.useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
//   const [showAlert, setShowAlert] = React.useState(false);
//   const [otpSent, setOtpSent] = React.useState(false);
//   const [otp, setOtp] = React.useState('');
//   const [otpVerified, setOtpVerified] = React.useState(false);
//   const [otpError, setOtpError] = React.useState('');

//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: '',
//       day: '',
//       month: '',
//       year: '',
//       gender: '',
//       password: '',
//       confirmPassword: '',
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required('Name is required'),
//       email: Yup.string().email('Invalid email address').required('Email is required'),
//       phone: Yup.string()
//         .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
//         .required('Phone number is required'),
//       day: Yup.string().required('Day is required'),
//       month: Yup.string().required('Month is required'),
//       year: Yup.string().required('Year is required'),
//       gender: Yup.string().required('Gender is required'),
//       password: Yup.string()
//         .min(6, 'Password must be at least 6 characters')
//         .required('Password is required'),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref('password'), null], 'Passwords must match')
//         .required('Confirm Password is required'),
//     }),
//     onSubmit: (values) => {
//       if (otpVerified) {
//         setShowAlert(true);
//       } else {
//         setOtpError('Please verify OTP.');
//       }
//     },
//   });

//   const handleLoginClick = () => {
//     navigate('/Loginpg');
//   };

//   const sendOtp = () => {
//     if (formik.values.phone && formik.errors.phone === undefined) {
//       setOtpSent(true);
//       setOtpError('');
//       // Simulate OTP sent
//       setTimeout(() => {
//         alert('OTP sent to ' + formik.values.phone);
//       }, 500);
//     } else {
//       setOtpError('Please enter a valid phone number first.');
//     }
//   };

//   const verifyOtp = () => {
//     if (otp === '123456') { // Simulate OTP verification
//       setOtpVerified(true);
//       setOtpError('');
//     } else {
//       setOtpError('Invalid OTP. Please try again.');
//     }
//   };

//   return (
//     <div className="signup-container">
//       <br />
//       <Row>
//         <Col sm={4}></Col>
//         <Col sm={4}>
//           <Card className='x1'>
//             <Card.Header>
//               <Row>
//                 <Col sm={11}>
//                   <div className='text-center'>
//                     <h3 className='x2'>Create your account</h3>
//                   </div>
//                 </Col>
//               </Row>
//             </Card.Header>
//             <Card.Body>
//               {showAlert && (
//                 <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
//                   Sign up successful!
//                 </Alert>
//               )}
//               <Form onSubmit={formik.handleSubmit}>
//                 <Row>
//                   <Col>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter name"
//                       className='x3'
//                       {...formik.getFieldProps('name')}
//                       isInvalid={formik.touched.name && formik.errors.name}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.name}
//                     </Form.Control.Feedback>
//                   </Col>
//                 </Row>

//                 <Form.Control
//                   type="text"
//                   placeholder="Email address"
//                   className='x4'
//                   {...formik.getFieldProps('email')}
//                   isInvalid={formik.touched.email && formik.errors.email}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.email}
//                 </Form.Control.Feedback>

//                 <Form.Control
//                   type="text"
//                   placeholder="Phone number"
//                   className='x4'
//                   {...formik.getFieldProps('phone')}
//                   isInvalid={formik.touched.phone && formik.errors.phone}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.phone}
//                 </Form.Control.Feedback>
                
//                 <button type="button" className="otp-button" onClick={sendOtp} disabled={otpSent}>
//                   {otpSent ? 'OTP Sent' : 'Send OTP'}
//                 </button>
                
//                 {otpSent && (
//                   <div className="otp-verification">
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter OTP"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                       isInvalid={otpError !== ''}
//                     />
//                     <button type="button" className="verify-otp-button" onClick={verifyOtp}>
//                       Verify OTP
//                     </button>
//                     {otpError && (
//                       <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
//                         {otpError}
//                       </Form.Control.Feedback>
//                     )}
//                   </div>
//                 )}

//                 <h6>Date of Birth</h6>
//                 <Row>
//                   <Col className='x5' sm={4}>
//                     <Form.Select
//                       aria-label="Select Day"
//                       {...formik.getFieldProps('day')}
//                       isInvalid={formik.touched.day && formik.errors.day}
//                     >
//                       <option value="">Day</option>
//                       {Array.from({ length: 31 }, (_, index) => (
//                         <option key={index + 1} value={index + 1}>
//                           {index + 1}
//                         </option>
//                       ))}
//                     </Form.Select>
//                   </Col>
//                   <Col className='x6' sm={4}>
//                     <Form.Select
//                       aria-label="Select Month"
//                       {...formik.getFieldProps('month')}
//                       isInvalid={formik.touched.month && formik.errors.month}
//                     >
//                       <option value="">Month</option>
//                       {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
//                         <option key={index} value={index + 1}>
//                           {month}
//                         </option>
//                       ))}
//                     </Form.Select>
//                   </Col>
//                   <Col className='x7' sm={4}>
//                     <Form.Select
//                       aria-label="Select Year"
//                       {...formik.getFieldProps('year')}
//                       isInvalid={formik.touched.year && formik.errors.year}
//                     >
//                       <option value="">Year</option>
//                       {Array.from({ length: endYear - startYear + 1 }, (_, index) => (
//                         <option key={startYear + index} value={startYear + index}>
//                           {startYear + index}
//                         </option>
//                       ))}
//                     </Form.Select>
//                   </Col>
//                 </Row>
//                 {formik.touched.day && formik.errors.day && (
//                   <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
//                     {formik.errors.day}
//                   </Form.Control.Feedback>
//                 )}
//                 {formik.touched.month && formik.errors.month && (
//                   <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
//                     {formik.errors.month}
//                   </Form.Control.Feedback>
//                 )}
//                 {formik.touched.year && formik.errors.year && (
//                   <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
//                     {formik.errors.year}
//                   </Form.Control.Feedback>
//                 )}

//                 <h6>Gender</h6>
//                 <Row>
//                   <Col className='a1'>
//                     <Form.Check
//                       reverse
//                       label="Male"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-1"
//                       value="male"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === 'male'}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col className='a2'>
//                     <Form.Check
//                       reverse
//                       label="Female"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-2"
//                       value="female"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === 'female'}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col className='a3'>
//                     <Form.Check
//                       reverse
//                       label="Custom"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-3"
//                       value="custom"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === 'custom'}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                 </Row>
//                 {formik.touched.gender && formik.errors.gender && (
//                   <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
//                     {formik.errors.gender}
//                   </Form.Control.Feedback>
//                 )}
//                 <p></p>

//                 <h6>Password</h6>
//                 <div className="password-input-container">
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     placeholder="New password"
//                     className='x8'
//                     {...formik.getFieldProps('password')}
//                     isInvalid={formik.touched.password && formik.errors.password}
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
//                 </div>
//                 <p></p>
//                 <div className='text-center'>
//                   <button type="submit" className='z9'>Sign Up</button>
//                 </div>
//                 <p className='or'>or</p>
//                 <div className='text-center'>
//                   <button type="button" className='z10' onClick={handleLoginClick}>
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
//     </div>
//   );
// }

// export default Signup;


import React from 'react';
import { Row, Col, Card, Form, Alert, Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Signup.css';

function Signup() {
  const startYear = 1901;
  const endYear = 2024;

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [otpSent, setOtpSent] = React.useState(false);
  const [otp, setOtp] = React.useState('');
  const [otpVerified, setOtpVerified] = React.useState(false);
  const [otpError, setOtpError] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      day: '',
      month: '',
      year: '',
      gender: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .required('Name is required'),
      email: Yup.string().email('Invalid email address')
        .required('Email is required'),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
      day: Yup.string().required('Date of Birth is required'),
      month: Yup.string().required('Month is required'),
      year: Yup.string().required('Year is required'),
      gender: Yup.string().required('Gender is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    validateOnBlur: true, // Validate fields on blur event
    onSubmit: (values) => {
      if (otpVerified) {
        setShowAlert(true);
        setTimeout(() => {
          navigate('/Loginpg');
        }, 1500);
      } else {
        setOtpError('Please verify OTP.');
      }
    },
  });

  const handleLoginClick = () => {
    navigate('/Loginpg');
  };

  const sendOtp = () => {
    if (formik.values.phone && formik.errors.phone === undefined) {
      setOtpSent(true);
      setOtpError('');
      setShowModal(true); // Open OTP Modal
      setTimeout(() => {
        alert('OTP sent to ' + formik.values.phone);
      }, 500);
    } else {
      setOtpError('Please enter a valid phone number first.');
    }
  };

  const verifyOtp = () => {
    if (otp === '123456') {
      setOtpVerified(true);
      setOtpError('');
      setShowModal(false); // Close OTP Modal after verification
    } else {
      setOtpError('Invalid OTP. Please try again.');
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="signup-container">
      <br />
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <Card className='x1'>
            <Card.Header>
              <Row>
                <Col sm={11}>
                  <div className='text-center'>
                    <h3 className='x2'>Create your account</h3>
                  </div>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                  Sign up successful!
                </Alert>
              )}
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      className='x3'
                      {...formik.getFieldProps('name')}
                      isInvalid={formik.touched.name && formik.errors.name}
                      onBlur={formik.handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.name}
                    </Form.Control.Feedback>
                  </Col>
                </Row>

                <Form.Control
                  type="text"
                  placeholder="Email address"
                  className='x4'
                  {...formik.getFieldProps('email')}
                  isInvalid={formik.touched.email && formik.errors.email}
                  onBlur={formik.handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>

                {/* <Form.Control
                  type="text"
                  placeholder="Phone number"
                  className='x4'
                  {...formik.getFieldProps('phone')}
                  isInvalid={formik.touched.phone && formik.errors.phone}
                  onBlur={formik.handleBlur}
               
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.phone}
                </Form.Control.Feedback>
                
                <button type="button" className="otp-button" onClick={sendOtp} disabled={otpSent}>
                  {otpSent ? 'OTP Sent' : 'Send OTP'}
                </button> */}

<div className="phone-input-container">
                  <Row>
                    <Col sm={3}>
                      <Form.Control
                        type="text"
                        placeholder="+91"
                        defaultValue="+91"
                        disabled
                        className='x4'
                      />
                    </Col>
                    <Col sm={9}>
                      <Form.Control
                        type="text"
                        placeholder="Phone number"
                        className='x4'
                        {...formik.getFieldProps('phone')}
                        isInvalid={formik.touched.phone && formik.errors.phone}
                        onBlur={formik.handleBlur}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.phone}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                  {otpVerified && (
                    <span style={{color:"green"}} className="verified-label">Verified</span>
                  )}
                </div>
{/* 
                {!otpVerified && (
                  <Form.Control
                    type="button"
                    className="z9"
                    value="Verify OTP"
                    onClick={() => {
                      if (otpSent) {
                        verifyOtp();
                      } else {
                        sendOtp();
                      }
                    }}
                    placeholder={otpSent ? 'Enter OTP' : 'Send OTP'}
                  />
                )} */}
               {!otpVerified && (
                <button  className='otp-button'
                            value="Verify OTP" type="button"
                        onClick={() => {
                          if (otpSent) {
                            verifyOtp();
                          } else {
                            sendOtp();
                          }
                        }}
                        placeholder={otpSent ? 'Enter OTP' : 'Send OTP'}
                      >Verify</button> )}

                <h6>Date of Birth</h6>
                <Row>
                  <Col className='x5' sm={4}>
                    <Form.Select
                      aria-label="Select Day"
                      {...formik.getFieldProps('day')}
                      isInvalid={formik.touched.day && formik.errors.day}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Day</option>
                      {Array.from({ length: 31 }, (_, index) => (
                        <option key={index + 1} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col className='x6' sm={4}>
                    <Form.Select
                      aria-label="Select Month"
                      {...formik.getFieldProps('month')}
                      isInvalid={formik.touched.month && formik.errors.month}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Month</option>
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                        <option key={index} value={index + 1}>
                          {month}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col className='x7' sm={4}>
                    <Form.Select
                      aria-label="Select Year"
                      {...formik.getFieldProps('year')}
                      isInvalid={formik.touched.year && formik.errors.year}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Year</option>
                      {Array.from({ length: endYear - startYear + 1 }, (_, index) => (
                        <option key={startYear + index} value={startYear + index}>
                          {startYear + index}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
                {formik.touched.day && formik.errors.day && (
                  <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                    {formik.errors.day}
                  </Form.Control.Feedback>
                )}
                {formik.touched.month && formik.errors.month && (
                  <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                    {formik.errors.month}
                  </Form.Control.Feedback>
                )}
                {formik.touched.year && formik.errors.year && (
                  <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                    {formik.errors.year}
                  </Form.Control.Feedback>
                )}

                <h6>Gender</h6>
                <Row>
                  <Col sm={4} className='a1'>
                    <Form.Check
                      // reverse
                      label="Male"
                      name="gender"
                      type="radio"
                      id="reverse-radio-1"
                      value="male"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.gender === 'male'}
                      isInvalid={formik.touched.gender && formik.errors.gender}
                    />
                  </Col>
                  <Col sm={4} className='a2'>
                    <Form.Check
                      // reverse
                      label="Female"
                      name="gender"
                      type="radio"
                      id="reverse-radio-2"
                      value="female"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.gender === 'female'}
                      isInvalid={formik.touched.gender && formik.errors.gender}
                    />
                  </Col>
                  <Col sm={4} className='a'>
                    <Form.Check
                      // reverse
                      label="Custom"
                      name="gender"
                      type="radio"
                      id="reverse-radio-3"
                      value="custom"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.gender === 'custom'}
                      isInvalid={formik.touched.gender && formik.errors.gender}
                    />
                  </Col>
                </Row>
                {formik.touched.gender && formik.errors.gender && (
                  <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                    {formik.errors.gender}
                  </Form.Control.Feedback>
                )}
                <p></p>

                <h6>Password</h6>
                <div className="password-input-container">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="New password"
                    className='x8'
                    {...formik.getFieldProps('password')}
                    isInvalid={formik.touched.password && formik.errors.password}
                    onBlur={formik.handleBlur}
                  />
                  <span
                    className="password-toggle-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                  </Form.Control.Feedback>
                </div>
                <p></p>
                <div className="password-input-container">
                  <Form.Control
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className='x8'
                    {...formik.getFieldProps('confirmPassword')}
                    isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    onBlur={formik.handleBlur}
                  />
                  <span
                    className="password-toggle-icon"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.confirmPassword}
                  </Form.Control.Feedback>
                </div>
                <p></p>
                <div className='text-center'>
                  <button type="submit" className='z9'>Sign Up</button>
                </div>
                <p className='or'>or</p>
                <div className='text-center'>
                  <button type="button" className='z10' onClick={handleLoginClick}>
                    Login
                  </button>
                </div>
              </Form>
            </Card.Body>
          </Card>
          <br />
          <br />
          <br />
        </Col>
        <Col sm={4}></Col>
      </Row>

      {/* OTP Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header  closeButton>
          <Modal.Title style={{color:"black"}}>OTP Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            isInvalid={otpError !== ''}
          />
          {otpError && (
            <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
              {otpError}
            </Form.Control.Feedback>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={verifyOtp}>
            Verify OTP
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Signup;





