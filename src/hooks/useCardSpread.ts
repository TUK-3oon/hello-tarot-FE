import { useState, useEffect } from 'react';
import { ISpreadCardPosition, IUseCardSpreadReturn } from '../types/types';

export const useCardSpread = (): IUseCardSpreadReturn => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const [positions, setPositions] = useState<ISpreadCardPosition[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    Array(12).fill(true)
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const initialPositions = Array.from({ length: 12 }, (_, i) => ({
      x: i,
      y: i,
    }));
    setPositions(isAnimated ? spread() : initialPositions);
    if (!isAnimated) {
      setVisibleCards(Array(12).fill(true));
      setSelectedCards([]);
    }
  }, [isAnimated]);

  const spread = (): ISpreadCardPosition[] =>
    Array.from({ length: 12 }, (_, i) => {
      const angle = (180 / 11) * i * (Math.PI / 180);
      return { x: 600 * Math.cos(angle), y: 200 * Math.sin(angle) };
    });

  const handleCardClick = (index: number): void => {
    const MAX_SELECTED_CARD = 3;
    if (selectedCards.length < MAX_SELECTED_CARD) {
      setSelectedCards([...selectedCards, index]);
      setVisibleCards(
        visibleCards.map((visible, idx) => (idx === index ? false : visible))
      );
    }
  };

  const resetAnimation = () => {
    setIsAnimated(false);
    setTimeout(() => setIsAnimated(true), 1500);
  };

  return {
    isAnimated,
    positions,
    selectedCards,
    visibleCards,
    handleCardClick,
    resetAnimation,
  };
};
