import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailure, setLoginFailure] = useState(false);

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        isLoggedIn,
        setIsLoggedIn,
        loginFailure,
        setLoginFailure,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
