import { createContext, useState, useContext, ReactNode } from 'react';

interface GameTypeContextProps {
  gameTypeName: string;
  setGameTypeName: (newGameType: string) => void;
}

const GameTypeContext = createContext<GameTypeContextProps | undefined>(undefined);

const GameTypeProvider = ({ children }: { children: ReactNode }) => {
  const [gameTypeName, setGameTypeName] = useState('love');
  return (
    <GameTypeContext.Provider value={{ gameTypeName, setGameTypeName }}>
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
