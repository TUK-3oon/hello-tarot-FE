import logo from '../assets/images/logo1.svg';
import '../App.css';

export const Logo = () => {
    return (
        <div className='w-full h-1/5 overflow-hidden flex justify-center relative'>
            <div className='h-4/5 w-64 border border-logo rounded-b-full relative '>
                <img src={logo} alt="Logo" style={{ width: '100%', height: '90%', marginBottom: '-10px' }} />
                <div className="absolute bottom-1/2 left-0 transform -translate-x-1/2 translate-y-1/2 bg-logo  w-12 h-12 z-1"></div>
                <div className="absolute bottom-0 left-0 transform translate-x-1/2 translate-y-1/2 bg-logo  w-12 h-12 z-1"></div>
                <div className="absolute bottom-0 right-0 transform -translate-x-1/2 translate-y-1/2 bg-logo  w-12 h-12 z-1"></div>
                <div className="absolute bottom-1/2 right-0 transform translate-x-1/2 translate-y-1/2 bg-logo  w-12 h-12 z-1"></div>
            </div>
        </div>
    );
};
