import ExpandedReviewCard from './ExpandedReviewCard';
import Comments from './Comments';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewById } from '../utils/api';

const ExpandedReview = () => {
  const { review_id } = useParams();
  const [singleReviewData, setSingleReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    getReviewById(review_id)
      .then((result) => {
        setSingleReviewData(result);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [review_id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='expandedReview'>
          <ExpandedReviewCard singleReviewData={singleReviewData} />
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
