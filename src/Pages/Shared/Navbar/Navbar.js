import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import { FaUserCircle } from 'react-icons/fa'
import { RiArrowDownSFill } from 'react-icons/ri'
import { HiMenuAlt1 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [user] = useAuthState(auth);
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="mr-3 h-12" alt="Flowbite Logo" />

                    <span className="self-center text-xl font-semibold whitespace-nowrap  ">GROCERY STORE</span>
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-expanded="false">
                    {
                        isOpen ? <IoClose className='text-2xl' /> : <HiMenuAlt1 className='text-2xl' />

                    }
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link to="/home" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 last:md:p-0">Home</Link>
                        </li>
                        <li>
                            <Link to="/inventory" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 last:md:p-0">Inventory</Link>
                        </li>
                        <li>
                            <Link to="/blogs" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 last:md:p-0">Blogs</Link>
                        </li>
                        <div onClick={() => setIsActive(!isActive)}>
                            {
                                user ?
                                    <div className='relative'>
                                        {
                                            user?.photoURL ?
                                                <>
                                                    <img src={user?.photoURL} className='w-[48px] h-[48px] rounded-full cursor-pointer inline-block' alt="" />
                                                    <RiArrowDownSFill className='inline-block text-4xl cursor-pointer' />
                                                </>
                                                :
                                                <>
                                                    <FaUserCircle className='text-5xl text-gray-400 cursor-pointer inline-block' />
                                                    <RiArrowDownSFill className='inline-block text-4xl cursor-pointer' />
                                                </>
                                        }
                                        <div className={`${isActive ? 'block' : 'hidden'} absolute w-64 right-[-83px] md:left-[-200px] z-50 shadow-2xl order`}>
                                            <ul className='bg-white font-[roboto] font-[500] text-lg text-gray-900 rounded-lg'>
                                                <div className='p-2 px-4 '>
                                                    {
                                                        user?.photoURL ?
                                                            <>
                                                                <img src={user?.photoURL} className='w-24 h-24 rounded-full cursor-pointer mb-2.5 mx-auto' alt="" />
                                                            </>
                                                            :
                                                            <>
                                                                <FaUserCircle className='text-5xl text-gray-400 cursor-pointer w-24 h-24 mx-auto' />
                                                            </>
                                                    }
                                                </div>
                                                <div>
                                                    <Link to='' className='block font-bold text-center'>{user?.displayName}</Link>
                                                    <Link to='' className='block font-[500] text-sm mb-2 text-gray-600 text-center'>{user?.email}</Link>
                                                    <div className='w-full h-[1px] bg-slate-400'></div>
                                                    <Link to='/myitem' className='block py-1 px-4 hover:bg-slate-200'>My Item</Link>
                                                    <Link to='/additem' className='block py-1 px-4 hover:bg-slate-200'>Add Item</Link>
                                                    <Link to='/manageinventory' className='block py-1 px-4 hover:bg-slate-200'>Manage Inventory</Link>
                                                    <Link onClick={() => signOut(auth)} to='/' className='block py-1 px-4 hover:bg-slate-200'>Sign Out</Link>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    :
                                    <Link to="/login" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-[3px] border-primary-color hover:bg-primary-color hover:font-bold">LOGIN</Link>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;