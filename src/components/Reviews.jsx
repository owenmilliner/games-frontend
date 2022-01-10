import { useEffect, useState } from 'react';
import { getReviews } from '../utils/api';
import ReviewCard from './ReviewCard';
import CategoryList from './CategoryList';

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    getReviews().then((result) => setReviewsData(result));
  }, []);

  return (
    <div className='reviews'>
      <CategoryList />
      <p>Reviews!</p>
      <ul>
        {reviewsData.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
