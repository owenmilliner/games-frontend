import { useState, useEffect } from 'react';
import { handleVote } from '../utils/utils';
// TODO: implementation of custom hooks
import { useCount } from '../hooks/useCount';

const CommentCard = ({ comment }) => {
  //   const [voteCount, setVoteCount] = useState(0); //Terrible way to go about this I think - will think of alternate method later
  //   const [voted, setVoted] = useState(false);
  const { count, handleCount } = useCount(
    comment.votes,
    'commentCard',
    comment.comment_id
  );

  return (
    <div className='commentCard'>
      <p className='commentCard__info'>
        <strong>{comment.author}</strong> on{' '}
        <strong>
          {comment.created_at ? comment.created_at.slice(0, 10) : null}
        </strong>
      </p>
      <p className='commentCard__body'>{comment.body}</p>
      <button
        className='commentCard__voteButton--voted-false'
        onClick={() => {
          handleCount();
          //   setVoted(
          //     handleVote(
          //       comment.comment_id,
          //       voted,
          //       voteCount,
          //       setVoteCount,
          //       'commentCard',
          //       'comment'
          //     ) // Help - would like to make custom hook but unsure
          //   );
        }}
      >
        vote
      </button>
      <p className='commentCard__voteCounter'>{count}</p>
    </div>
  );
};

export default CommentCard;
