import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div>
      <p>{review.owner}</p>
    </div>
  );
};

export default ReviewCard;
