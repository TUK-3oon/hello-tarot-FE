import { ThreeCard } from '../../components/game/ThreeCard';
import { ICardData } from '@/types/apisTypes';
import { useEffect, useState } from 'react';
import { getRandomCardData } from '@/utils/getRandomCard';

export const Intro = () => {
  const [cardData, setCardData] = useState<ICardData[]>([]);

  const getRandomCard = async () => {
    const randomCards = await getRandomCardData();
    setCardData(randomCards);
  };

  useEffect(() => {
    getRandomCard();
  }, []);

  return <ThreeCard isMain={false} randomCards={cardData} />;
};
