import { createContext, useState, useContext, ReactNode } from 'react';

interface GameTypeContextProps {
  gameType: string;
  setGameType: (newGameType: string) => void;
}

const GameTypeContext = createContext<GameTypeContextProps | undefined>(undefined);

const GameTypeProvider = ({ children }: { children: ReactNode }) => {
  const [gameType, setGameType] = useState('love');
  return (
    <GameTypeContext.Provider value={{ gameType, setGameType }}>
      {children}
    </GameTypeContext.Provider>
  );
};

const useGameType = () => {
  const context = useContext(GameTypeContext);
  if (!context) {
    throw new Error('useGameType error');
  }
  return context;
};

export { GameTypeProvider, useGameType };
