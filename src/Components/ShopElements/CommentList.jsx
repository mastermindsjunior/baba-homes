import React from 'react';
import CommentBlock from './CommentBlock';

const CommentList = () => {
    return (
        <div className="comments-area">
            <h3 className="comments-title">Comments <span className="title-line"></span></h3>
            <ul className="comment-list">
                <li className="comment even thread-even depth-1">
                    <CommentBlock img='images/blog/commenter1.png' name='Mellisa Doe' date='August 29, 2022' />

                    <ul className="children">
                        <li className="comment even thread-even depth-2">
                            <CommentBlock img='images/blog/commenter2.png' name='Patric Doe' date='September 22, 2022' />
                        </li>
                    </ul>
                </li>
                <li className="comment odd thread-odd depth-1">
                    <CommentBlock img='images/blog/commenter3.png' name='Mellisa Doe' date='April 01, 2022' />

                </li>
            </ul>
            <div className="comments-pagination">
                <a className="page-numbers" href="#">1</a>
                <span aria-current="page" className="page-numbers current">2</span>
            </div>
        </div>
    );
};

export default CommentList;