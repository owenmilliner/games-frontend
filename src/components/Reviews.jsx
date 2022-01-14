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
  // May not be the best way to do this, but I think it makes more sense to reload the data, especially if the review which has been posted is not in the current sorting/filtering criteria. In addition to this, the review-photo does not load straight away, unless the page is re-rendered.
  const [reviewPosted, setReviewPosted] = useState(false);

  useEffect(() => {
    getReviews({
      category: categoryFilter,
      sortValue: sortValue,
      sortingOrder: sortingOrder,
    }).then((result) => {
      setReviewsData(result);
      setIsLoading(false);
      setReviewPosted(false);
    });
  }, [categoryFilter, sortingOrder, sortValue, reviewPosted]);

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
            <PostReview
              reviewsData={reviewsData}
              setReviewsData={setReviewsData}
              setReviewPosted={setReviewPosted}
            />
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
