import { useNavigate } from "react-router-dom";

export const Error = () => {

    const navigate = useNavigate();
    const handleClickGoToMainBtn = () => navigate('/main');
    
    return(
        <>
            <div>에러ㅠ . ㅠ</div>
            <button onClick={handleClickGoToMainBtn}>메인페이지로 이동</button>
        </>
    )
}