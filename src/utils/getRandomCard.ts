import { ICardData } from "@/types/apisTypes";
import { getAllCards } from "@/apis/card";
import { getRandomNumber } from "./getRandomNumber";
import { MAX_SELECTED_CARD } from "./constants";

export const getRandomCardData = async (): Promise<ICardData[]> => {
    try {
      const allCardData: ICardData[] = await getAllCards();
      const randomNums = getRandomNumber(allCardData.length - 1, MAX_SELECTED_CARD); 
      return randomNums.map((num: number) => allCardData[num]);
    } catch (error) {
      console.error('getRandomCardData error', error);
      return [];
    }
  };