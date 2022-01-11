import { useEffect, useState } from 'react';
import { getReviews } from '../utils/api';
import ReviewCard from './ReviewCard';
import CategoryList from './CategoryList';

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    console.log('New effect: ', categoryFilter);
    getReviews({ category: categoryFilter }).then((result) => {
      setReviewsData(result);
    });
  }, [categoryFilter]);

  return (
    <div className='reviews'>
      <CategoryList setCategoryFilter={setCategoryFilter} />
      <ul className='reviews__list'>
        {reviewsData.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
