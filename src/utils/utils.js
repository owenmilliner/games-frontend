import { patchReviewById, patchCommentById } from './api';

export const handleVote = (
  id,
  voted,
  voteCount,
  setVoteCount,
  page,
  reviewOrComment = 'review'
) => {
  if (!voted) {
    setVoteCount(voteCount + 1);
    const voteButton = document.getElementsByClassName(
      `${page}__voteButton--voted-false`
    )[0];

    voteButton.innerHTML = 'voted!';
    voteButton.className = `${page}__voteButton--voted-true`;

    if (reviewOrComment === 'review') {
      patchReviewById(id, true)
        .then()
        .catch((error) => console.log(error));
    } else {
      patchCommentById(id, true)
        .then()
        .catch((error) => console.log(error));
    }
    return true;
  } else {
    setVoteCount(voteCount - 1);
    const voteButton = document.getElementsByClassName(
      `${page}__voteButton--voted-true`
    )[0];

    voteButton.innerHTML = 'vote';
    voteButton.className = `${page}__voteButton--voted-false`;

    if (reviewOrComment === 'review') {
      patchReviewById(id, false)
        .then()
        .catch((error) => console.log(error));
    } else {
      patchCommentById(id, false)
        .then()
        .catch((error) => console.log(error));
    }
    return false;
  }
};
