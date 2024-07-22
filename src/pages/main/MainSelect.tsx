import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ThreeCard } from '@/components/game/ThreeCard';

export const MainSelect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const gameData = location.state?.gameData;
  const randomCards = location.state?.randomCards;

  useEffect(() => {
    const isReload = sessionStorage.getItem('isReload');

    if (isReload) {
      sessionStorage.removeItem('isReload');
      navigate('/main');
    } else {
      sessionStorage.setItem('isReload', 'true');
    }
  }, [navigate]);

  
  // if (!gameData || !randomCards) {
  //   return null; 
  // }

  return <ThreeCard isMain={true} gameData={gameData} randomCards={randomCards} />;
};