import axios from 'axios';
import { ICardData } from '@/types/apisTypes';

export const getAllCards = async (): Promise<ICardData[]> => {
  const response = await axios.get<ICardData[]>('/card/front/all');
  console.log(response.data)
  return response.data;
};