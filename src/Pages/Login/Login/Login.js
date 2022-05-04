import React from 'react';
import { FcGoogle } from 'react-icons/fc'
import loginImg from '../../../images/login.png'

const Login = () => {
    return (
        <div className='grid md:grid-cols-2 h-[100vh]'>
            <div className='bg-[#E0DCDC] flex items-center'>
                <img src={loginImg} alt="" />
            </div>
            <div className='bg-white p-11'>
                <div>
                    <h2 className='text-5xl font-bold mb-11 leading-[56px]'>Welcome to <br /> <span className='text-[#6C63FF]'>Grocery Store</span></h2>
                    <button className='flex items-center justify-center font-[roboto] font-bold text-lg text-gray-700 w-full shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-6 rounded-3xl h-24'>
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
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id='email' placeholder='Enter Email' required />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder='Enter Password' required />
                        </div>
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;