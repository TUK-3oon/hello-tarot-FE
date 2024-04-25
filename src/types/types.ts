export interface IRotationAngles {
    x: number;
    y: number;
}

export interface IntroSelectProps {
    card: string;
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
