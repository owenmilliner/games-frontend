import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://owen-games-api.herokuapp.com/api/',
});

export const getReviews = () => {
  return gamesApi
    .get('/reviews')
    .then((response) => response.data.reviews)
    .catch((error) => console.log(error));
};

export const getCategories = () => {
  return gamesApi
    .get('/categories')
    .then((response) => response.data.categories)
    .catch((error) => console.log(error));
};
