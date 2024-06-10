import axios from 'axios';
import { ICardData } from '@/types/apisTypes';

export const getAllCards = async (): Promise<ICardData[]> => {
  const response = await axios.get<ICardData[]>('/card/front/all');
  return response.data;
};