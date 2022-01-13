import { getUsers } from '../utils/api';
import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const useLogin = (usernameInput) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setUsername } = useContext(UserContext);

  const handleLogin = () => {
    console.log('here');
    getUsers()
      .then((usersArray) => {
        console.log(usernameInput, usersArray);
        usersArray.forEach((user) => {
          if (user.username === usernameInput) {
            console.log('match!');
            setIsLoggedIn(true);
            setUsername(usernameInput);
          }
        });
      })
      .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      setIsLoggedIn(false);
      setUsername('');
    }
  };

  return { isLoggedIn, handleLogin, handleLogout };
};
