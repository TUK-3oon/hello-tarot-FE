import logo from '../assets/images/logo.svg';

export const Logo = () => {
    return (
        <div className='w-full h-1/5 overflow-hidden flex justify-center relative'>
            <div className='h-4/5 w-64 rounded-b-full relative '>
                <img src={logo} alt="Logo" className='w-full h-4/5 -mb-2.5' />
                <div className="absolute bottom-1/2 left-0 transform -translate-x-1/2 translate-y-1/2 text-logo">health</div>
                <div className="absolute bottom-0  right-1/2 transform translate-x-1/2 translate-y-1/2 text-logo">love</div>
                <div className="absolute bottom-1/2 right-0 transform translate-x-1/2 translate-y-1/2 text-logo">info</div>
            </div>
        </div>
    );
};
