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
  const [reviewPosted, setReviewPosted] = useState(false);
  const [totalReviewCount, setTotalReviewCount] = useState(0);
  // const [isMoreData, setIsMoreData] = useState(true);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  useEffect(() => {
    getReviews({
      category: categoryFilter,
      sortValue: sortValue,
      sortingOrder: sortingOrder,
      total_count: true,
      page: currentPageNumber,
      limit: 100,
    }).then((result) => {
      setCurrentPageNumber(1);
      setTotalReviewCount(result.total_count);
      setReviewsData(result.reviews);
      setIsLoading(false);
      setReviewPosted(false);
    });
  }, [
    categoryFilter,
    sortingOrder,
    sortValue,
    reviewPosted,
    // currentPageNumber,
  ]);

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
              <ReviewCard
                key={review.review_id}
                review={review}
                reviewsData={reviewsData}
                setReviewsData={setReviewsData}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Reviews;
