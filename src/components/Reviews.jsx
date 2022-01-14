import { useEffect, useState } from 'react';
import { getReviews } from '../utils/api';
import ReviewCard from './ReviewCard';
import CategoryList from './CategoryList';
import Sorting from './Sorting';
import PostReview from './PostReview';

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [sortValue, setSortValue] = useState('created_at');
  const [sortingOrder, setSortingOrder] = useState('desc');

  useEffect(() => {
    getReviews({
      category: categoryFilter,
      sortValue: sortValue,
      sortingOrder: sortingOrder,
    }).then((result) => {
      setReviewsData(result);
      setIsLoading(false);
    });
  }, [categoryFilter, sortingOrder, sortValue]);

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
          <div className='reviews__header'>
            <Sorting
              sortValue={sortValue}
              setSortValue={setSortValue}
              sortingOrder={sortingOrder}
              setSortingOrder={setSortingOrder}
            />
            <PostReview />
          </div>
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
