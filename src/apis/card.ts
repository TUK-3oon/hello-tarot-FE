import axios from 'axios';
import { ICardData, ICardResponse } from '@/types/apisTypes';

export const getAllCards = async (): Promise<ICardData[]> => {
  const response = await axios.get<ICardResponse>('/card/front/all');
  return response.data.data;
};