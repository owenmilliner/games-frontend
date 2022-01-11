import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://owen-games-api.herokuapp.com/api/',
});

export const getReviews = (query) => {
  console.log(
    `/reviews${query.category !== 'all' ? `?category=${query.category}` : ''}`
  );
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
