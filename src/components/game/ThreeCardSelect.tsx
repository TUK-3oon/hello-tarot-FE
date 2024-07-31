import { useNavigate } from 'react-router-dom';
import { ThreeCardSelectProps } from '@/types/componentsTypes';
import { useVisible } from '@/hooks/useVisible';
import { Button } from '../ui/button';
import { Loading } from '../common/Loading';
import { IntroAnswer } from '../answer/IntroAnswer';
import { MainAnswer } from '../answer/MainAnswer';
import {THREE_CARD_SELECTED_CARD,THREE_CARD_SELECTED_ANSWER} from '../../utils/css'

export const ThreeCardSelect = ({ close, isMain, loading, responseAnswer, selectedCard }: ThreeCardSelectProps) => {
  const navigate = useNavigate();
  const { visibleClass } = useVisible();
  const handleClickGoToMainBtn = () => navigate('/main');

  if (loading) {
    return (
      <div className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center transition-opacity duration-1000 ${visibleClass}`}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center transition-opacity duration-1000 ${visibleClass} overflow-y-auto py-6`}>
      <div className="w-4/5 sm:h-4/5 h-auto flex flex-col sm:flex-row justify-center items-center">
        <div
          style={{ backgroundImage: `url(${selectedCard.card_image_url})` }}
          className={`bg-cover bg-no-repeat bg-center my-5 sm:my-0 sm:mr-5 ${THREE_CARD_SELECTED_CARD}`}
        ></div>
        <div className={`flex justify-center items-center ${THREE_CARD_SELECTED_ANSWER}`}>
          <div className="w-full bg-white p-3 pt-6 relative h-full flex flex-col">
            <div className="flex-1 overflow-y-auto p-5">
              {isMain ? <MainAnswer responseAnswer={responseAnswer}></MainAnswer> : <IntroAnswer selectedCard={selectedCard}></IntroAnswer>}
            </div>
            <div className="flex justify-end items-center p-5">
              {isMain || (
                <Button className="w-1/3 cursor-default bg-main m-3 hover:bg-main-darker" onClick={close}>
                  Retry
                </Button>
              )}
              <Button className="w-1/3 cursor-default bg-main hover:bg-main-darker" onClick={handleClickGoToMainBtn}>
                {isMain ? <div>Retry</div> : <div>Go to Main</div>}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};