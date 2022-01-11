import { patchReviewById } from './api';

export const handleVote = (review_id, voted, voteCount, setVoteCount) => {
  if (!voted) {
    setVoteCount(voteCount + 1);
    const voteButton = document.getElementsByClassName(
      'reviewCard__voteButton--voted-false'
    )[0];

    voteButton.innerHTML = 'voted!';
    voteButton.className = 'reviewCard__voteButton--voted-true';

    patchReviewById(review_id, true)
      .then()
      .catch((error) => console.log(error));
    return true;
  } else {
    setVoteCount(voteCount - 1);
    const voteButton = document.getElementsByClassName(
      'reviewCard__voteButton--voted-true'
    )[0];

    voteButton.innerHTML = 'vote';
    voteButton.className = 'reviewCard__voteButton--voted-false';

    patchReviewById(review_id, false)
      .then()
      .catch((error) => console.log(error));
    return false;
  }
};
