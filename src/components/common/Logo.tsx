import logo from '../../assets/images/logo.svg';
import { ILogoName, LogoProps } from '@/types/componentsTypes';

const logoName: ILogoName = {
  love: 'Love Tarot',
  health: 'Health Tarot',
  fortune: 'Fortune Tarot',
};

export const Logo = ({ gameType }: LogoProps) => {
  return (
    <div className="w-full h-1/5 overflow-hidden flex flex-col justify-center items-center relative">
      <div className="h-3/5 w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 2xl:w-96">
        <img src={logo} alt="Logo" className="w-full h-full border-none" />
      </div>
      <h1 className="text-logo mt-2 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        {logoName[gameType]}
      </h1>
    </div>
  );
};