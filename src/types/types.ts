import { ICardData } from "./apisTypes";

//Logo.tsx
export interface LogoProps {
  gameType: string;
}

export interface ILogoName {
  [key: string]: string;
}

//Menu.tsx
export interface IMenuProps {
  resetAnimation: () => void;
  handleGameTypeChange: (newGameType: string, newGameTypeId: string) => void;
  initialGameType: string;
}

export interface IRotationAngles {
  x: number;
  y: number;
}


export interface ThreeCardSelectProps {
  selectedCard: ICardData
  isActive: boolean;
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
  question?: string;
  randomCards?: ICardData[]
}
