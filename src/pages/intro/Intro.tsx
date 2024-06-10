import { ThreeCard } from '../../components/common/ThreeCard';
import { ICardData } from '@/types/apisTypes';
import { getAllCards } from '@/apis/card';
import { getRandomNumber } from '@/utils/getRandomNumber';
import { useEffect, useState } from 'react';

const MAX_SELECTED_CARD = 3;

export const Intro = () => {
  const [cardData, setCardData] = useState<ICardData[]>([]);

  const getRandomCardData = async () => {
    try {
      const allCardData: ICardData[] = await getAllCards();
      const MAX_CARD_LENGTH = allCardData.length - 1;
      const randomNums = getRandomNumber(MAX_CARD_LENGTH, MAX_SELECTED_CARD);
      return randomNums.map((num: number) => allCardData[num]);
    } catch (error) {
      console.error('getRandomCardData error', error);
      return [];
    }
  };

  const fetchData = async () => {
    const randomCards = await getRandomCardData();
    setCardData(randomCards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <ThreeCard isActive={false} randomCards={cardData} />;
};