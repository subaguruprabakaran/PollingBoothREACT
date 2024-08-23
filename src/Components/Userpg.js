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


import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

const UserProfileAndPolls = () => {
  return (
    <div>
      {/* Profile Section */}
      <Card className="mb-4">
        <Card.Body>
          <div className="text-center">
            <img src="https://via.placeholder.com/150" alt="profile" className="rounded-circle" />
            <h5>naruto</h5>
            <p>1 post | 1 Follower | 0 Following</p>
            <Button variant="primary">Edit Profile</Button>
          </div>
        </Card.Body>
      </Card>

      {/* Main Content - Polls Section */}
      <Card className="mb-4">
        <Card.Body><Row>
          <Col sm={3} style={{textAlign:"center"}}><button variant="info" style={{background:"#06b4d6",border:"none"}}>Created Polls</button></Col>
          <Col sm={3} style={{textAlign:"center"}}><button variant="info" style={{background:"#06b4d6",border:"none"}}>Voted Polls</button></Col>
          <Col sm={3} style={{textAlign:"center"}}><button variant="info" style={{background:"#06b4d6",border:"none"}}>Liked Polls</button></Col>
          <Col sm={3} style={{textAlign:"center"}}><button variant="info" style={{background:"#06b4d6",border:"none"}}>Commented Polls</button></Col>
          
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

export default UserProfileAndPolls;

