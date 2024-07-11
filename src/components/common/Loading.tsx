import {PacmanLoader} from 'react-spinners';

export const Loading = ()=>{
    return <div>
        <PacmanLoader color='#D4D3B8'/>
        <div>
            <p className='text-logo mt-5'> GPT가 답변중이에요 </p>
        </div>
    </div>
}