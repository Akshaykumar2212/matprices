import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidLogInCircle } from 'react-icons/bi';
import { useContextProvider } from '../contexts/ContextProvider';

const MainLayout = ({children}) => {
    const { CLIENT_URL } = useContextProvider();
    return (
        <Fragment>
            <header className='py-3 px-6 shadow-lg flex gap-4 justify-between items-center fixed w-full z-50 bg-white mb-10'>
                <Link to={'/'}><img src={`${CLIENT_URL}/assets/images/logo.png`} alt='logo' className='max-w-[8rem]'/></Link>
                <Link className='flex gap-1 items-center text-lg font-bold text-blue-600 rounded-md px-3 py-2 pr-3.5 hover:bg-blue-600 hover:text-white hover:transition-all hover:delay-300 border border-blue-600'>
                    <BiSolidLogInCircle className='text-2xl'/>
                    <button className='-mt-0.5 tracking-wider'>LOGIN</button>
                </Link>
            </header>
            <main className='pt-16'>{children}</main>
            <footer className='bg-black text-white px-4 py-6 flex flex-col-reverse md:flex-row justify-center text-center gap-4 md:justify-between'>
                <p>© {(new Date().getFullYear())} <span className='text-blue-600'>Mat Prices</span>. All rights reserved.</p>
                <div className='grid grid-cols-3 justify-center text-center'>
                    <Link>Home</Link>
                    <Link>Terms & Conditions</Link>
                    <Link>Privacy Policy</Link>
                </div>
            </footer>
        </Fragment>
    )
}

export default MainLayout