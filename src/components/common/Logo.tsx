import logo from '../../assets/images/logo.svg';

interface LogoProps {
  gameType: string;
}

export const Logo = ({ gameType }: LogoProps) => {
  const getTitle = (type: string) => {
    switch (type) {
      case 'love':
        return 'Love Tarot';
      case 'health':
        return 'Health Tarot';
      case 'fortune':
        return 'Fortune Tarot';
      default:
        return 'Hello Tarot';
    }
  };

  return (
    <div className="w-full h-1/5 overflow-hidden flex flex-col justify-center items-center relative">
      <div className="h-3/5 w-64">
        <img src={logo} alt="Logo" className="w-full h-full border-none" />
      </div>
      <h1 className="text-logo mt-2 text-2xl">{getTitle(gameType)}</h1>
    </div>
  );
};
