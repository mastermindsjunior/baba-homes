import React from 'react';

const CommentBlock = (props) => {
    return (
        <div className="commenter-block">
            <div className="comment-avatar">
                <img alt="img" src={props.img} className="avatar" />
            </div>
            <div className="comment-content">
                <div className="comment-author-name">{props.name} <span className="comment-date">{props.date}</span></div>
                <div className="comment-author-comment">
                    <p>Lorem ipsum dolor sit amet, consectetur. Ut enim ad minima veniam quis nostrum exercitationem mosequatu autem.</p>
                    <span className="comment-reply"><a href="#" className="comment-reply-link">Reply</a></span>
                </div>
            </div>
        </div>
    );
};

export default CommentBlock;