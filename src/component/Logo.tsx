<<<<<<< HEAD
import logo from '../assets/images/logo1.svg';
import '../App.css';
=======
import logo from '../assets/images/logo.svg';
>>>>>>> 37b217bd08e6ab58d85d7df5d8b69c303a8ff4bc

export const Logo = () => {
    return (
        <div className='w-full h-1/5 overflow-hidden flex justify-center relative'>
<<<<<<< HEAD
            <div className='h-4/5 w-64 border border-logo rounded-b-full relative '>
                <img src={logo} alt="Logo" style={{ width: '100%', height: '90%', marginBottom: '-10px' }} />
                <div className="absolute bottom-1/2 left-0 transform -translate-x-1/2 translate-y-1/2 bg-logo  w-12 h-12 z-1"></div>
                <div className="absolute bottom-0 left-0 transform translate-x-1/2 translate-y-1/2 bg-logo  w-12 h-12 z-1"></div>
                <div className="absolute bottom-0 right-0 transform -translate-x-1/2 translate-y-1/2 bg-logo  w-12 h-12 z-1"></div>
                <div className="absolute bottom-1/2 right-0 transform translate-x-1/2 translate-y-1/2 bg-logo  w-12 h-12 z-1"></div>
=======
            <div className='h-4/5 w-64 rounded-b-full relative '>
                <img src={logo} alt="Logo" className='w-full h-4/5 -mb-2.5' />
                <div className="absolute bottom-1/2 left-0 transform -translate-x-1/2 translate-y-1/2 bg-logo w-12 h-12">health</div>
                <div className="absolute bottom-0 left-0 transform translate-x-1/2 translate-y-1/2 bg-logo w-12 h-12">love</div>
                <div className="absolute bottom-1/2 right-0 transform translate-x-1/2 translate-y-1/2 bg-logo w-12 h-12">info</div>
>>>>>>> 37b217bd08e6ab58d85d7df5d8b69c303a8ff4bc
            </div>
        </div>
    );
};
