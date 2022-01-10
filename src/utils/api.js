import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://owen-games-api.herokuapp.com/api/',
});

export const getReviews = () => {
  return gamesApi
    .get('/reviews')
    .then((response) => response.data.reviews)
    .catch(console.log('Error'));
};
