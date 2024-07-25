import { useEffect, useState } from 'react';
import { ClockLoader } from 'react-spinners';
import { useNavigate } from "react-router-dom";
import { Button } from '../ui/button';

export const Error = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);
    const handleClickGoToMainBtn = () => navigate('/main');

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    return (
        <div className="flex flex-col items-center justify-center text-logo text-center mt-28">
            <p className='mb-10 text-white'>잠시후 다시 시도해주세요</p>
            <ClockLoader color='#D4D3B8' />
            <div className="mt-4 text-2xl">
                {countdown > 0 ? `${countdown}` : '클릭'}
            </div>
            <button
              className="mt-8 px-6 py-2 font-bold rounded-lg cursor-default transition duration-300 bg-[#D4D3B8] text-black hover:bg-[#B0AFA8]"
              onClick={handleClickGoToMainBtn}
            >
               메인페이지로 이동
            </button>
        </div>
    );
}