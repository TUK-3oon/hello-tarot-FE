import '../../App.css';
import { useCardSpread } from '../../hooks/useCardSpread';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from '@/components/common/Menu';
import { useGameType } from '../../contexts/GameTypeContext';
import axios from 'axios';

export const Main = () => {
  const navigate = useNavigate();
  const { gameType, setGameType } = useGameType();
  const [gameTypeId, setGameTypeId] = useState<string | null>(null);
  const [gameId, setGameId] = useState<string | null>(null);
  const [isHidden, setIsHidden] = useState(false);
  const {
    positions,
    selectedCards,
    visibleCards,
    handleCardClick: originalHandleCardClick,
    resetAnimation,
  } = useCardSpread();

  console.log("gameTypeId",gameTypeId)

  useEffect(() => {
    const MAX_SELECTED_CARD = 3;
    if (selectedCards.length === MAX_SELECTED_CARD) {
      setIsHidden(true);
      setTimeout(() => navigate('/main/select'), 1000);
    }
  }, [selectedCards, navigate]);

  const handleGameTypeChange = (newGameType: string, newGameTypeId: string) => {
    setGameType(newGameType);
    setGameTypeId(newGameTypeId);
    resetAnimation();
  };

  const handleCardClick = async (cardIndex: number) => {
    if (selectedCards.length === 0 && gameTypeId) {
      try {
        const response = await axios.post('/game/start/', {
          game_type_id: gameTypeId,
        });
        console.log(response.data);
        console.log('Game started with ID:', response.data.game_id);
        console.log('Game question:', response.data.game_quest);
      } catch (error) {
        console.error('Error starting game:', error);
        return;
      }
    }
    originalHandleCardClick(cardIndex);
  };

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
            <div
              key={i}
              className="h-full w-1/3 flex flex-col justify-center items-center"
            >
              <div className="w-28 h-32 bg-tarot-back bg-cover bg-center mb-2"></div>
            </div>
          ))}
        </div>
        <div className="text-right">
          <Menu
            resetAnimation={resetAnimation}
            onGameTypeChange={handleGameTypeChange}
            initialGameType={gameType}
          />
        </div>
      </div>
    </div>
  );
};
