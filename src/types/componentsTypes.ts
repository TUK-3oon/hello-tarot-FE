import { ICardData } from "./apisTypes";

//common/Logo.tsx
export interface LogoProps {
    gameType: string;
}

export interface ILogoName {
    [key: string]: string;
}

//common/Menu.tsx
export interface IMenuProps {
    resetAnimation: () => void;
    handleGameTypeChange: (newGameType: string, newGameTypeId: string) => void;
    initialGameType: string;
}

//game/ThreeCard.tsx
export interface ThreeCardProps {
    isActive: boolean;
    question?: string;
    randomCards?: ICardData[]
}

//game/ThreeCardSelect.tsx
export interface ThreeCardSelectProps {
    selectedCard: ICardData
    isActive: boolean;
    close: () => void;
  }