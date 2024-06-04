import { ThreeCard } from '../../components/common/ThreeCard';
import { useLocation } from 'react-router-dom';

export const MainSelect = () => {
  const location = useLocation();
  const question =  location.state.gameData.game_quest || "무슨 카드가 제일 끌리나요?";

  return(
    <>
      <ThreeCard isActive={true} question={question}></ThreeCard>;
    </>
  ) 
};
