import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://owen-games-api.herokuapp.com/api/',
});

export const getReviews = (query) => {
  return gamesApi
    .get('/reviews', {
      params: {
        sort: query.sortValue,
        order: query.sortingOrder,
        category: query.category,
      },
    })
    .then((response) => response.data.reviews);
};

export const getCategories = () => {
  return gamesApi
    .get('/categories')
    .then((response) => response.data.categories);
};

export const patchReviewById = (review_id, voted) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: voted ? -1 : 1 })
    .then((response) => response.data.review);
};

export const getReviewById = (review_id) => {
  return gamesApi
    .get(`/reviews/${review_id}`)
    .then((response) => response.data.review);
};

export const getReviewCommentsById = (review_id) => {
  return gamesApi
    .get(`/reviews/${review_id}/comments`)
    .then((response) => response.data.comments);
};

export const patchCommentById = (comment_id, voted) => {
  return gamesApi
    .patch(`/comments/${comment_id}`, {
      inc_votes: voted ? -1 : 1,
    })
    .then((response) => response.data.comment);
};

export const getUsers = () => {
  return gamesApi.get(`/users`).then((response) => response.data.users);
};

export const deleteCommentById = (comment_id) => {
  return gamesApi
    .delete(`/comments/${comment_id}`)
    .then((response) => console.log('Comment deleted.', response));
};

export const postCommentByReviewId = (review_id, comment) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, comment)
    .then((response) => response.data.comment);
};

export const postReview = (review) => {
  return gamesApi
    .post('/reviews', review)
    .then((response) => response.data.review);
};
