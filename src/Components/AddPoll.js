// import React from 'react'
// import {Card , Button,Form,Row,Col , InputGroup} from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";


// function AddPoll() {
//   return (
//     <>
//         <Card style={{ padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
//             <Card.Header style={{textAlign:"center"}}> Create Your Polls here!</Card.Header>
//       <Form>
//         <Form.Group controlId="pollTitle" className="mb-3">
//           <Form.Control type="text" placeholder="Title" />
//         </Form.Group>

//         <Form.Group controlId="pollQuestion" className="mb-3">
//           <Form.Control as="textarea" rows={2} placeholder="Question" />
//         </Form.Group>

//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="option1" className="mb-3">
//               <InputGroup>
//                 <InputGroup.Text>
//                   <i className="bi bi-list"></i>
//                 </InputGroup.Text>
//                 <Form.Control type="text" placeholder="Option 1" />
//               </InputGroup>
//             </Form.Group>

//             <Form.Group controlId="option2" className="mb-3">
//               <InputGroup>
//                 <InputGroup.Text>
//                   <i className="bi bi-list"></i>
//                 </InputGroup.Text>
//                 <Form.Control type="text" placeholder="Option 2" />
//               </InputGroup>
//             </Form.Group>

//             <Button variant="success" className="mb-3">
//               Add Option
//             </Button>
//           </Col>

//           <Col md={6}>
//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Title>Tips On Better Polls</Card.Title>
//                 <Card.Text>
//                   <ul>
//                     <li>Suggest short clear options</li>
//                     <li>The more options, the better</li>
//                     <li>Choose the poll duration</li>
//                     <li>Options can't be edited after post creation</li>
//                   </ul>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="votingPeriod">
//               <Form.Label>Voting Period</Form.Label>
//               <Form.Control type="date" placeholder="dd-mm-yyyy" />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Form.Group controlId="categorySelect" className="mb-3">
//           <Form.Label>Select Category:</Form.Label>
//           <Form.Select>
//             <option>Sample</option>
//             <option>Education</option>
//             <option>Entertainment</option>
//             <option>Politics</option>
//             <option>Sports</option>
//             <option>Research</option>

//           </Form.Select>
//         </Form.Group>

//         <Button variant="secondary" className="me-2">
//           Cancel
//         </Button>
//         <Button variant="primary">Post</Button>
//       </Form>
//     </Card>
//     </>
//   )
// }

// export default AddPoll

//---------------------------------------------V2-----------------------------------------------

// import React, { useState } from "react";
// import { Card, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// function AddPoll({ onPollSubmit }) {
//   const [pollTitle, setPollTitle] = useState("");
//   const [pollQuestion, setPollQuestion] = useState("");
//   const [pollOptions, setPollOptions] = useState(["", ""]);
//   const [votingPeriod, setVotingPeriod] = useState("");
//   const [category, setCategory] = useState("");

//   const handleAddOption = () => {
//     if (pollOptions.length < 4) {
//       setPollOptions([...pollOptions, ""]);
//     }
//   };


//   const handleOptionChange = (index, value) => {
//     const newOptions = [...pollOptions];
//     newOptions[index] = value;
//     setPollOptions(newOptions);
//   };

//   const handleRemoveOption = (index) => {
//     if (pollOptions.length > 2) {
//       const newOptions = pollOptions.filter((_, i) => i !== index);
//       setPollOptions(newOptions);
//     }
//   };

//   const handleSubmit = () => {
//     const pollData = {
//       pollTitle,
//       pollQuestion,
//       pollOptions,
//       votingPeriod,
//       category,
//     };

//     // Trigger update in the PollList component
//     onPollSubmit(pollData);

//     // Clear the form
//     setPollTitle("");
//     setPollQuestion("");
//     setPollOptions(["", ""]);
//     setVotingPeriod("");
//     setCategory("");
//   };

//   return (
//     <Card
//       style={{
//         padding: "20px",
//         borderRadius: "10px",
//         boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <Card.Header style={{ textAlign: "center" }}>
//         Create Your Polls here!
//       </Card.Header>
//       <Form>
//         <Form.Group controlId="pollTitle" className="mb-3">
//           <Form.Control
//             type="text"
//             placeholder="Title"
//             value={pollTitle}
//             onChange={(e) => setPollTitle(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="pollQuestion" className="mb-3">
//           <Form.Control
//             as="textarea"
//             rows={2}
//             placeholder="Question"
//             value={pollQuestion}
//             onChange={(e) => setPollQuestion(e.target.value)}
//           />
//         </Form.Group>

//         <Row>
//           <Col md={6}>
//             {pollOptions.map((option, index) => (
//               <Form.Group
//                 controlId={`option${index}`}
//                 className="mb-3"
//                 key={index}
//               >
//                 <InputGroup>
//                   <InputGroup.Text>
//                     <i className="bi bi-list"></i>
//                   </InputGroup.Text>
//                   <Form.Control
//                     type="text"
//                     placeholder={`Option ${index + 1}`}
//                     value={option}
//                     onChange={(e) =>
//                       handleOptionChange(index, e.target.value)
//                     }
//                   />
//                   {pollOptions.length > 2 && (
//                     <Button
//                       variant="danger"
//                       onClick={() => handleRemoveOption(index)}
//                     >
//                       -
//                     </Button>
//                   )}
//                 </InputGroup>
//               </Form.Group>
//             ))}

//             {pollOptions.length < 4 && (
//               <Button
//                 variant="success"
//                 className="mb-3"
//                 onClick={handleAddOption}
//               >
//                 Add Option
//               </Button>
//             )}
//           </Col>

//           <Col md={6}>
//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Title>Tips On Better Polls</Card.Title>
//                 <Card.Text>
//                   <ul>
//                     <li>Suggest short clear options</li>
//                     <li>The more options, the better</li>
//                     <li>Choose the poll duration</li>
//                     <li>Options can't be edited after post creation</li>
//                   </ul>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="votingPeriod">
//               <Form.Label>Voting Period</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={votingPeriod}
//                 onChange={(e) => setVotingPeriod(e.target.value)}
//               />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Form.Group controlId="categorySelect" className="mb-3">
//           <Form.Label>Select Category:</Form.Label>
//           <Form.Select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="">Select Category</option>
//             <option value="Education">Education</option>
//             <option value="Entertainment">Entertainment</option>
//             <option value="Politics">Politics</option>
//             <option value="Sports">Sports</option>
//             <option value="Research">Research</option>
//           </Form.Select>
//         </Form.Group>

//         <Button variant="secondary" className="me-2">
//           Cancel
//         </Button>
//         <Button variant="primary" onClick={handleSubmit}>
//           Post
//         </Button>
//       </Form>
//     </Card>
//   );
// }

// export default AddPoll;


//------------------------------------------------------------- V 3 -------------------------------------------------------
import React, { useState } from "react";
import { Card, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function AddPoll({ onPollSubmit }) {
  const [pollTitle, setPollTitle] = useState("");
  const [pollQuestion, setPollQuestion] = useState("");
  const [pollOptions, setPollOptions] = useState(["", ""]);
  const [votingPeriod, setVotingPeriod] = useState("");
  const [category, setCategory] = useState("");

  const handleAddOption = () => {
    if (pollOptions.length < 4) {
      setPollOptions([...pollOptions, ""]);
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);
  };

  const handleRemoveOption = (index) => {
    if (pollOptions.length > 2) {
      const newOptions = pollOptions.filter((_, i) => i !== index);
      setPollOptions(newOptions);
    }
  };

  const handleSubmit = () => {
    const pollData = {
      pollTitle,
      pollQuestion,
      pollOptions,
      votingPeriod,
      category,
      createdon: "Just now",
      name: "Rahul", // Use your name or fetch dynamically
      status: "Open",
    };

    // Retrieve existing polls from session storage
    const existingPolls = JSON.parse(sessionStorage.getItem("polls")) || [];

    // Add the new poll at the beginning
    const updatedPolls = [pollData, ...existingPolls];

    // Store the updated polls in session storage
    sessionStorage.setItem("polls", JSON.stringify(updatedPolls));

    // Trigger update in the PollList component
    onPollSubmit(updatedPolls);

    // Clear the form
    setPollTitle("");
    setPollQuestion("");
    setPollOptions(["", ""]);
    setVotingPeriod("");
    setCategory("");
  };

  return (
    <Card
      style={{
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Card.Header style={{ textAlign: "center" }}>
        Create Your Polls here!
      </Card.Header>
      <Form>
        <Form.Group controlId="pollTitle" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Title"
            value={pollTitle}
            onChange={(e) => setPollTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="pollQuestion" className="mb-3">
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Question"
            value={pollQuestion}
            onChange={(e) => setPollQuestion(e.target.value)}
          />
        </Form.Group>

        <Row>
          <Col md={6}>
            {pollOptions.map((option, index) => (
              <Form.Group
                controlId={`option${index}`}
                className="mb-3"
                key={index}
              >
                <InputGroup>
                  <InputGroup.Text>
                    <i className="bi bi-list"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) =>
                      handleOptionChange(index, e.target.value)
                    }
                  />
                  {pollOptions.length > 2 && (
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveOption(index)}
                    >
                      -
                    </Button>
                  )}
                </InputGroup>
              </Form.Group>
            ))}

            {pollOptions.length < 4 && (
              <Button
                variant="success"
                className="mb-3"
                onClick={handleAddOption}
              >
                Add Option
              </Button>
            )}
          </Col>

          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Tips On Better Polls</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Suggest short clear options</li>
                    <li>The more options, the better</li>
                    <li>Choose the poll duration</li>
                    <li>Options can't be edited after post creation</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="votingPeriod">
              <Form.Label>Voting Period</Form.Label>
              <Form.Control
                type="date"
                value={votingPeriod}
                onChange={(e) => setVotingPeriod(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="categorySelect" className="mb-3">
          <Form.Label>Select Category:</Form.Label>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Politics">Politics</option>
            <option value="Sports">Sports</option>
            <option value="Research">Research</option>
          </Form.Select>
        </Form.Group>

        <Button variant="secondary" className="me-2">
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Post
        </Button>
      </Form>
    </Card>
  );
}

export default AddPoll;