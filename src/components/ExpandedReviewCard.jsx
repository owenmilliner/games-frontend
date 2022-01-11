import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewById } from '../utils/api';
// import { handleVote } from '../utils/utils';

const ExpandedReviewCard = () => {
  const { review_id } = useParams();
  const [singleReviewData, setSingleReviewData] = useState([]);
  const [voteCount, setVoteCount] = useState(0);
  // const [voted, setVoted] = useState(false);

  useEffect(() => {
    getReviewById(review_id)
      .then((result) => setSingleReviewData(result))
      .catch((error) => console.log(error));
  }, [review_id]);

  useEffect(
    () => setVoteCount(singleReviewData.votes),
    [singleReviewData.votes]
  );

  console.log(singleReviewData);
  return (
    <div className='expandedReviewCard'>
      <p className='expandedReviewCard__info'>
        <strong>{singleReviewData.category}</strong> posted by{' '}
        <strong>{singleReviewData.owner}</strong> on{' '}
        <strong>{singleReviewData.created_at.slice(0, 10)}</strong>
      </p>
      <h2 className='expandedReviewCard__title'>{singleReviewData.title}</h2>
      <p className='expandedReviewCard__body'>hi</p>

      <p className='reviewCard__voteCounter'>{voteCount}</p>
    </div>
  );
};

export default ExpandedReviewCard;
