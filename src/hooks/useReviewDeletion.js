import { deleteReviewById } from '../utils/api';

export const useReviewDeletion = (
  review,
  reviewsData,
  setReviewsData,
  setReviewDeletion
) => {
  const handleReviewDeletion = (event) => {
    event.preventDefault();
    if (window.confirm('Are you sure you want to delete this review?')) {
      deleteReviewById(review.review_id)
        .then(() => {
          let toDeleteIndex;
          reviewsData.forEach((currReview, index) => {
            if (currReview.review_id === review.review_id) {
              toDeleteIndex = index;
            }
          });
          const updatedReviewsData = [...reviewsData];
          updatedReviewsData.splice(toDeleteIndex, 1);
          setReviewsData(updatedReviewsData);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleSingleReviewDeletion = (event) => {
    event.preventDefault();
    if (window.confirm('Are you sure you want to delete this review?')) {
      deleteReviewById(review.review_id)
        .then(() => setReviewDeletion(true))
        .catch((error) => console.log(error));
    }
  };

  return { handleReviewDeletion, handleSingleReviewDeletion };
};
