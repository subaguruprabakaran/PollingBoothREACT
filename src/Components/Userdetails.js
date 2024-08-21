import React from 'react'
import {Card , Button,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";



function Userdetails() {
  return (
    <div>
<Card className="user-profile-card">
      <Card.Body className="text-center">
        <img src="/path-to-profile-pic" alt="Profile" className="profile-pic mb-3" />
        <Card.Title>SANJAY</Card.Title>
        <Card.Text>@SANJAY1987765</Card.Text>
        <Card.Text>Joined May 2024</Card.Text>
        <Card.Text>10 Following | 0 Followers</Card.Text>
        <Button variant="primary" className="mb-2">Get verified</Button>
        <Button variant="secondary" className="edit-profile-button">Edit profile</Button>
      </Card.Body>
    </Card>


    </div>
  )
}



export default Userdetails