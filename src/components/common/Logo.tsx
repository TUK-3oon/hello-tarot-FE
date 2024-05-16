import logo from '../../assets/images/logo.svg';

export const Logo = () => {
    return (
        <div className='w-full h-1/5 overflow-hidden flex justify-center items-center relative'>
            <div className='h-4/5 w-64 rounded-b-full relative'>
                <img src={logo} alt="Logo" className='w-full h-full' />
            </div>
        </div>
    );
};
