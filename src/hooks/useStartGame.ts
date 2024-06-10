import { useState } from 'react';
import { startGameApi } from '@/apis/game';

export const useStartGame = () => {
  const [gameData, setGameData] = useState({ gameId: '', question: '' });

  const startGame = async (gameTypeId: string) => {
    try {
      const data = await startGameApi(gameTypeId);
      setGameData(data);
    } catch (error) {
      console.error('startGameApi error:', error);
    }
  };

  return { gameData, startGame };
};
