import { useEffect, useState } from 'react';
import { getReviews } from '../utils/api';
import ReviewCard from './ReviewCard';
import CategoryList from './CategoryList';

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [filteredReviewsData, setFilteredReviewsData] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    getReviews().then((result) => {
      setReviewsData(result);
      setFilteredReviewsData(result);
    });
  }, []);

  useEffect(() => {
    if (categoryFilter !== 'all') {
      setFilteredReviewsData(() => {
        return reviewsData.filter((review) => {
          return review.category === categoryFilter;
        });
      });
    } else {
      setFilteredReviewsData(reviewsData);
    }
  }, [categoryFilter]);

  return (
    <div className='reviews'>
      <CategoryList setCategoryFilter={setCategoryFilter} />
      <ul className='reviews__list'>
        {filteredReviewsData.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
