import { ICardData } from "@/types/apisTypes";
import { getAllCards } from "@/apis/card";
import { getRandomNumber } from "./getRandomNumber";
import { MAX_SELECTED_CARD, DEFAULT_RANDOM_THREE_CARDS } from "./constants";

export const getRandomCardData = async (): Promise<ICardData[]> => {
    try {
      const allCardData: ICardData[] = await getAllCards();
      const randomNum = getRandomNumber(allCardData.length - 1, MAX_SELECTED_CARD); 
      return randomNum.map((num: number) => allCardData[num]);
    } catch (error) {
      console.error('getRandomCardData error', error);
      return DEFAULT_RANDOM_THREE_CARDS;
    }
  };