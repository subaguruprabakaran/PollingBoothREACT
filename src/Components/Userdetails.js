// import React from 'react'
// import {Card , Button,} from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";



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



import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

const Userdetails = () => {
  return (
    <div>
      {/* Profile Section */}
      <Card className="mb-4">
        <Card.Body>
          <div className="text-center">
            <img src="https://via.placeholder.com/150" alt="profile" className="rounded-circle" />
            <h5>naruto</h5>
            <p>1 post | 1 Follower | 0 Following</p>
            <Button variant="primary">User Details</Button>
          </div>
        </Card.Body>
      </Card>

      {/* Main Content - Polls Section */}
      <Card className="mb-4">
        <Card.Body><Row>
          <Col><button variant="info">Created Polls</button></Col>
          <Col><button variant="info" className="ml-2">Voted Polls</button></Col>
          <Col><button variant="info" className="ml-2">Liked Polls</button></Col>
          <Col><button variant="info" className="ml-2">Commented Polls</button></Col>
          
          </Row>
        </Card.Body>
      </Card>
      
      {/* <h5>Created Polls</h5>
      <Card className="mb-4">
        <Card.Body>
          <h6>naruto</h6>
          <p>Created: 1 month ago</p>
          <p>Title: Title | Status: Closed</p>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Userdetails;
