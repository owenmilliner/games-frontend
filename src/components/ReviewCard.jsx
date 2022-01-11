import { useState, useEffect } from 'react';
import { patchReviewById } from '../utils/api';
import { Link } from 'react-router-dom';

const ReviewCard = ({ review }) => {
  const [voteCount, setVoteCount] = useState(0);
  const [voted, setVoted] = useState(false);

  const handleVote = () => {
    if (!voted) {
      setVoteCount(voteCount + 1);
      const voteButton = document.getElementsByClassName(
        'reviewCard__voteButton--voted-false'
      )[0];

      voteButton.innerHTML = 'voted!';
      voteButton.className = 'reviewCard__voteButton--voted-true';

      patchReviewById(review, true)
        .then()
        .catch((error) => console.log(error));
      setVoted(true);
    } else {
      setVoteCount(voteCount - 1);
      const voteButton = document.getElementsByClassName(
        'reviewCard__voteButton--voted-true'
      )[0];

      voteButton.innerHTML = 'vote';
      voteButton.className = 'reviewCard__voteButton--voted-false';

      patchReviewById(review, false)
        .then()
        .catch((error) => console.log(error));
      setVoted(false);
    }
  };

  useEffect(() => setVoteCount(review.votes), []);

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
        className='reviewCard__voteButton--voted-false'
        onClick={handleVote}
      >
        vote
      </button>
      <p className='reviewCard__voteCounter'>{voteCount}</p>
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
