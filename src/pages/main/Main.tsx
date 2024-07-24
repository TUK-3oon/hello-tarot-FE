import '@/App.css';
import { useCardSpread } from '@/hooks/useCardSpread';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from '@/components/common/Menu';
import { useGameType } from '@/contexts/GameTypeContext';
import { useStartGame } from '@/hooks/useStartGame';
import { MAX_SELECTED_CARD } from '@/utils/constants';
import { getRandomCardData } from '@/utils/getRandomCard';

export const Main = () => {

  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(false);
  const [gameTypeId, setGameTypeId] = useState<string>('');
  const { positions, selectedCards, visibleCards, handleCardClick: handleCardSelect, resetAnimation } = useCardSpread();
  const { gameTypeName, setGameTypeName } = useGameType();
  const { gameData, startGame } = useStartGame();

  useEffect(() => {
    if (selectedCards.length === MAX_SELECTED_CARD) {
      setIsHidden(true);
      getRandomCardData().then((randomCards) => {
        setTimeout(() => navigate('/main/select', { state: { gameData, randomCards } }), 1000);
      });
    }
  }, [selectedCards, navigate, getRandomCardData, gameData]);

  const handleGameTypeChange = useCallback((newGameType: string, newGameTypeId: string) => {
      setGameTypeName(newGameType);
      setGameTypeId(newGameTypeId);
      resetAnimation();
    },
    [resetAnimation, setGameTypeName]
  );

  const handleCardClick = useCallback(
    async (cardIndex: number) => {
      if (selectedCards.length === 1) {
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
        <div className="w-16 h-24 sm:w-20 sm:h-28 md:w-22 md:h-30 lg:w-24 lg:h-32 m-auto relative bg-tarot-back bg-center bg-no-repeat bg-contain transition-all duration-1000">
          {positions.map(
            (card, i) =>
              visibleCards[i] && (
                <div
                  key={i}
                  className={`card card-${i} w-16 h-24 sm:w-20 sm:h-28 md:w-22 md:h-30 lg:w-24 lg:h-32 bg-tarot-back bg-center bg-no-repeat bg-contain absolute transition-all duration-1000`}
                  style={{ left: `${card.x}px`, top: `${card.y}px` }}
                  onClick={() => handleCardClick(i)}
                />
              )
          )}
        </div>
      </div>
      <div className="w-full h-1/3 p-6">
        <div className="w-1/2 h-full bg-main-darker m-auto flex justify-start items-center p-4 rounded-lg shadow-lg">
          {selectedCards.map((i) => (
            <div key={i} className="h-full w-1/3 flex flex-col justify-center items-center">
              <div className="w-16 h-24 sm:w-20 sm:h-28 md:w-22 md:h-30 lg:w-24 lg:h-32 bg-tarot-back bg-center bg-no-repeat bg-contain m-2 transition-all duration-1000"></div>
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
