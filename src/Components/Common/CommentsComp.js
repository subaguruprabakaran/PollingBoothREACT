// // CommentsComp.js
// import React, { useState } from "react";

// function CommentsComp({
//   name,
//   createdon,
//   title,
//   status,
//   question,
//   options,
//   votingPeriod,
//   category,
//   comments,
//   onAddComment,
//   onLikeComment,
//   onReplyComment,
// }) {
//   const [newComment, setNewComment] = useState("");

//   const handleAddComment = () => {
//     if (newComment) {
//       onAddComment(newComment);
//       setNewComment("");
//     }
//   };

//   const renderComments = (comments) => {
//     return comments.map((comment) => (
//       <div key={comment.id}>
//         <p>{comment.text} (Likes: {comment.likes})</p>
//         <button onClick={() => onLikeComment(comment.id)}>Like</button>
//         <button onClick={() => onReplyComment(comment.id, prompt("Reply:"))}>
//           Reply
//         </button>
//         {comment.replies && comment.replies.length > 0 && (
//           <div style={{ paddingLeft: "20px" }}>
//             {renderComments(comment.replies)}
//           </div>
//         )}
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{question}</p>
//       <p>Status: {status}</p>
//       <p>Category: {category}</p>
//       <p>Poll Ends on: {votingPeriod}</p>
//       <div>
//         <h4>Comments</h4>
//         <input
//           type="text"
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           placeholder="Add a comment..."
//         />
//         <button onClick={handleAddComment}>Submit</button>
//         {renderComments(comments)}
//       </div>
//     </div>
//   );
// }

// export default CommentsComp;



// import React from 'react'
// import CardComp from './Card'

// function CommentsComp() {
//   return (
//     <div>
//          {polls.map((poll, index) => (
//         <CardComp
//           key={index}
//           index={index}
//           name={poll.name}
//           createdon={poll.createdon}
//           title={poll.pollTitle} // Display the poll title
//           question={poll.pollQuestion} // Display the poll question
//           options={poll.pollOptions} // Display poll options
//           votingPeriod={poll.votingPeriod} // Display voting period
//           category={poll.category} // Display category
//           status={poll.status} // Display status
//           // onPollSubmit={handlePollSubmit} // Pass the function here
//           // onCardClick={handleCardClick} // Pass the handler to CardComp
//         />
//       ))}
//     </div>
//   )
// }

// export default CommentsComp



