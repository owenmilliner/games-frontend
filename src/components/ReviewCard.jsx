import { useState, useEffect } from 'react';
import { patchReviewById } from '../utils/api';

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
    /*
      "owner": "cooljmessy",
      "title": "Velit tempor ullamco amet ipsum dolor voluptate.",
      "review_id": 14,
      "category": "hidden-roles",
      "review_img_url": "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg",
      "created_at": "2021-02-05T00:00:00.000Z",
      "votes": 3,
      "comment_count": "0"
    */
    <div className='reviewCard'>
      <p className='reviewCard__info'>
        <strong>{review.category}</strong> posted by{' '}
        <strong>{review.owner}</strong> at <strong>{review.created_at}</strong>
      </p>
      <h2 className='reviewCard__title'>{review.title}</h2>
      <button
        className='reviewCard__voteButton--voted-false'
        onClick={handleVote}
      >
        vote
      </button>
      <p className='reviewCard__voteCounter'>{voteCount}</p>
      <button className='reviewCard__commentButton'>comments</button>
      <p className='reviewCard__commentCount'>{review.comment_count}</p>
      <img
        className='reviewCard__image'
        src={review.review_img_url}
        alt='Review Thumbnail'
      />
    </div>
  );
};

export default ReviewCard;
