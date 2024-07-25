import { Outlet } from 'react-router-dom';
import { Header } from '../components/common/Header';
import { useGameType } from '../contexts/GameTypeContext';

export const Layout = () => {
  const { gameTypeName } = useGameType();

  return (
    <div className="w-screen h-screen bg-main relative cursor-default">
      <Header gameType={gameTypeName} />
      <Outlet />
    </div>
  );
};
