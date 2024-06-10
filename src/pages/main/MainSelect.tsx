import { ThreeCard } from '../../components/common/ThreeCard';
import { useLocation } from 'react-router-dom';

export const MainSelect = () => {
  const location = useLocation();
  const question = location.state.gameData.game_question || '무슨 카드가 제일 끌리나요?';
  const randomCards = location.state.randomCards

  return (
    <>
      <ThreeCard isActive={true} question={question} randomCards={randomCards}></ThreeCard>;
    </>
  );
};
