import '@/App.css';
import { useCardSpread } from '@/hooks/useCardSpread';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from '@/components/common/Menu';
import { useGameType } from '@/contexts/GameTypeContext';
import { useStartGame } from '@/hooks/useStartGame';
import { getRandomNumber } from '@/utils/getRandomNumber';
import { getAllCards } from '@/apis/card';
import { ICardData } from '@/types/apisTypes';
import { MAX_SELECTED_CARD } from '@/utils/constants';

export const Main = () => {
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(false);
  const [gameTypeId, setGameTypeId] = useState<string>('');
  const { positions, selectedCards, visibleCards, handleCardClick: handleCardSelect, resetAnimation } = useCardSpread();
  const { gameTypeName, setGameTypeName } = useGameType();
  const { gameData, startGame } = useStartGame();

  const getRandomCardData = useCallback(async () => {
    try {
      const allCardData: ICardData[] = await getAllCards();
      const randomNums = getRandomNumber(allCardData.length - 1, MAX_SELECTED_CARD); 
      return randomNums.map((num: number) => allCardData[num]);
    } catch (error) {
      console.error('getRandomCardData error', error);
      return [];
    }
  },[]);

  useEffect(() => {
    if (selectedCards.length === MAX_SELECTED_CARD) {
      console.log('game end')
      setIsHidden(true);
      getRandomCardData().then((randomCards) => {
        setTimeout(() => navigate('/main/select', { state: { gameData, randomCards } }), 1000);
      });
    }
  }, [selectedCards, navigate]);

  const handleGameTypeChange = useCallback((newGameType: string, newGameTypeId: string) => {
      setGameTypeName(newGameType);
      setGameTypeId(newGameTypeId);
      resetAnimation();
      
    },
    
    [resetAnimation, setGameTypeName]
  );

  const handleCardClick = useCallback(
    async (cardIndex: number) => {
      if (selectedCards.length === 0 && gameTypeId) {
        console.log('start api')
        await startGame(gameTypeId);
      }
      handleCardSelect(cardIndex);
    },
    [selectedCards, gameTypeId, startGame, handleCardSelect]
  );

  return (
    <div
      className={`w-full h-4/5 transition-opacity duration-1000 ${isHidden ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="w-full h-2/3 pt-10">
        <div className="w-24 h-32 m-auto relative bg-tarot-back bg-cover bg-center">
          {positions.map(
            (card, i) =>
              visibleCards[i] && (
                <div
                  key={i}
                  className={`card card-${i} w-24 h-32 bg-tarot-back bg-cover bg-center absolute transition-all duration-1000`}
                  style={{ left: `${card.x}px`, top: `${card.y}px` }}
                  onClick={() => handleCardClick(i)}
                />
              )
          )}
        </div>
      </div>
      <div className="w-full h-1/3 pb-10">
        <div className="w-1/2 h-full bg-main-darker m-auto flex justify-start items-center p-4 rounded-lg shadow-lg">
          {selectedCards.map((i) => (
            <div key={i} className="h-full w-1/3 flex flex-col justify-center items-center">
              <div className="w-28 h-32 bg-tarot-back bg-cover bg-center mb-2"></div>
            </div>
          ))}
        </div>
        <div className="text-right">
          <Menu
            resetAnimation={resetAnimation}
            handleGameTypeChange={handleGameTypeChange}
            initialGameType={gameTypeName}
          />
        </div>
      </div>
    </div>
  );
};