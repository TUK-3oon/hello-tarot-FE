import { Outlet } from 'react-router-dom';
import { Logo } from '../components/common/Logo';
import { useGameType } from '../contexts/GameTypeContext';

export const Layout = () => {
  const { gameTypeName } = useGameType();

  return (
    <div className="w-screen h-screen bg-main relative cursor-default">
      <Logo gameType={gameTypeName} />
      <Outlet />
    </div>
  );
};
