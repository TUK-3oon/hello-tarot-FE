import { ThreeCard } from '@/components/game/ThreeCard';
import { useLocation } from 'react-router-dom';
import { DEFAULT_QUESTION } from '@/utils/constants';

export const MainSelect = () => {
  const location = useLocation();
  const question = location.state.gameData.game_question || DEFAULT_QUESTION;
  const randomCards = location.state.randomCards

  return (
    <>
      <ThreeCard isActive={true} question={question} randomCards={randomCards}></ThreeCard>;
    </>
  );
};
