import { useState, useEffect } from 'react';
import { patchReviewById } from '../utils/api';

const ReviewCard = ({ review }) => {
  const [voteCount, setVoteCount] = useState(0);

  const handleVote = () => {
    setVoteCount(voteCount + 1);
    patchReviewById(review).then((result) => {});
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
      <p>
        <strong>{review.category}</strong> posted by{' '}
        <strong>{review.owner}</strong> at <strong>{review.created_at}</strong>
      </p>
      <h2>{review.title}</h2>
      <button onClick={handleVote}>vote</button>
      <p>{voteCount}</p>
      <button>comments</button>
      <p>{review.comment_count}</p>
      <img
        className='reviewCard__image'
        src={review.review_img_url}
        alt='Review Thumbnail'
      />
    </div>
  );
};

export default ReviewCard;
