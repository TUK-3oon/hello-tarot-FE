import axios from 'axios';
import { useEffect, useState } from 'react';
import cardBackImage from '../../assets/images/back.svg';
import { useCardMove } from '../../hooks/useCardMove';
import { useVisible } from '../../hooks/useVisible';
import { ThreeCardSelect } from './ThreeCardSelect';
import { ThreeCardProps } from '../../types/types';
import { getRandomNumber } from '@/utils/getRandoNumber';

export const ThreeCard = ({ isActive }: ThreeCardProps) => {
  const cards = Array(3).fill(cardBackImage);
  const [randomNum, setRandomNum] = useState(0);
  const [selectedCardModal, setSelectedCardModal] = useState(false);
  const { rotationAngles, overlayStyles, handleMouseMove, handleMouseLeave } =
    useCardMove(cards);
  const { visibleClass } = useVisible();
  const [selectedCard, setSelectedCard] = useState({
    cardId: '',
    cardName: '',
    cardNumber: 0,
    cardImage: '',
    cardContent: {
      front: '',
      back: '',
    },
  });

  useEffect(() => {
    if (!selectedCardModal) {
      const randomNum = getRandomNumber(8);
      setRandomNum(randomNum);
    }
  }, [selectedCardModal]);

  useEffect(() => {
    const getSelectedCard = async () => {
      try {
        const res = await axios.get('/card/front/all');
        const firstCard = res.data[randomNum];
        setSelectedCard({
          cardId: firstCard.card_id,
          cardName: firstCard.card_name,
          cardNumber: firstCard.card_number,
          cardImage: firstCard.card_image_url,
          cardContent: {
            front: firstCard.card_contents.forward,
            back: firstCard.card_contents.reverse,
          },
        });
      } catch (error) {
        console.error('getSelectedCard error', error);
      }
    };
    getSelectedCard();
  }, [randomNum]);

  return (
    <>
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center ${isActive && visibleClass}`}
      >
        <div className="w-full h-4/5 flex flex-row justify-center relative">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-1 flex justify-center items-center relative"
            >
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
      </div>

      {selectedCardModal && (
        <ThreeCardSelect
          isActive={isActive}
          selectedCard={selectedCard}
          close={() => {
            setSelectedCardModal(false);
            window.location.reload();
          }}
        />
      )}
    </>
  );
};
