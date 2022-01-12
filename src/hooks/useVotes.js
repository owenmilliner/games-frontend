import { patchReviewById, patchCommentById } from '../utils/api';
import { useState } from 'react';

export const useVotes = (startVotes = 0, page, id) => {
  const [votes, setVotes] = useState(startVotes);
  const [voted, setVoted] = useState(false);

  const handleVotes = () => {
    setVotes((currentVotes) => (voted ? currentVotes - 1 : currentVotes + 1));

    if (page === 'comment') {
      patchCommentById(id, voted)
        .then((response) => response.data)
        .catch((error) => console.log(error));
    } else {
      patchReviewById(id, voted)
        .then((response) => response.data)
        .catch((error) => console.log(error));
    }

    setVoted(!voted);
  };

  return { votes, handleVotes, voted };
};
