import { ThreeCard } from '@/components/game/ThreeCard';
import { useLocation } from 'react-router-dom';

export const MainSelect = () => {
  const location = useLocation();
  const gameData = location.state.gameData;
  const randomCards = location.state.randomCards

  return <ThreeCard isActive={true} gameData={gameData}  randomCards={randomCards}></ThreeCard>
};
