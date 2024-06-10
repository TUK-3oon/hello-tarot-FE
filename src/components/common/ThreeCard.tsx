import { useState } from 'react';
import cardBackImage from '../../assets/images/back.svg';
import { useCardMove } from '../../hooks/useCardMove';
import { useVisible } from '../../hooks/useVisible';
import { ThreeCardSelect } from './ThreeCardSelect';
import { ThreeCardProps } from '../../types/types';

const CARD_NUM = 3;

export const ThreeCard = ({ isActive, question, randomCards }: ThreeCardProps) => {
  const cards = Array(CARD_NUM).fill(cardBackImage);
  const [selectedCardModal, setSelectedCardModal] = useState(false);
  const { rotationAngles, overlayStyles, handleMouseMove, handleMouseLeave } = useCardMove(cards);
  const { visibleClass } = useVisible();

  if (!randomCards || randomCards.length === 0) {
    randomCards = [
      {
        "card_id": "2825f9c0-c482-4925-bfb4-ac963590e307",
        "card_name": "The Fool",
        "card_number": 1,
        "card_image_url": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
        "card_contents": {
            "forward": "The Fool card represents new beginnings, innocence, and a leap of faith. It signifies embarking on a journey with an open heart and a sense of adventure. This card encourages you to trust in the universe and embrace the unknown.",
            "reverse": "The reverse of The Fool card may indicate recklessness, naivety, or missed opportunities. It may suggest a need to be more cautious and grounded in your approach to life."
        }
    },
    {
        "card_id": "d5b4777d-c038-4bd7-9d41-78c3b8bfc9b4",
        "card_name": "The Magician",
        "card_number": 2,
        "card_image_url": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        "card_contents": {
            "forward": "The Magician card represents manifestation, resourcefulness, and power. It signifies the ability to harness your skills and talents to achieve your goals. This card encourages you to take action and make things happen through focused intention and willpower.",
            "reverse": "The reverse of The Magician card may indicate manipulation, untapped potential, or misuse of power. It may suggest a need to be mindful of your actions and their consequences."
        }
    },
    {
        "card_id": "2a5f63c2-b74c-44ee-95f2-ff975ffadf67",
        "card_name": "The High Priestess",
        "card_number": 3,
        "card_image_url": "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
        "card_contents": {
            "forward": "The High Priestess card represents intuition, mystery, and inner wisdom. It signifies a deep connection to the subconscious mind and the mysteries of the universe. This card encourages you to listen to your inner voice and trust your instincts.",
            "reverse": "The reverse of The High Priestess card may indicate hidden agendas, secrets, or deception. It may suggest a need to look beneath the surface and uncover the truth in a situation."
        }
    }
    ]
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
