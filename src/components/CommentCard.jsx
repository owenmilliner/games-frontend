import { useVotes } from '../hooks/useVotes';

const CommentCard = ({ comment }) => {
  const { count, handleCount, voted } = useVotes(
    comment.votes,
    'comment',
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
        className={
          voted
            ? 'commentCard__voteButton--voted-true'
            : 'commentCard__voteButton--voted-false'
        }
        onClick={() => {
          handleCount();
        }}
      >
        {voted ? 'voted!' : 'vote'}
      </button>
      <p className='commentCard__voteCounter'>{count}</p>
    </div>
  );
};

export default CommentCard;
