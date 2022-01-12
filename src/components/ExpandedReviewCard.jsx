import { useVotes } from '../hooks/useVotes';

const ExpandedReviewCard = ({ singleReviewData }) => {
  const { votes, handleVotes, voted } = useVotes(
    singleReviewData.votes,
    'review',
    singleReviewData.review_id
  );

  const handleCommentsScroll = () => {
    document.getElementById('comments').scrollIntoView();
  };

  return (
    <div className='expandedReviewCard'>
      <p className='expandedReviewCard__info'>
        <strong>{singleReviewData.category}</strong> posted by{' '}
        <strong>{singleReviewData.owner}</strong> on{' '}
        <strong>
          {singleReviewData.created_at
            ? singleReviewData.created_at.slice(0, 10)
            : null}
        </strong>
      </p>
      <h2 className='expandedReviewCard__title'>{singleReviewData.title}</h2>
      <p className='expandedReviewCard__body'>{singleReviewData.review_body}</p>
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
      <p className='expandedReviewCard__commentCount'>
        {singleReviewData.comment_count}
      </p>
    </div>
  );
};

export default ExpandedReviewCard;
