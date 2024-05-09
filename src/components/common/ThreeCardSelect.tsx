import { useNavigate } from "react-router-dom";
import { IntroSelectProps } from "../../types/types";
import { useVisible } from "../../hooks/useVisible";
import { Button } from "../ui/button";

export const ThreeCardSelect = ({ card, close, isActive }: IntroSelectProps) => {

    const navigate = useNavigate();
    const { visibleClass } = useVisible()

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center transition-opacity duration-1000 ${visibleClass}`}>
            <div className="w-4/5 h-4/5 flex">
                <div style={{ backgroundImage: `url(${card})` }} className="w-1/2 h-full bg-cover bg-no-repeat bg-center"></div>
                <div className="h-full w-1/2 bg-white p-12">
                    <h1>카드 이름</h1>
                    <p className="mb-64">카드 설명</p>
                    {isActive || <><button className="cursor-default" onClick={close}>다시하기</button><br /><br></br></>}
                    <button className="cursor-default" onClick={() => navigate('/main')}>{isActive ? <div>다시하기</div> : <div>메인으로 이동</div>}</button>
                    <Button>hi</Button>
                </div>
            </div>
        </div >
    );
};
