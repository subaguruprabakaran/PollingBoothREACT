// import { React , useState} from 'react'
// import { Button, Card ,Modal ,Form } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
// import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
// import Comment from './Comment';
// import ShareModal from './ShareModal';



// function CardComp({name,createdon,title,status,question, options, votingPeriod, category, status}) {

//     const [liked, setLiked] = useState(false);
//   const [likeCount, setLikeCount] = useState(5); // Initialize the like count state

//   const [showModal, setShowModal] = useState(false);
//   const [comments, setComments] = useState([
//     { id: 1, text: 'This is the first comment.', likes: 0, replies: [] },
//     { id: 2, text: 'This is the second comment.', likes: 0, replies: [] },
//     // Add more comments as needed
//   ]);


// const toggleLike = () => {
//     if (liked) {
//       setLikeCount(likeCount - 1); // Decrease the count if already liked
//     } else {
//       setLikeCount(likeCount + 1); // Increase the count if not liked yet
//     }
//     setLiked(!liked);
//   };

//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);



// const handleLike = (id) => {
//     const updateLikes = (comment) => {
//       if (comment.id === id) {
//         return { ...comment, likes: comment.likes + 1 };
//       }
//       if (comment.replies && comment.replies.length > 0) {
//         return { ...comment, replies: comment.replies.map(updateLikes) };
//       }
//       return comment;
//     };

//     setComments(comments.map(updateLikes));
//   };

//   const handleReply = (id, replyText) => {
//     const addReply = (comment) => {
//       if (comment.id === id) {
//         return {
//           ...comment,
//           replies: [...comment.replies, { id: Date.now(), text: replyText, likes: 0, replies: [], depth: (comment.depth || 0) + 1 }]
//         };
//       }
//       if (comment.replies && comment.replies.length > 0) {
//         return { ...comment, replies: comment.replies.map(addReply) };
//       }
//       return comment;
//     };

//     setComments(comments.map(addReply));
//   };

//   return (
//     <Card>
//     <Card.Body>
//       <Card.Header className="d-flex justify-content-between align-items-center">
//         <div>
//           <h6>name:{name}</h6>
//           <p>Created: {createdon}</p>
//           <p>Title: {title}</p>
//           <p>Status: {status}</p>
//         </div>
//         <Button variant="primary">Follow</Button>
//       </Card.Header>

//       <Card.Text>
//         <div className="mt-3 mb-3">{question}</div>
//         <Card className="mb-3">
//           <Card.Body>
//             <Card.Header className="d-flex justify-content-between">
//             <p>Poll Ends on {votingPeriod}</p>
//             <p>Category: {category}</p>
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
//           {/* <i className="bi bi-heart"></i>  */}
//           {/* <button onClick={toggleLike} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
//         <FontAwesomeIcon
//           icon={liked ? solidHeart : regularHeart}
//           style={{ color: liked ? 'red' : 'gray', fontSize: '24px' }}
//         />
//       </button> */}
//       <button onClick={toggleLike} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
//         <FontAwesomeIcon
//           icon={liked ? solidHeart : regularHeart}
//           style={{ color: liked ? 'red' : 'gray', fontSize: '24px' }}
//         />
//       </button>
//       <span style={{ marginLeft: '8px' }}>{likeCount}</span> {/* Display the like count */}

//       like
//         </p>
//       <p onClick={handleShow} style={{ cursor: 'pointer', color: 'blue' }}>
//         <i className="bi bi-chat-quote-fill"></i> Comments
//       </p>

//       <Modal show={showModal} onHide={handleClose} style={{backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
//         <Modal.Header closeButton>
//           <Modal.Title>Comments</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {comments.map(comment => (
//             <Comment
//               key={comment.id}
//               comment={comment}
//               onLike={handleLike}
//               onReply={handleReply}
//             />
//           ))}

//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>


//         {/* <p>
//           <i className="bi bi-share"></i> Share
//         </p> */}

//         <p onClick={handleShow} style={{ cursor: 'pointer' }}>
//         <i className="bi bi-share"></i> Share </p>
//       </Card.Footer>
//     </Card.Body>
//   </Card>
//   )
// }

// export default CardComp

//------------------------------------------------------------------------------------------
// import React from "react";
// import { Card, Button } from "react-bootstrap";

// function CardComp({ name, createdon, title, status, question, options, votingPeriod, category }) {
//   return (
//     <Card className="polllist-card mb-4">
//       <Card.Body>
//         <Card.Header className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6>{name}</h6>
//             <p>Created: {createdon}</p>
//             <p>Title: {title}</p>
//             <p>Status: {status}</p>
//           </div>
//           <Button variant="primary">Follow</Button>
//         </Card.Header>

//         <Card.Text>
//           <div className="mt-3 mb-3">{question}</div>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Header className="d-flex justify-content-between">
//                 <p>Poll Ends on {votingPeriod}</p>
//                 <p>Category: {category}</p>
//               </Card.Header>
//               <Card.Text className="d-flex flex-column">
//                 {options.map((option, index) => (
//                   <div className="form-check" key={index}>
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       id={`option${index}`}
//                       name="options"
//                       value={option}
//                     />
//                     <label className="form-check-label" htmlFor={`option${index}`}>
//                       {option}
//                     </label>
//                   </div>
//                 ))}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Card.Text>

//         <Card.Footer className="d-flex justify-content-between">
//           <p>
//             <i className="bi bi-heart"></i> Like
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

// export default CardComp;

//------------------------------------------------------------------------------------------------

import { React, useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import Comment from './Comment';
import ShareModal from './ShareModal';

function CardComp({ name, createdon, title, status, question, options, votingPeriod, category , onPollSubmit }) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(5); // Initialize the like count state
    const [showModal, setShowModal] = useState(false);
    const [comments, setComments] = useState([
        { id: 1, text: 'This is the first comment.', likes: 0, replies: [] },
        { id: 2, text: 'This is the second comment.', likes: 0, replies: [] },
    ]);

    const toggleLike = () => {
        setLikeCount(liked ? likeCount - 1 : likeCount + 1);
        setLiked(!liked);
    };

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleLike = (id) => {
        const updateLikes = (comment) => {
            if (comment.id === id) {
                return { ...comment, likes: comment.likes + 1 };
            }
            if (comment.replies && comment.replies.length > 0) {
                return { ...comment, replies: comment.replies.map(updateLikes) };
            }
            return comment;
        };

        setComments(comments.map(updateLikes));
    };

    const handleReply = (id, replyText) => {
        const addReply = (comment) => {
            if (comment.id === id) {
                return {
                    ...comment,
                    replies: [
                        ...comment.replies,
                        { id: Date.now(), text: replyText, likes: 0, replies: [] }
                    ]
                };
            }
            if (comment.replies && comment.replies.length > 0) {
                return { ...comment, replies: comment.replies.map(addReply) };
            }
            return comment;
        };

        setComments(comments.map(addReply));
    };
    

    return (
        <Card>
            <Card.Body>
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <div>
                        <h6>Name: {name}</h6>
                        <p>Created: {createdon}</p>
                        <p>Title: {title}</p>
                        <p>Status: {status}</p>
                    </div>
                    <Button variant="primary">Follow</Button>
                </Card.Header>

                <Card.Text>
                    <div className="mt-3 mb-3">{question}</div>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Header className="d-flex justify-content-between">
                                <p>Poll Ends on {votingPeriod}</p>
                                <p>Category: {category}</p>
                            </Card.Header>
                            <Card.Text className="d-flex flex-column">
                                {options.map((option, index) => (
                                    <div className="form-check" key={index}>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id={`option${index + 1}`}
                                            name="options"
                                            value={option}
                                        />
                                        <label className="form-check-label" htmlFor={`option${index + 1}`}>
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Card.Text>

                <Card.Footer className="d-flex justify-content-between">
                    <p>
                        <button onClick={toggleLike} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                            <FontAwesomeIcon
                                icon={liked ? solidHeart : regularHeart}
                                style={{ color: liked ? 'red' : 'gray', fontSize: '24px' }}
                            />
                        </button>
                        <span style={{ marginLeft: '8px' }}>{likeCount}</span> {/* Display the like count */}
                        like
                    </p>
                    <p onClick={handleShow} style={{ cursor: 'pointer', color: 'blue' }}>
                        <i className="bi bi-chat-quote-fill"></i> Comments
                    </p>

                    <Modal show={showModal} onHide={handleClose} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <Modal.Header closeButton>
                            <Modal.Title>Comments</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {comments.map(comment => (
                                <Comment
                                    key={comment.id}
                                    comment={comment}
                                    onLike={handleLike}
                                    onReply={handleReply}
                                />
                            ))}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <p onClick={handleShow} style={{ cursor: 'pointer' }}>
                        <i className="bi bi-share"></i> Share
                    </p>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
}

export default CardComp;