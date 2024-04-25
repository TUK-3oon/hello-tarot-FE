import { useState } from 'react';
import card1 from '../assets/images/back.svg';
import card2 from '../assets/images/back.svg';
import card3 from '../assets/images/back.svg';
import { useCardMove } from '../hooks/useCardMove';
import { useVisible } from '../hooks/useVisible';
import { ThreeCardSelect } from './ThreeCardSelect';
import { ThreeCardProps } from '../types/types';


export const ThreeCard: React.FC<ThreeCardProps> = ({ isActive }) => {

    const cards = [card1, card2, card3];
    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    const [selectedCardModal, setSelectedCardModal] = useState(false);
    const { rotationAngles, overlayStyles, handleMouseMove, handleMouseLeave } = useCardMove(cards);
    const { visibleClass } = useVisible()

    const selectCard = (card: string) => {
        setSelectedCard(card);
        setSelectedCardModal(true);
    };

    return (
        <>
            <div className={`absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center ${isActive && visibleClass} `}>
                <div className='w-full h-4/5 flex flex-row justify-center relative'>
                    {cards.map((card, index) => (
                        <div key={index} className='flex-1 flex justify-center items-center relative'>
                            <div className='w-4/5 h-4/5 mx-auto relative cursor-pointer bg-cover bg-no-repeat bg-center'
                                onMouseMove={(e) => handleMouseMove(index, e)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                onClick={() => selectCard(card)}
                                style={{
                                    transform: `perspective(1000px) rotateY(${rotationAngles[index].y}deg) rotateX(${rotationAngles[index].x}deg)`,
                                    transformOrigin: 'center',
                                    transition: 'all 0.1s',
                                    backgroundImage: `url(${card})`,
                                }}>
                                <div className='absolute inset-0 w-full h-full'
                                    style={{
                                        background: `radial-gradient(circle at ${overlayStyles[index].backgroundPosition}, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)`,
                                        transition: 'all 0.1s',
                                        opacity: overlayStyles[index].opacity,
                                        filter: overlayStyles[index].filter,
                                    }}
                                ></div>
                            </div >
                        </div >
                    ))}
                </div >
            </div >

            {selectedCard && selectedCardModal && <ThreeCardSelect isActive={isActive} card={selectedCard} close={() => {
                setSelectedCardModal(false)
                window.location.reload();
            }} />}
        </>
    );
};
