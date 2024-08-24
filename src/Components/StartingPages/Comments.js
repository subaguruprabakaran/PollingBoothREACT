import React, { useState } from 'react';


const Comments = ({ comment }) => {
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [replies, setReplies] = useState(comment.replies || []);
    const [replyText, setReplyText] = useState('');

    const handleReply = () => {
        const newReply = {
            id: replies.length + 1,
            text: replyText,
            replies: [],
        };
        setReplies([...replies, newReply]);
        setReplyText('');
        setShowReplyBox(false);
    };

    return (

        <div>   
        <p>{comment.text}</p>
            <button onClick={() => setShowReplyBox(!showReplyBox)}>Reply</button>
            {showReplyBox && (
                <div style={{ marginTop: '10px' }}>
                    <input 
                        type="text" 
                        value={replyText} 
                        onChange={(e) => setReplyText(e.target.value)} 
                        placeholder="Write a reply..." 
                    />
                    <button onClick={handleReply}>Post Reply</button>
                </div>
            )}
            {replies.length > 0 && (
                <div style={{ marginTop: '10px' }}>
                    {replies.map(reply => (
                        <Comments key={reply.id} comment={reply} />
                    ))}
                </div>
            )}
        </div>

        
    );
};

export default Comments;




