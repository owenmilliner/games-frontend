import React from 'react';
import { getReviewCommentsById } from '../utils/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import CommentCard from './CommentCard';
import { CommentContext } from '../contexts/CommentContext';

const Comments = ({ commentsData, setCommentsData, commentPosted }) => {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { commentReference } = useContext(CommentContext);

  useEffect(() => {
    getReviewCommentsById(review_id)
      .then((result) => {
        setCommentsData(result);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [review_id, commentPosted]);

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
                commentsData={commentsData}
                setCommentsData={setCommentsData}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Comments;
