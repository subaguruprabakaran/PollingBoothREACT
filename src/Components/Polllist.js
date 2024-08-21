// import React from "react";
// import { Card, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import CardComp from "./Common/Card";

// function Polllist() {
  
//   let polls = [
//     {
//       name: "Rahul",
//       createdon: "3 hrs",
//       title: "test1",
//       status: "status1",
//     },
//     {
//       name: "Rahul 2",
//       createdon: "4 hrs",
//       title: "test2",
//       status: "status2",
//     },
//     {
//       name: "Rahul 3",
//       createdon: "5hrs",
//       title: "test3",
//       status: "status3",
//     },
//   ];

//   return (
//     <>
//       <>
       
//       </>
//       {polls.map((poll) => {
//         return (
//           <CardComp
//            name={poll.name}
//             createdon={poll.createdon}
//             title={poll.title}
//             status={poll.status}
//           />
//         );
//       })}
//       <Card className='polllist-card'>
//     <Card.Body>
//       <Card.Header>
//         <div>
//           <h6>Rahul</h6>
//           <p>Created: 3 hours ago</p>
//           <p>Title: testing</p>
//           <p>Status: open</p>
//         </div>
//         <Button variant="primary">Follow</Button>
//       </Card.Header>

//       <Card.Text>
//         <div className="mt-3 mb-3">test</div>
//         <Card className="mb-3">
//           <Card.Body>
//             <Card.Header className="d-flex justify-content-between">
//               <p>0 Votes</p>
//               <p>Poll Ends in 9 days</p>
//             </Card.Header>
//             <Card.Text className="d-flex flex-column">
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   id="option1"
//                   name="options"
//                   value="op1"
//                 />
//                 <label className="form-check-label" htmlFor="option1">
//                   op1
//                 </label>
//               </div>
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   id="option2"
//                   name="options"
//                   value="op2"
//                 />
//                 <label className="form-check-label" htmlFor="option2">
//                   op2
//                 </label>
//               </div>
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </Card.Text>

//       <Card.Footer className="d-flex justify-content-between">
//         <p>
//           <i className="bi bi-heart"></i> like
//         </p>
//         <p>
//           <i className="bi bi-chat-quote-fill"></i> Comments
//         </p>
//         <p>
//           <i className="bi bi-share"></i> Share
//         </p>
//       </Card.Footer>
//     </Card.Body>
//   </Card>

//       <Card>
//         <Card.Body>
//           <Card.Header className="d-flex justify-content-between align-items-center">
//             <div>
//               <h6>Rahul</h6>
//               <p>Created: 3 hours ago</p>
//               <p>Title: testing</p>
//               <p>Status: open</p>
//             </div>
//             <Button variant="primary">Follow</Button>
//           </Card.Header>

//           <Card.Text>
//             <div className="mt-3 mb-3">test</div>
//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Header className="d-flex justify-content-between">
//                   <p>0 Votes</p>
//                   <p>Poll Ends in 9 days</p>
//                 </Card.Header>
//                 <Card.Text className="d-flex flex-column">
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       id="option1"
//                       name="options"
//                       value="op1"
//                     />
//                     <label className="form-check-label" htmlFor="option1">
//                       op1
//                     </label>
//                   </div>
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       id="option2"
//                       name="options"
//                       value="op2"
//                     />
//                     <label className="form-check-label" htmlFor="option2">
//                       op2
//                     </label>
//                   </div>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Card.Text>

//           <Card.Footer className="d-flex justify-content-between">
//             <p>
//               <i className="bi bi-heart"></i> like
//             </p>
//             <p>
//               <i className="bi bi-chat-quote-fill"></i> Comments
//             </p>
//             <p>
//               <i className="bi bi-share"></i> Share
//             </p>
//           </Card.Footer>
//         </Card.Body>
//       </Card>

//       <Card>
//         <Card.Body>
//           <Card.Header className="d-flex justify-content-between align-items-center">
//             <div>
//               <h6>Sanjay</h6>
//               <p>Created: 3 hours ago</p>
//               <p>Title: testing</p>
//               <p>Status: open</p>
//             </div>
//             <Button variant="primary">Follow</Button>
//           </Card.Header>

//           <Card.Text>
//             <div className="mt-3 mb-3">test</div>
//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Header className="d-flex justify-content-between">
//                   <p>0 Votes</p>
//                   <p>Poll Ends in 9 days</p>
//                 </Card.Header>
//                 <Card.Text className="d-flex flex-column">
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       id="option1"
//                       name="options"
//                       value="op1"
//                     />
//                     <label className="form-check-label" htmlFor="option1">
//                       op1
//                     </label>
//                   </div>
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       id="option2"
//                       name="options"
//                       value="op2"
//                     />
//                     <label className="form-check-label" htmlFor="option2">
//                       op2
//                     </label>
//                   </div>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Card.Text>

//           <Card.Footer className="d-flex justify-content-between">
//             <p>
//               <i className="bi bi-heart"></i> like
//             </p>
//             <p>
//               <i className="bi bi-chat-quote-fill"></i> Comments
//             </p>
//             <p>
//               <i className="bi bi-share"></i> Share
//             </p>
//           </Card.Footer>
//         </Card.Body>
//       </Card>
      
//     </>
//   );
// }

// export default Polllist;

//----------------------------------------------  v2----------------------------------------------

// import React, { useEffect, useState } from "react";
// import { Card, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import CardComp from "./Common/Card";

// function Polllist() {
//   const [polls, setPolls] = useState([]);

//   useEffect(() => {
//     // Retrieve data from sessionStorage
//     const title = sessionStorage.getItem('pollTitle');
//     const question = sessionStorage.getItem('pollQuestion');
//     const options = JSON.parse(sessionStorage.getItem('pollOptions'));
//     const votingPeriod = sessionStorage.getItem('votingPeriod');
//     const category = sessionStorage.getItem('category');

//     // Add the new poll to the polls array
//     setPolls((prevPolls) => [
//       ...prevPolls,
//       {
//         name: "New Poll",
//         createdon: "Just now",
//         title: title,
//         question: question,
//         options: options,
//         votingPeriod: votingPeriod,
//         category: category,
//         status: "Open", // You can add logic to update status based on your requirements
//       },
//     ]);
//   }, []);

//   return (
//     <>
//       {polls.map((poll, index) => (
//         <CardComp
//           key={index}
//           name={poll.name}
//           createdon={poll.createdon}
//           title={poll.title}
//           status={poll.status}
//         />
//       ))}
//     </>
//   );
// }

// export default Polllist;

//------------------------------------------------------------- V3 -------------------------------------------------------
import React, { useEffect, useState } from "react";
import CardComp from "./Common/Card"; // Make sure this imports your Card component
import "bootstrap/dist/css/bootstrap.min.css";

function Polllist() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    // Retrieve all polls from session storage
    const storedPolls = JSON.parse(sessionStorage.getItem("polls")) || [];
    setPolls(storedPolls);
  }, []);

  const handlePollSubmit = (newPoll) => {
    // Update the polls state with the new poll added at the top
    setPolls((prevPolls) => [newPoll, ...prevPolls]);
    
    // Also update the session storage if needed
    sessionStorage.setItem("polls", JSON.stringify([newPoll, ...polls]));
  };

  return (
    <>
      {polls.map((poll, index) => (
        <CardComp
          key={index}
          name={poll.name}
          createdon={poll.createdon}
          title={poll.pollTitle} // Display the poll title
          question={poll.pollQuestion} // Display the poll question
          options={poll.pollOptions} // Display poll options
          votingPeriod={poll.votingPeriod} // Display voting period
          category={poll.category} // Display category
          status={poll.status} // Display status
          onPollSubmit={handlePollSubmit} // Pass the function here
        />
      ))}
    </>
  );
}

export default Polllist;