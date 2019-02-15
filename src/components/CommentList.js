import React from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

const CommentList = ({ comments, isOpen, toggleOpenClick }) => {

    if (!comments || !comments.length) {
        return null;
    }
    const commentComponents = isOpen ? comments.map(comment =>
        <Comment key={comment.id} comment={comment}></Comment>) : null;

    return (
        <section>
            <button onClick={toggleOpenClick}>{isOpen ? 'hide comments' : 'show comments'}</button>
            {commentComponents}
        </section>
    );
}

export default toggleOpen(CommentList);