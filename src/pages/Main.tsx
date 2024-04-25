import '../App.css';
import React from 'react';
import { useCardSpread } from '../hooks/useCardSpread'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Main: React.FC = () => {

    const navigate = useNavigate()
    const [isHidden, setIsHidden] = useState(false);
    const { positions, selectedCards, visibleCards, handleCardClick, resetAnimation } = useCardSpread();

    useEffect(() => {
        const MAX_SELECTED_CARD = 3
        if (selectedCards.length === MAX_SELECTED_CARD) {
            setIsHidden(true);
            setTimeout(() => {
                navigate('/main/select');
            }, 100)
        }

    }, [selectedCards]);

    return (
        <>
            <div className={`w-full h-4/5 transition-opacity duration-1000 ${isHidden ? 'opacity-0' : 'opacity-100'}`}>
                <div className='w-full h-2/3 pt-10'>
                    <div className='w-24 h-32 m-auto relative bg-tarot-back bg-cover bg-center'>
                        {positions.map((card, i) => (
                            visibleCards[i] && (
                                <div key={i} className={`card card-${i} w-24 h-32 bg-tarot-back bg-cover bg-center absolute transition-all duration-1000`}
                                    style={{ left: `${card.x}px`, top: `${card.y}px` }}
                                    onClick={() => handleCardClick(i)} />
                            )
                        ))}
                    </div>
                </div>
                <div className='w-full h-1/3 pb-10'>
                    <div className='w-1/2 h-full border border-logo m-auto flex justify-start'>
                        {selectedCards.map((i) => (
                            <div key={i} className={`h-full w-1/3 flex justify-center items-center flex-row`} >
                                <div className='w-28 h-32 bg-tarot-back bg-cover bg-center'></div>
                            </div>
                        ))}
                    </div>
                    <div className='text-right pr-10'>
                        <button className='text-white' onClick={resetAnimation}>다시하기</button>
                    </div>
                </div>
            </div>
        </>
    );
};
