import { Link } from 'react-router-dom';
import { useVotes } from '../hooks/useVotes';

const ReviewCard = ({ review }) => {
  const { votes, handleVotes, voted } = useVotes(
    review.votes,
    'review',
    review.review_id
  );

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
      <button className='reviewCard__commentButton'>comments</button>
      <p className='reviewCard__commentCount'>{review.comment_count}</p>
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
