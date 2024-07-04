import { useState, useEffect, useCallback } from 'react';
import cardBackImage from '@/assets/images/back.svg';
import { useCardMove } from '@/hooks/useCardMove';
import { useVisible } from '@/hooks/useVisible';
import { ThreeCardSelect } from './ThreeCardSelect';
import { ThreeCardProps } from '@/types/componentsTypes';
import { CARD_NUM } from '@/utils/constants';
import axios from 'axios';

export const ThreeCard = ({ isActive, gameData, randomCards }: ThreeCardProps) => {
  const cards = Array(CARD_NUM).fill(cardBackImage);
  const [selectedCardModal, setSelectedCardModal] = useState(false);
  const [polling, setPolling] = useState(false);
  const { rotationAngles, overlayStyles, handleMouseMove, handleMouseLeave } = useCardMove(cards);
  const { visibleClass } = useVisible();

  const endGame = async () => {
    try {
      const response = await axios.post('/game/end/', {
        game_id: gameData?.game_id,
        select_card_id: randomCards[0].card_id,
        all_select_card_id: {
          primary_select_card_id: randomCards[0].card_id,
          secondary_select_card_id: randomCards[1].card_id,
          tertiary_select_card_id: randomCards[2].card_id,
        },
      });
      console.log('End game response:', response.data);
      setPolling(true); 
    } catch (error) {
      console.error('Error ending game:', error);
    }
  };

  const endGameStatus = useCallback(async (interval: NodeJS.Timeout) => {
    try {
      const response = await axios.post('/game/status/', {
        game_id: gameData?.game_id,
      });
      console.log('Game status:', response.data);
      if (response.data.data.success === 'READY') {
        clearInterval(interval);
        setPolling(false);
        setSelectedCardModal(true);
      }
    } catch (error) {
      console.error('Error polling game status:', error);
    }
  }, [gameData]);

  useEffect(() => {
    if (polling) {
      const interval:NodeJS.Timeout = setInterval(() => endGameStatus(interval), 1000); 
      return () => clearInterval(interval); 
    }
  }, [polling, endGameStatus]);

  const handleSelectCard = async () => {
    await endGame();
    setSelectedCardModal(true);
  };

  return (
    <>
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center ${isActive && visibleClass}`}
      >
        <div className="w-full h-4/5 flex flex-row justify-center relative">
          {cards.map((card, index) => (
            <div key={index} className="flex-1 flex justify-center items-center relative">
              <div
                className="w-4/5 h-4/5 mx-auto relative cursor-default bg-cover bg-no-repeat bg-center"
                onMouseMove={(e) => handleMouseMove(index, e)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={handleSelectCard}
                style={{
                  transform: `perspective(1000px) rotateY(${rotationAngles[index].y}deg) rotateX(${rotationAngles[index].x}deg)`,
                  backgroundImage: `url(${card})`,
                }}
              >
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background: `radial-gradient(circle at ${overlayStyles[index].backgroundPosition}, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)`,
                    opacity: overlayStyles[index].opacity,
                    filter: overlayStyles[index].filter,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {gameData && <div className="mb-5 text-white text-2xl text-center">{gameData.game_quest}</div>}
      </div>

      {selectedCardModal && (
        <ThreeCardSelect
          isActive={isActive}
          selectedCard={randomCards[0]}
          close={() => {
            setSelectedCardModal(false);
            window.location.reload();
          }}
        />
      )}
    </>
  );
};