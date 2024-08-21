
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ShareModal = ({ show, onHide, shareLink }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Share This Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Share this card on your social media:</p>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`} target="_blank" rel="noopener noreferrer">
          Facebook
        </a><br />
        <a href={`https://twitter.com/intent/tweet?url=${shareLink}`} target="_blank" rel="noopener noreferrer">
          Twitter
        </a><br />
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareLink}`} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a><br />
        {/* Add more social media links as needed */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


export default ShareModal;