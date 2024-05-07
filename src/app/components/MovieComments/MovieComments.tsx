import styles from '../MovieComments/MovieComments.module.css';
import React, { useState, useEffect } from 'react';
import { CommentStructure } from './MovieComments.interface';
import { format, formatDate } from 'date-fns';

export const MovieComments = ({imdbID}) => {
  const [comments, setComments] = useState<CommentStructure[]>([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${imdbID}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [imdbID]);

  const handlePostComment = () => {
    const comment: CommentStructure = {
      id: new Date().getTime(),
      username: 'User',
      date: formatDate(new Date(), 'MMM dd, yyyy'),
      content: newComment
    };

    const updatedComments = [comment, ...comments];
    localStorage.setItem(`comments-${imdbID}`, JSON.stringify(updatedComments));
    setComments(updatedComments);
    setNewComment('');
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Commentary</h2>
      </div>
      <textarea
        className={styles.commentBox}
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add your comments here"
      />
      <div className={styles.buttonWrapper}>
        <button className={styles.postButton} onClick={handlePostComment}>Post</button>
      </div>
      <div className={styles.commentList}>
        {comments.map(comment => (
          <div key={comment.id} className={styles.comment}>
            <div className={styles.commentMetadata}>{comment.username} - {comment.date}</div>
            <div className={styles.commentText}>{comment.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};