import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewById } from '../utils/api';
import { handleVote } from '../utils/utils';

const ExpandedReviewCard = () => {
  const { review_id } = useParams();
  const [singleReviewData, setSingleReviewData] = useState([]);
  const [voteCount, setVoteCount] = useState(0);
  const [voted, setVoted] = useState(false);

  const handleCommentsScroll = () => {
    document.getElementById('comments').scrollIntoView();
  };

  useEffect(() => {
    getReviewById(review_id)
      .then((result) => setSingleReviewData(result))
      .catch((error) => console.log(error)); // Are these catches necessary when I already have catches in api.js
  }, [review_id]);

  useEffect(
    () => setVoteCount(singleReviewData.votes),
    [singleReviewData.votes]
  );

  return (
    <div className='expandedReviewCard'>
      <p className='expandedReviewCard__info'>
        <strong>{singleReviewData.category}</strong> posted by{' '}
        <strong>{singleReviewData.owner}</strong> on{' '}
        <strong>
          {singleReviewData.created_at // Why do I need a ternary here, but not in ReviewCard.js
            ? singleReviewData.created_at.slice(0, 10)
            : null}
        </strong>
      </p>
      <h2 className='expandedReviewCard__title'>{singleReviewData.title}</h2>
      <p className='expandedReviewCard__body'>{singleReviewData.review_body}</p>
      <button
        className='expandedReviewCard__voteButton--voted-false'
        onClick={() => {
          setVoted(
            handleVote(
              singleReviewData.review_id,
              voted,
              voteCount,
              setVoteCount,
              'expandedReviewCard'
            )
          );
        }}
      >
        vote
      </button>
      <p className='expandedReviewCard__voteCounter'>{voteCount}</p>
      <button
        className='expandedReviewCard__commentButton'
        onClick={handleCommentsScroll}
      >
        comments
      </button>
      <p className='expandedReviewCard__commentCount'>
        {singleReviewData.comment_count}
      </p>
    </div>
  );
};

export default ExpandedReviewCard;
