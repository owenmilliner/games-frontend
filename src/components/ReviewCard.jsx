import React from 'react';

const ReviewCard = ({ review }) => {
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
        {review.category} posted by {review.owner} at {review.created_at}
      </p>
      <h2>{review.title}</h2>
      <button>vote</button>
      <p>{review.votes}</p>
      <button>comments</button>
      <p>{review.comment_count}</p>
    </div>
  );
};

export default ReviewCard;
