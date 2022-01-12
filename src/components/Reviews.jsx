import { useEffect, useState } from 'react';
import { getReviews } from '../utils/api';
import ReviewCard from './ReviewCard';
import CategoryList from './CategoryList';

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews({ category: categoryFilter }).then((result) => {
      setReviewsData(result);
      setIsLoading(false);
    });
  }, [categoryFilter]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='reviews'>
          <CategoryList
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
          />
          <ul className='reviews__list'>
            {reviewsData.map((review) => (
              <ReviewCard key={review.review_id} review={review} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Reviews;
