import axios from 'axios';
import { ICardData } from '@/types/apisTypes';

export const startGameApi = async (gameTypeId: string) => {
  const response = await axios.post('/game/start/', {
    game_type_id: gameTypeId,
  });
  return response.data.data;
};

export const changeGameTypeApi = async (gameType: string) => {
  const response = await axios.post('/game/rule/', {
    game_type_name: gameType,
  });
  return response.data;
};

