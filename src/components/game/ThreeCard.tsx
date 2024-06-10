import { useState } from 'react';
import cardBackImage from '@/assets/images/back.svg';
import { useCardMove } from '@/hooks/useCardMove';
import { useVisible } from '@/hooks/useVisible';
import { ThreeCardSelect } from './ThreeCardSelect';
import { ThreeCardProps } from '@/types/componentsTypes';
import { CARD_NUM } from '@/utils/constants';
import { Error } from '../common/Error';

export const ThreeCard = ({ isActive, question, randomCards }: ThreeCardProps) => {
  const cards = Array(CARD_NUM).fill(cardBackImage);
  const [selectedCardModal, setSelectedCardModal] = useState(false);
  const { rotationAngles, overlayStyles, handleMouseMove, handleMouseLeave } = useCardMove(cards);
  const { visibleClass } = useVisible();

  if (!randomCards || randomCards.length === 0) {
    return(
      <Error/>
    )
  }

  return (
    <>
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center ${isActive && visibleClass}`}
      >
        <div className="w-full h-4/5 flex flex-row justify-center relative">
          {cards.map((card, index) => (
            <div key={index} className="flex-1 flex justify-center items-center relative" >
              <div
                className="w-4/5 h-4/5 mx-auto relative cursor-default bg-cover bg-no-repeat bg-center"
                onMouseMove={(e) => handleMouseMove(index, e)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => setSelectedCardModal(true)}
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
        <div className="mb-5 text-white text-2xl text-center">{question}</div>
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
