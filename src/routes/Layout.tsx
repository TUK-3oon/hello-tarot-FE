import { Outlet } from 'react-router-dom';
import { Logo } from '../components/common/Logo';

export const Layout = () => {
    return (
        <div className='w-screen h-screen bg-main relative cursor-default'>
            <Logo></Logo>
            <Outlet></Outlet>
        </div>
    )
}