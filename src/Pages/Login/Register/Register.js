import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { HiOutlineMail } from 'react-icons/hi'
import { FiKey, FiEye } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { BsEyeFill } from 'react-icons/bs'
import loginImg from '../../../images/login.png'
import { Link } from 'react-router-dom';

const Register = () => {
    const [isShow, setIsShow] = useState(false)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div className='bg-white p-11'>
                <div>
                    <h2 className='text-5xl font-bold mb-11 leading-[56px] text-center'>Welcome to <br /> <span className='text-[#6C63FF]'>Grocery Store</span></h2>
                    <button className='flex items-center justify-center font-[roboto] font-bold text-lg text-gray-700 w-full shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-6 rounded-3xl h-20'>
                        <FcGoogle className='w-9 h-9 mr-6' />
                        Login With Google
                    </button>
                    <div className='flex justify-center items-center mb-16'>
                        <div className='w-[250px] h-[2px] bg-slate-600'></div>
                        <p className='text-lg text-gray-600 font-bold mx-5'>OR</p>
                        <div className='w-[250px] h-[2px] bg-slate-600'></div>
                    </div>
                </div>
                <div>
                    <form>
                        <div className='relative h-20 w-full mb-8'>
                            <AiOutlineUser className='absolute w-5 h-5 md:w-9 md:h-9 top-[30px] left-[11px] md:top-[26px] md:left-[29px]' />
                            <label className='absolute md:left-24 left-10 top-5 text-[12px] font-bold' htmlFor="name">Name</label>
                            <input type="name" name='name' className='w-full h-full bg-[#F2F2F2] outline-none rounded-2xl pl-10 md:pl-24 pt-8' id='name' placeholder='Enter Name' required />
                        </div>
                        <div className='relative h-20 w-full mb-8'>
                            <HiOutlineMail className='absolute w-5 h-5 md:w-9 md:h-9 top-[30px] left-[11px] md:top-[26px] md:left-[29px]' />
                            <label className='absolute md:left-24 left-10 top-5 text-[12px] font-bold' htmlFor="email">Email</label>
                            <input type="email" name='email' className='w-full h-full bg-[#F2F2F2] outline-none rounded-2xl pl-10 md:pl-24 pt-8' id='email' placeholder='Enter Email' required />
                        </div>
                        <div className='relative h-20 w-full mb-8'>
                            <FiKey className='absolute w-5 h-5 md:w-9 md:h-9 top-[30px] left-[11px] md:top-[26px] md:left-[29px]' />
                            {
                                isShow ?
                                    <BsEyeFill onClick={() => setIsShow(!isShow)} className='absolute w-5 h-5 md:w-9 md:h-9 right-5 top-[30px] md:right-5 md:top-[22px]' />
                                    :
                                    <FiEye onClick={() => setIsShow(!isShow)} className='absolute w-5 h-5 md:w-9 md:h-9 right-5 top-[30px] md:right-5 md:top-[22px]' />
                            }
                            <label className='absolute md:left-24 left-10 top-5 text-[12px] font-bold' htmlFor="password">Password</label>
                            <input type={isShow ? 'text' : 'password'} name="password" className='w-full h-full bg-[#F2F2F2] outline-none rounded-2xl pl-10 md:pl-24 pt-8' id="password" placeholder='Enter Password' required />
                        </div>
                        <div className='relative h-20 w-full'>
                            <FiKey className='absolute w-5 h-5 md:w-9 md:h-9 top-[30px] left-[11px] md:top-[26px] md:left-[29px]' />
                            <label className='absolute md:left-24 left-10 top-5 text-[12px] font-bold' htmlFor="confirmPasword">Confirm Password</label>
                            <input type='password' name="confirmPasword" className='w-full h-full bg-[#F2F2F2] outline-none rounded-2xl pl-10 md:pl-24 pt-8' id="confirmPasword" placeholder='Confirm Password' required />
                        </div>
                        <p className='text-right text-lg text-gray-600 cursor-pointer mt-5'>Forget Password?</p>
                        <input type="submit" value="Login" className='flex items-center justify-center font-[roboto] font-bold text-lg bg-[#6C63FF] text-white w-full mb-6 rounded-3xl h-20 mt-16' />
                        <p className='text-center mt-7'>Already have an account? <Link className='text-[#6C63FF]' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
            <div className='bg-[#E0DCDC] flex items-center'>
                <img src={loginImg} alt="" />
            </div>
        </div>
    );
};

export default Register;