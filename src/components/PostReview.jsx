import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { postReview } from '../utils/api';

const PostReview = ({ reviewsData, setReviewsData, setReviewPosted }) => {
  const { isLoggedIn, username } = useContext(UserContext);

  const [isPosting, setIsPosting] = useState(false);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [reviewDesigner, setReviewDesigner] = useState('');
  const [reviewCategory, setReviewCategory] = useState('');

  const handlePosting = () => setIsPosting(!isPosting);
  const handleTitleChange = (event) => setReviewTitle(event.target.value);
  const handleBodyChange = (event) => setReviewBody(event.target.value);
  const handleDesignerChange = (event) => setReviewDesigner(event.target.value);
  const handleCategoryChange = (event) => setReviewCategory(event.target.value);

  // TODO: Implement review submission
  const handleReviewSubmit = (event) => {
    event.preventDefault();

    postReview({
      owner: username,
      title: reviewTitle,
      review_body: reviewBody,
      designer: reviewDesigner,
      category: reviewCategory,
    }).then((review) => {
      setIsPosting(false);
      // FIXME: Not sure which method to use. Will decide later.
      setReviewPosted(true);
      //   setReviewsData([review, ...reviewsData]);
    });
  };

  return (
    <>
      {isLoggedIn ? (
        <div className='postingContainer'>
          <button
            className={
              isPosting ? 'posting--status-true' : 'posting--status-false'
            }
            onClick={handlePosting}
          >
            {isPosting ? 'cancel' : 'post'}
          </button>
          {isPosting ? (
            <form className='posting__form' onSubmit={handleReviewSubmit}>
              <label
                htmlFor='form__title'
                className='posting__form__titleLabel'
              >
                Title
              </label>
              <textarea
                type='text'
                id='form__title'
                className='posting__form__title'
                value={reviewTitle}
                onChange={handleTitleChange}
                required
              />
              <label
                htmlFor='form__designer'
                className='posting__form__designerLabel'
              >
                Designer
              </label>
              <textarea
                type='text'
                id='form__designer'
                className='posting__form__designer'
                value={reviewDesigner}
                onChange={handleDesignerChange}
                required
              />
              <label htmlFor='form__body' className='posting__form__bodyLabel'>
                Body
              </label>
              <textarea
                type='text'
                id='form__body'
                className='posting__form__body'
                value={reviewBody}
                onChange={handleBodyChange}
                required
              />
              <label
                htmlFor='form__category'
                className='posting__form__categoryLabel'
              >
                Category
              </label>
              <select
                id='form__category'
                className='posting__form__category'
                value={reviewCategory}
                onChange={handleCategoryChange}
                required
              >
                <option value='strategy'>strategy</option>
                <option value='hidden-roles'>hidden-roles</option>
                <option value='dexterity'>dexterity</option>
                <option value='push-your-luck'>push-your-luck</option>
                <option value='roll-and-write'>roll-and-write</option>
                <option value='deck-building'>deck-building</option>
                <option value='engine-building'>engine-building</option>
              </select>
              <button type='submit' className='posting__form__button'>
                post
              </button>
            </form>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default PostReview;
