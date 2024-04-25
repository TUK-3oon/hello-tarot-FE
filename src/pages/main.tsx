import React from 'react';
import { useCardSpread } from '../hooks/useCardSpread'
import '../App.css';

export const Main: React.FC = () => {

    const { positions, selectedCards, visibleCards, handleCardClick, resetAnimation } = useCardSpread();

    return (
        <>
            <div className="w-full h-4/5">
                <div className='w-full h-2/3 pt-10'>
                    <div className='w-24 h-32 m-auto relative bg-tarot-back bg-cover bg-center'>
                        {positions.map((card, i) => (
                            visibleCards[i] && (
                                <div key={i} className={`card card-${i} w-24 h-32 bg-tarot-back bg-cover bg-center absolute transition-all duration-1000 cursor-pointer `}
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
                    <button className='text-white' onClick={resetAnimation}>다시하기</button>
                </div>
            </div>
        </>
    );
};
