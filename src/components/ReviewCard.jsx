import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useVotes } from '../hooks/useVotes';
import { useReviewDeletion } from '../hooks/useReviewDeletion';
import { UserContext } from '../contexts/UserContext';

const ReviewCard = ({ review, reviewsData, setReviewsData }) => {
  const { votes, handleVotes, voted } = useVotes(
    review.votes,
    'review',
    review.review_id
  );
  const { handleReviewDeletion } = useReviewDeletion(
    review,
    reviewsData,
    setReviewsData
  );

  const { username } = useContext(UserContext);

  return (
    <div className='reviewCard'>
      <Link
        to={`/reviews/${review.review_id}`}
        className='link reviewCard__link'
      >
        <p className='reviewCard__info'>
          <strong>{review.category}</strong> posted by{' '}
          <strong>{review.owner}</strong> on{' '}
          <strong>{review.created_at.slice(0, 10)}</strong>
        </p>
        <h2 className='reviewCard__title'>{review.title}</h2>
      </Link>
      <button
        className={
          voted
            ? 'reviewCard__voteButton--voted-true'
            : 'reviewCard__voteButton--voted-false'
        }
        onClick={() => {
          handleVotes();
        }}
      >
        {voted ? 'voted!' : 'vote'}
      </button>
      <p className='reviewCard__voteCounter'>{votes}</p>
      {/* TODO: useNavigate to send to comments of the selected review. */}
      <button
        className='reviewCard__commentButton'
        // onClick={<Navigate to={'/'}/>}
      >
        comments
      </button>
      <p className='reviewCard__commentCount'>{review.comment_count}</p>
      {username === review.owner ? (
        <button
          className='reviewCard__deleteButton'
          onClick={handleReviewDeletion}
        >
          delete
        </button>
      ) : null}
      <Link
        to={`/reviews/${review.review_id}`}
        className='reviewCard__image__link'
      >
        <img
          className='reviewCard__image'
          src={review.review_img_url}
          alt='Review Thumbnail'
        />
      </Link>
    </div>
  );
};

export default ReviewCard;
