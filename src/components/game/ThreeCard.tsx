import { useState, useEffect, useCallback } from 'react';
import cardBackImage from '@/assets/images/back.svg';
import { useCardMove } from '@/hooks/useCardMove';
import { useVisible } from '@/hooks/useVisible';
import { ThreeCardSelect } from './ThreeCardSelect';
import { ThreeCardProps } from '@/types/componentsTypes';
import { CARD_NUM } from '@/utils/constants';
import { endGame, endGameStatus, getEndGameAnswer } from '@/apis/game';

export const ThreeCard = ({ isMain, gameData, randomCards }: ThreeCardProps) => {
  const cards = Array(CARD_NUM).fill(cardBackImage);
  const [selectedCardModal, setSelectedCardModal] = useState(false);
  const [answer, setAnswer] = useState('')
  const [polling, setPolling] = useState(false);
  const [loading, setLoading] = useState(false);
  const { rotationAngles, overlayStyles, handleMouseMove, handleMouseLeave } = useCardMove(cards);
  const { visibleClass } = useVisible();

  const handleEndGame = async () => {
    if (!isMain) return ;
    try {
      setLoading(true);
      await endGame(gameData?.game_id, randomCards);
      setPolling(true);
    } catch (error) {
      console.error('Error handleEndGame:', error);
    }
  };

  const handleEndGameStatus = useCallback(async (interval: NodeJS.Timeout) => {
    if (!isMain) return;
    try {
      const status = await endGameStatus(gameData?.game_id);
      if (status.success === 'FINISHED') {
        clearInterval(interval);
        setPolling(false);
        setLoading(false)
        const responseAnswer = await getEndGameAnswer(gameData?.game_id)
        setAnswer(responseAnswer)
      }
    } catch (error) {
      console.error('Error handleEndGameStatus:', error);
    }
  }, [gameData, isMain]);

  useEffect(() => {
    if (polling) {
      const interval: NodeJS.Timeout = setInterval(() => handleEndGameStatus(interval), 1000);
      return () => clearInterval(interval);
    }
  }, [polling, handleEndGameStatus]);

  const handleSelectCard = async () => {
    await handleEndGame();
    setSelectedCardModal(true);
  };

  return (
    <>
      <div className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center ${isMain && visibleClass}`}>
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
          isMain={isMain}
          loading={loading}
          selectedCard={randomCards[0]}
          responseAnswer={answer}
          close={() => {
            setSelectedCardModal(false);
            window.location.reload();
          }}
        />
      )}
    </>
  );
};
