import React, { createContext, useState, useContext } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollToContact, setScrollToContact] = useState(false);

  return (
    <ScrollContext.Provider value={{ scrollToContact, setScrollToContact }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);