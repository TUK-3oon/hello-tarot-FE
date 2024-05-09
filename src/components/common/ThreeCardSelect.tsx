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
                <div className="h-full w-1/2 bg-white p-3 pt-6 relative">
                    <div className="h-5/6 overflow-y-auto p-5">
                        <div className="mb-7">
                            <h1 className="font-bold text-2xl mb-1">Card Name</h1>
                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="mb-7">
                            <h1 className="font-bold text-2xl mb-1">Card Description</h1>
                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="mb-7">
                            <h1 className="font-bold text-2xl mb-1">Test</h1>
                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div className="h-1/6 flex justify-end items-center p-5">
                        {isActive || <Button className="cursor-default bg-main m-3" onClick={close}>Retry</Button>}
                        <Button className="cursor-default bg-main" onClick={() => navigate('/main')}>
                            {isActive ? <div>Retry</div> : <div>Go to Main</div>}
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    );
};
