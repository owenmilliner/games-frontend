import { useEffect } from 'react';
import { getReviews } from '../utils/api';

const Reviews = () => {
  useEffect(() => {
    getReviews().then((result) => console.log(result));
  }, []);
  return (
    <div className='reviews'>
      <p>Reviews!</p>
    </div>
  );
};

export default Reviews;
