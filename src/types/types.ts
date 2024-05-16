export interface IRotationAngles {
    x: number;
    y: number;
}
interface ICardContent {
    front: string;
    back: string;
}

interface ISelectedCard {
    cardId: string;
    cardName: string;
    cardNumber: number;
    cardImage: string;
    cardContent: ICardContent;
}

export interface IntroSelectProps {
    selectedCard: ISelectedCard;
    isActive: boolean,
    close: () => void;
}

export interface ISpreadCardPosition {
    x: number;
    y: number;
}

export interface IUseCardSpreadReturn {
    isAnimated: boolean;
    positions: ISpreadCardPosition[];
    selectedCards: number[];
    visibleCards: boolean[];
    handleCardClick: (index: number) => void;
    resetAnimation: () => void;
}

export interface ThreeCardProps {
    isActive: boolean;
}
