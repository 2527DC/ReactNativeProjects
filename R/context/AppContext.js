// AppContext.js or Context.js

import React, { createContext, useState, useContext } from 'react';

// Create Context
const AppContext = createContext();

// Create a custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};

// Create a provider component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  // A function to update user info
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  // A function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider value={{ user, theme, updateUser, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
