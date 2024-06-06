import { useState, useEffect } from 'react';

export const useHidden = <T>(state?: T) => {
  const [isHidden, setIsHidden] = useState(false);
  const isHiddenClass = `transition-opacity duration-1000 ${isHidden ? 'opacity-0' : 'opacity-100'}`;

  useEffect(
    () => {
      const timer = setTimeout(() => {
        setIsHidden(true);
      }, 100);
      return () => clearTimeout(timer);
    },
    state ? [state] : []
  );

  return { isHidden, isHiddenClass };
};