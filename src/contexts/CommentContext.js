import { createContext, useRef } from 'react';

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const commentReference = useRef(null);

  return (
    <CommentContext.Provider value={{ commentReference }}>
      {children}
    </CommentContext.Provider>
  );
};
