import { patchReviewById, patchCommentById } from '../utils/api';
import { useState } from 'react';

export const useVotes = (startCount = 0, page, id) => {
  const [count, setCount] = useState(startCount);
  const [voted, setVoted] = useState(false);

  const handleCount = () => {
    setCount((currentCount) => (voted ? currentCount - 1 : currentCount + 1));

    if (page === 'comment') {
      patchCommentById(id, voted)
        .then((response) => response.data.comment)
        .catch((error) => console.log(error));
    } else {
      patchReviewById(id, voted)
        .then((response) => response.data.review)
        .catch((error) => console.log(error));
    }

    setVoted(!voted);
  };

  return { count, handleCount, voted };
};
