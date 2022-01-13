import { getUsers } from '../utils/api';
import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const useLogin = (usernameInput) => {
  const { setUsername, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const handleLogin = () => {
    getUsers()
      .then((usersArray) => {
        usersArray.forEach((user) => {
          if (user.username === usernameInput) {
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
