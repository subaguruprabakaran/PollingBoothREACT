import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Comment({ comment, onLike, onReply}) {
  const [replyText, setReplyText] = useState('');
  const [showReplyInput, setShowReplyInput] = useState(false);


  if (!comment || !comment.replies) {
    // Safeguard in case comment or replies are undefined
    return null;
  }

  
  const handleLike = () => onLike(comment.id);
  const handleReply = () => {
    onReply(comment.id, replyText);
    setReplyText('');
    setShowReplyInput(false);
  };

  return (
    <div style={{ marginLeft: comment.depth * 20, marginBottom: '20px' }}>
      <p>{comment.text}</p>
      <p
        style={{ cursor: 'pointer', color: 'blue', display: 'inline' }}
        onClick={handleLike}
      >
        <i className="bi bi-heart-fill" style={{ color: 'red' }}></i> Like {comment.likes}
      </p>
      <p
        style={{ cursor: 'pointer', color: 'blue', display: 'inline', marginLeft: '15px' }}
        onClick={() => setShowReplyInput(!showReplyInput)}
      >
        Reply
      </p>
      {showReplyInput && (
        <Form onSubmit={(e) => {
          e.preventDefault();
          handleReply();
        }}>
          <Form.Control
            type="text"
            placeholder="Write a reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            style={{ marginTop: '10px' }}
          />
          <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
            Submit Reply
          </Button>
        </Form>
      )}
      {comment.replies.length > 0 && (
        <div style={{ marginTop: '10px' }}>
          {comment.replies.map(reply => (
            <Comment
              key={reply.id}
              comment={{ ...reply, depth: (comment.depth || 0) + 1 }} // Increase depth for nested replies
              onLike={onLike}
              onReply={onReply}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Comment;