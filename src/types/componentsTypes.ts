import { ICardData } from "./apisTypes";

//common/Logo.tsx
export interface HeaderProps {
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
    isMain: boolean;
    gameData?: {
        game_id:string;
        game_quest:string;
    };
    randomCards: ICardData[]
}

//game/ThreeCardSelect.tsx
export interface ThreeCardSelectProps {
    selectedCard: ICardData
    isMain: boolean;
    loading: boolean;
    responseAnswer?: string;
    close: () => void;
  }


//answer/isMainAnswerProps
export interface IntroAnswerProps{
    selectedCard : ICardData
}

export interface MainAnswerProps{
    responseAnswer?: string;
}