import axios from 'axios';
import { ICardData } from '@/types/apisTypes';

export const startGameApi = async (gameTypeId: string) => {
  const response = await axios.post('/game/start/', {
    game_type_id: gameTypeId,
  });
  return response.data;
};

export const changeGameTypeApi = async (gameType: string) => {
  const response = await axios.post('/game/rule/', {
    game_type_name: gameType,
  });
  return response.data;
};

export const endGameApi = async (gameId: string, selectedCardData: ICardData[])=>{
  const response = await axios.post<ICardData[]>('/game/end/',{
    game_id: gameId,
    select_card_id: selectedCardData[0].card_id,
    all_select_card_id: {
        primary_select_card_id: selectedCardData[0].card_id,
        sceondary_select_card_id: selectedCardData[1].card_id,
        tertiary_select_card_id: selectedCardData[2].card_id
    }
  })
  return response.data
}
