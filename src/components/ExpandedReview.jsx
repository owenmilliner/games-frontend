import ExpandedReviewCard from './ExpandedReviewCard';
import Comments from './Comments';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getReviewById } from '../utils/api';

const ExpandedReview = () => {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [reviewError, setReviewError] = useState({});
  const [singleReviewData, setSingleReviewData] = useState([]);
  const [commentsData, setCommentsData] = useState([]);
  const [reviewDeletion, setReviewDeletion] = useState(false);

  useEffect(() => {
    setReviewDeletion(false);
    getReviewById(review_id)
      .then((result) => {
        setSingleReviewData(result);
        setIsLoading(false);
      })
      .catch((error) => {
        setReviewError({
          status: error.response.status,
          errorMessage: error.response.data.errorMessage,
        });
        setIsError(true);
      });
  }, [review_id, reviewDeletion]);

  return (
    <div>
      {isError ? (
        <div className='review404error'>
          <h2>{reviewError.status} Error</h2>
          <p>{reviewError.errorMessage}</p>
          <Link to={`/reviews`}>
            <button className='redirect'>Take me back!</button>
          </Link>
        </div>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='expandedReview'>
          <ExpandedReviewCard
            singleReviewData={singleReviewData}
            commentsData={commentsData}
            setCommentsData={setCommentsData}
            setReviewDeletion={setReviewDeletion}
          />
          <Comments
            commentsData={commentsData}
            setCommentsData={setCommentsData}
          />
        </div>
      )}
    </div>
  );
};

export default ExpandedReview;
