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

export const endGame = async (gameId: string|undefined, randomCards: ICardData[]) => {
  try {
    const response = await axios.post('/game/end/', {
      game_id: gameId,
      select_card_id: randomCards[0].card_id,
      all_select_card_id: {
        primary_select_card_id: randomCards[0].card_id,
        secondary_select_card_id: randomCards[1].card_id,
        tertiary_select_card_id: randomCards[2].card_id,
      },
    });
    console.log('endGame response:', response.data.data);
    return response.data.data;
  } catch (error) {

    throw error;
  }
};

export const endGameStatus = async (gameId: string|undefined) => {
  try {
    const response = await axios.post('/game/status/', {
      game_id: gameId,
    });
    console.log('endGameStatus:', response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

