import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://owen-games-api.herokuapp.com/api/',
});

export const getReviews = (query) => {
  return gamesApi
    .get(
      `/reviews${query.category !== 'all' ? `?category=${query.category}` : ''}`
    )
    .then((response) => response.data.reviews)
    .catch((error) => console.log(error));
};

export const getCategories = () => {
  return gamesApi
    .get('/categories')
    .then((response) => response.data.categories)
    .catch((error) => console.log(error));
};

export const patchReviewById = (review_id, voted) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: voted ? -1 : 1 })
    .then((response) => response.data.review)
    .catch((error) => console.log(error));
};

export const getReviewById = (review_id) => {
  return gamesApi
    .get(`/reviews/${review_id}`)
    .then((response) => response.data.review)
    .catch((error) => console.log(error));
};

export const getReviewCommentsById = (review_id) => {
  return gamesApi
    .get(`/reviews/${review_id}/comments`)
    .then((response) => response.data.comments)
    .catch((error) => console.log(error));
};

export const patchCommentById = (comment_id, voted) => {
  return gamesApi
    .patch(`/comments/${comment_id}`, {
      inc_votes: voted ? -1 : 1,
    })
    .then((response) => response.data.comment)
    .catch((error) => console.log(error));
};
