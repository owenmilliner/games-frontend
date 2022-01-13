import { useVotes } from '../hooks/useVotes';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { deleteCommentById } from '../utils/api';

const CommentCard = ({ comment, setCommentDeleted }) => {
  const { votes, handleVotes, voted } = useVotes(
    comment.votes,
    'comment',
    comment.comment_id
  );
  const { username } = useContext(UserContext);

  const handleCommentDeletion = () => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      deleteCommentById(comment.comment_id)
        .then(() => setCommentDeleted(true))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className='commentCard'>
      <p className='commentCard__info'>
        <strong>{comment.author}</strong> on{' '}
        <strong>{comment.created_at.slice(0, 10)}</strong>
      </p>
      {username === comment.author ? (
        <button className='commentCard__delete' onClick={handleCommentDeletion}>
          delete
        </button>
      ) : null}
      <p className='commentCard__body'>{comment.body}</p>
      <button
        className={
          voted
            ? 'commentCard__voteButton--voted-true'
            : 'commentCard__voteButton--voted-false'
        }
        onClick={() => {
          handleVotes();
        }}
      >
        {voted ? 'voted!' : 'vote'}
      </button>
      <p className='commentCard__voteCounter'>{votes}</p>
    </div>
  );
};

export default CommentCard;
