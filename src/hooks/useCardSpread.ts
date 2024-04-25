import { useState, useEffect } from 'react';
import { ISpreadCardPosition, IUseCardSpreadReturn } from '../types/types'

export const useCardSpread = (): IUseCardSpreadReturn => {

    const [isAnimated, setIsAnimated] = useState<boolean>(false);
    const [positions, setPositions] = useState<ISpreadCardPosition[]>([]);
    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    const [visibleCards, setVisibleCards] = useState<boolean[]>(Array(12).fill(true));

    useEffect(() => {
        setTimeout(() => {
            setIsAnimated(true);
        }, 500);
    }, []);

    useEffect(() => {
        if (isAnimated) {
            setPositions(spread());
        } else {
            setVisibleCards(Array(12).fill(true));
            setPositions(Array.from({ length: 12 }, (_, i) => ({ x: i, y: i })));
            setSelectedCards([]);
        }
    }, [isAnimated]);

    //카드 뿌려줌(x: 가로축, y 세로축)
    const spread = (): ISpreadCardPosition[] => {
        return Array.from({ length: 12 }, (_, i) => {
            const angle = (180 / 11 * i) * (Math.PI / 180);
            return {
                x: 600 * Math.cos(angle),
                y: 200 * Math.sin(angle),
            };
        });
    };

    const handleCardClick = (index: number): void => {
        if (selectedCards.length < 3) {
            setSelectedCards([...selectedCards, index]);
            setVisibleCards(visibleCards.map((visible, idx) => idx === index ? false : visible));
        }
    };

    const resetAnimation = (): void => {
        if (isAnimated) {
            setIsAnimated(false);
            setTimeout(() => setIsAnimated(true), 1500);
        }
    };

    return { isAnimated, positions, selectedCards, visibleCards, handleCardClick, resetAnimation };
};