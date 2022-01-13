import { useVotes } from '../hooks/useVotes';
import { CommentContext } from '../contexts/CommentContext';
import { UserContext } from '../contexts/UserContext';
import { useContext, useState } from 'react';
import { postCommentByReviewId } from '../utils/api';

const ExpandedReviewCard = ({
  singleReviewData,
  commentsData,
  setCommentsData,
  setCommentPosted,
}) => {
  const { votes, handleVotes, voted } = useVotes(
    singleReviewData.votes,
    'review',
    singleReviewData.review_id
  );
  const { commentReference } = useContext(CommentContext);
  const { isLoggedIn, username } = useContext(UserContext);

  const [isCommenting, setIsCommenting] = useState(false);
  const [commentBody, setCommentBody] = useState('');

  const handleCommentsScroll = () => commentReference.current.scrollIntoView();

  const handleNewComment = () => {
    setIsCommenting(!isCommenting);
    setCommentBody('');
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    postCommentByReviewId(singleReviewData.review_id, {
      username: username,
      body: commentBody,
    }).then(() => {
      setIsCommenting(false);
      setCommentPosted(true);
      // TODO: Removal of additional api call.
      // setCommentsData([{}, ...commentsData]);
    });
  };
  const handleCommentChange = (event) => {
    setCommentBody(event.target.value);
  };

  return (
    <div>
      <div className='expandedReviewCard'>
        <p className='expandedReviewCard__info'>
          <strong>{singleReviewData.category}</strong> posted by{' '}
          <strong>{singleReviewData.owner}</strong> on{' '}
          <strong>{singleReviewData.created_at.slice(0, 10)}</strong>
        </p>
        <h2 className='expandedReviewCard__title'>{singleReviewData.title}</h2>
        <p className='expandedReviewCard__body'>
          {singleReviewData.review_body}
        </p>
        <button
          className={
            voted
              ? 'expandedReviewCard__voteButton--voted-true'
              : 'expandedReviewCard__voteButton--voted-false'
          }
          onClick={() => {
            handleVotes();
          }}
        >
          {voted ? 'voted!' : 'vote'}
        </button>
        <p className='expandedReviewCard__voteCounter'>{votes}</p>
        <button
          className='expandedReviewCard__commentButton'
          onClick={handleCommentsScroll}
        >
          comments
        </button>
        <p className='expandedReviewCard__commentCounter'>
          {singleReviewData.comment_count}
        </p>
        {isLoggedIn ? (
          <button
            className={
              isCommenting
                ? 'expandedReviewCard__newComment--status-active'
                : 'expandedReviewCard__newComment--status-inactive'
            }
            onClick={handleNewComment}
          >
            {isCommenting ? 'cancel' : 'reply'}
          </button>
        ) : null}
      </div>
      {isCommenting ? (
        <form className='newComment' onSubmit={handleCommentSubmit}>
          <input
            type='text'
            id='comment'
            className='newComment__body'
            value={commentBody}
            onChange={handleCommentChange}
          />
          <button type='submit'>post</button>
        </form>
      ) : null}
    </div>
  );
};

export default ExpandedReviewCard;
