import { useState } from 'react';
import { IRotationAngles } from '../types/types';


export const useCardMove = (cards: string[]) => {

    const [rotationAngles, setRotationAngles] = useState<IRotationAngles[]>(cards.map(() => ({ x: 0, y: 0 })));
    const [overlayStyles, setOverlayStyles] = useState(cards.map(() => ({
        backgroundPosition: '100%', opacity: 0, filter: 'brightness(1)'
    })));

    const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        const rect = e.currentTarget.getBoundingClientRect();
        const MAX_ROTATION = 40;
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const rotationYAngle = (offsetX - rect.width / 2) / rect.width * MAX_ROTATION;
        const rotationXAngle = (rect.height / 2 - offsetY) / rect.height * MAX_ROTATION;

        const newRotationAngles = rotationAngles.slice();
        newRotationAngles[index] = { x: rotationXAngle, y: rotationYAngle };
        setRotationAngles(newRotationAngles);

        const gradientX = (offsetX / rect.width) * 100;
        const gradientY = (offsetY / rect.height) * 100;
        const newOverlayStyles = overlayStyles.slice();

        newOverlayStyles[index] = {
            backgroundPosition: `${gradientX}% ${gradientY}%`,
            opacity: 1.2,
            filter: 'brightness(1.5)'
        };
        setOverlayStyles(newOverlayStyles);
    };

    const handleMouseLeave = (index: number) => {
        const newRotationAngles = rotationAngles.slice();
        newRotationAngles[index] = { x: 0, y: 0 };
        setRotationAngles(newRotationAngles);

        const newOverlayStyles = overlayStyles.slice();
        newOverlayStyles[index] = { backgroundPosition: '50% 50%', opacity: 0, filter: 'brightness(1)' };
        setOverlayStyles(newOverlayStyles);
    };

    return { rotationAngles, overlayStyles, handleMouseMove, handleMouseLeave };
};
