import { useState, useEffect } from 'react';

export const useVisible = <T>(state?: T) => {
  const [isVisible, setIsVisible] = useState(false);
  const visibleClass = `transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`;

  useEffect(
    () => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    },
    state ? [state] : []
  );

  return { isVisible, visibleClass };
};
