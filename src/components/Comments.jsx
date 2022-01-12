import React from 'react';
import { getReviewCommentsById } from '../utils/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CommentCard from './CommentCard';

const Comments = () => {
  const { review_id } = useParams();
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    getReviewCommentsById(review_id)
      .then((result) => setCommentsData(result))
      .catch((error) => console.log(error));
  }, [review_id]);

  return (
    <div className='comments' id='comments'>
      <ul className='comments__list'>
        {commentsData.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default Comments;
