import { useNavigate } from 'react-router-dom';
import { IntroSelectProps } from '../../types/types';
import { useVisible } from '../../hooks/useVisible';
import { Button } from '../ui/button';

export const ThreeCardSelect = ({
  close,
  isActive,
  selectedCard,
}: IntroSelectProps) => {
  const navigate = useNavigate();
  const { visibleClass } = useVisible();

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center transition-opacity duration-1000 ${visibleClass}`}
    >
      <div className="w-4/5 h-4/5 flex">
        <div
          style={{ backgroundImage: `url(${selectedCard.cardImage})` }}
          className="w-1/2 h-full bg-contain bg-no-repeat bg-center overflow-fit mr-5"
        ></div>
        <div className="h-full w-1/2 bg-white p-3 pt-6 relative">
          <div className="h-5/6 overflow-y-auto p-5">
            <div className="mb-12 text-center">
              <h1 className="font-bold text-2xl mb-1">
                {selectedCard.cardName}
              </h1>
            </div>
            <div className="mb-7">
              <h1 className="font-bold text-lg mb-1">Good</h1>
              <p>{selectedCard.cardContent.front}</p>
            </div>
            <div className="mb-7">
              <h1 className="font-bold text-lg mb-1">Bad</h1>
              <p>{selectedCard.cardContent.back}</p>
            </div>
          </div>
          <div className="h-1/6 flex justify-end items-center p-5">
            {isActive || (
              <Button
                className="cursor-default bg-main m-3 hover:bg-main-darker"
                onClick={close}
              >
                Retry
              </Button>
            )}
            <Button
              className="cursor-default bg-main hover:bg-main-darker"
              onClick={() => navigate('/main')}
            >
              {isActive ? <>Retry</> : <div>Go to Main</div>}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
