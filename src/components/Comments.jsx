import React from 'react';
import { getReviewCommentsById } from '../utils/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import CommentCard from './CommentCard';
import { CommentContext } from '../contexts/CommentContext';

const Comments = () => {
  const { review_id } = useParams();
  // TODO: Rather than new api call, update commentsData state
  const [commentsData, setCommentsData] = useState([]);
  const [commentDeleted, setCommentDeleted] = useState([false]);
  const [isLoading, setIsLoading] = useState(true);
  const { commentReference } = useContext(CommentContext);

  useEffect(() => {
    getReviewCommentsById(review_id)
      .then((result) => {
        setCommentsData(result);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [review_id, commentDeleted]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='comments' id='comments' ref={commentReference}>
          <ul className='comments__list'>
            {commentsData.map((comment) => (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                setCommentDeleted={setCommentDeleted}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Comments;
