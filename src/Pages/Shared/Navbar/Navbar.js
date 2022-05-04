import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import { FaUserCircle } from 'react-icons/fa'
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    const [user] = useAuthState(auth);

    const handleUserProfile = () => {
        if (isActive === false) {
            setIsActive(true)
        }
        else {
            setIsActive(false)
        }
    }
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="mr-3 h-12" alt="Flowbite Logo" />

                    <span className="self-center text-xl font-semibold whitespace-nowrap  ">GROCERY STORE</span>
                </Link>
                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  " aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link to="/home" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 last:md:p-0">Home</Link>
                        </li>
                        <li>
                            <Link to="/services" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 last:md:p-0">Services</Link>
                        </li>
                        <li>
                            <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 last:md:p-0">About</Link>
                        </li>
                        <div onClick={handleUserProfile}>
                            {
                                user ?
                                    <div className='relative'>
                                        <FaUserCircle className='text-5xl text-gray-500 cursor-pointer' />
                                        <div className={`${isActive ? 'block' : 'hidden'} absolute md:text-right lg:text-left md:left-[-60px] lg:left-[-37px] z-50 shadow-lg`}>
                                            <ul className='bg-gray-500 font-[roboto] font-[500] text-lg p-2 px-4 text-white rounded-t-2xl'>
                                                <Link to='/' className='block'>Home</Link>
                                                <Link to='/' className='block'>Dashboard</Link>
                                                <Link onClick={() => signOut(auth)} to='/' className='block'>Sign Out</Link>
                                            </ul>
                                        </div>
                                    </div>
                                    :
                                    <Link to="/login" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0">LOGIN</Link>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;