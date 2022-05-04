import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillYoutube } from 'react-icons/ai';
import { IoLogoWhatsapp, IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
    return (
        <div className='bg-black p-5 md:py-32 '>
            <div className='container grid md:grid-cols-2 mx-auto gap-20 w-full'>
                <div className='text-white '>
                    <h2 className='font-[700] text-5xl underline decoration-6 mb-7'>Contact Us</h2>
                    <p className='md:text-4xl'>If It Is Somthing About Grocery Let's Talk</p>
                </div>
                <div className='text-white'>
                    <p className='text-4xl'>880-556-0777</p>
                    <p className='lg:text-3xl'>Support@grocerystore.com</p>
                    <div className='flex mt-9'>
                        <FaFacebookF className='w-10 h-10 p-2 md:w-16 md:h-16 bg-slate-300 lg:p-4 text-black ml-4 rounded-full cursor-pointer' />
                        <RiInstagramFill className='w-10 h-10 p-2 md:w-16 md:h-16 bg-slate-300 lg:p-4 text-black ml-4 rounded-full cursor-pointer' />
                        <AiFillYoutube className='w-10 h-10 p-2 md:w-16 md:h-16 bg-slate-300 lg:p-4 text-black ml-4 rounded-full cursor-pointer' />
                        <IoLogoWhatsapp className='w-10 h-10 p-2 md:w-16 md:h-16 bg-slate-300 lg:p-4 text-black ml-4 rounded-full cursor-pointer' />
                        <IoLogoLinkedin className='w-10 h-10 p-2 md:w-16 md:h-16 bg-slate-300 lg:p-4 text-black ml-4 rounded-full cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;