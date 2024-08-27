import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import {auth,provider} from "./Firebase"
// import './Frontpage.css'
import logo from '../src/Images/Pooling logo dem.jpeg'


const Frontpg = () => {
    let navigate=useNavigate()
    console.log(auth)
    console.log(provider)
    const handlegoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log('User signed in:', result.user.displayName);

                navigate('/newpoll')
            })
            .catch((error) => {
                console.error('Error signing in with Google:', error);
            });
    };
    return (
        <Row className="align-items-center vh-100 mx-0">
            {/* Left Side - Column 6 */}
            <Col sm={6} className="text-center left-column">
                <img src={logo} alt="Polling Logo" className="polling-logo" />
            </Col>

            {/* Right Side - Column 6 */}
            <Col sm={6} className="text-center">
                <div className="container">
                    <div className="logo"></div>
                    <h1>POLLING BOOTH</h1>
                    <p>Join today.</p>
                    <div className="signup-options">
                        <Button className="signup-button" variant="primary" onClick={handlegoogle}> Sign up with Google</Button><br/>
                        <Link to="/Signup">
                            <Button className="signup-button" variant="secondary">Create account</Button>
                        </Link>
                    </div>
                    <div className="login-link">
                        <p>Already have an account? <Link to="/Loginpg">Sign in</Link></p>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Frontpg;


