
import React, { useState, useRef } from "react";
import { Card, Button, ProgressBar, Overlay, Popover, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { BsBack } from "react-icons/bs";

function CommentsComp({ cardData, onBackClick }) {
  const {
    name,
    createdon,
    title,
    status,
    question,
    options,
    votingPeriod,
    category,
    likeCount: initialLikeCount,
    comments: initialComments,
  } = cardData;

  const [liked, setLiked] = useState(false); // State for likes
  const [likeCount, setLikeCount] = useState(initialLikeCount); // State for likes count
  const [comments, setComments] = useState(initialComments); // State for Comments
  const [newComment, setNewComment] = useState(''); // State for new comment input
  const [replyText, setReplyText] = useState({}); // State for replies
  const [selectedOption, setSelectedOption] = useState(null); // State for selected option
  const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
  const target = useRef(null); // Reference for the share button

  const toggleLike = () => {
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setLiked(!liked);
  };

  const handleOptionChange = (index) => {
    if (selectedOption === index) {
      unselectOption(); // Unselect the option if it's already selected
    } else {
      setSelectedOption(index); // Select the option
    }
  };

  const unselectOption = () => {
    setSelectedOption(null); // Unselect the currently selected option
  };

  const handleShareClick = () => {
    setShowOverlay(!showOverlay); // Toggle the overlay visibility
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        text: newComment,
        likes: 0,
        replies: [],
      };
      setComments([...comments, newCommentObj]);
      setNewComment(''); // Reset input field
    }
  };

  const handleLikeComment = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  const handleUnlikeComment = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id && comment.likes > 0
          ? { ...comment, likes: comment.likes - 1 }
          : comment
      )
    );
  };

  const handleAddReply = (commentId) => {
    if (replyText[commentId]?.trim()) {
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              { id: comment.replies.length + 1, text: replyText[commentId], likes: 0 },
            ],
          };
        }
        return comment;
      });
      setComments(updatedComments);
      setReplyText({ ...replyText, [commentId]: '' });
    }
  };

  const handleLikeReply = (commentId, replyId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const updatedReplies = comment.replies.map((reply) =>
          reply.id === replyId ? { ...reply, likes: reply.likes + 1 } : reply
        );
        return { ...comment, replies: updatedReplies };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <Card>
      <Card.Body>
        <Button onClick={onBackClick} variant="secondary" className="mb-3">
          <BsBack /> Back to All Polls
        </Button>

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
                  <div key={index}>
                    {selectedOption === index ? (
                      <ProgressBar
                        now={100}
                        label={option}
                        onClick={unselectOption} // Unselect on clicking the progress bar
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id={`option${index + 1}`}
                          name="options"
                          value={option}
                          onChange={() => handleOptionChange(index)}
                          checked={selectedOption === index}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`option${index + 1}`}
                        >
                          {option}
                        </label>
                      </div>
                    )}
                  </div>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Card.Text>

        <Card.Footer className="d-flex justify-content-between">
          <p>
            <button
              onClick={toggleLike}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <FontAwesomeIcon
                icon={liked ? solidHeart : regularHeart}
                style={{ color: liked ? "red" : "gray", fontSize: "24px" }}
              />
            </button>
            <span style={{ marginLeft: "8px" }}>{likeCount}</span>
            like
          </p>

          <p
            ref={target}
            onClick={handleShareClick}
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-share"></i> Share
          </p>
          <Overlay
            show={showOverlay}
            target={target.current}
            placement="top"
            containerPadding={20}
            rootClose
            onHide={() => setShowOverlay(false)}
          >
            <Popover id="popover-contained">
              <Popover.Header as="h3">Share this Poll</Popover.Header>
              <Popover.Body>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=yourPollLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-facebook" style={{ fontSize: "35px" }}></i>
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href="https://twitter.com/share?url=yourPollLink&text=Check+out+this+poll"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-twitter" style={{ fontSize: "35px" }}></i>
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href="https://www.instagram.com/?url=yourPollLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-instagram" style={{ fontSize: "35px" }}></i>
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href="https://api.whatsapp.com/send?text=Check%20out%20this%20poll%20https://example.com/poll/123"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-whatsapp" style={{ fontSize: "35px" }}></i>
                  </a>
                </div>
              </Popover.Body>
            </Popover>
          </Overlay>
        </Card.Footer>

        <Card.Text>
          <h6>Comments:</h6>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                {comment.text} (Likes: {comment.likes})
                <Button variant="link" onClick={() => handleLikeComment(comment.id)}>Like</Button>
                <Button variant="link" onClick={() => handleUnlikeComment(comment.id)}>Unlike</Button>
                <Form inline>
                  <Form.Control
                    type="text"
                    placeholder="Reply..."
                    value={replyText[comment.id] || ''}
                    onChange={(e) => setReplyText({ ...replyText, [comment.id]: e.target.value })}
                  />
                  <Button variant="primary" onClick={() => handleAddReply(comment.id)}>Reply</Button>
                </Form>
                {comment.replies.length > 0 && (
                  <ul>
                    {comment.replies.map((reply) => (
                      <li key={reply.id}>
                        {reply.text} (Likes: {reply.likes})
                        <Button variant="link" onClick={() => handleLikeReply(comment.id, reply.id)}>Like</Button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Form inline className="mt-3">
            <Form.Control
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <Button variant="primary" onClick={handleAddComment}>Add Comment</Button>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CommentsComp;