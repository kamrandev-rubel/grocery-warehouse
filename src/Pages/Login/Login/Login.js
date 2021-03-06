import React, { useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { HiOutlineMail } from 'react-icons/hi'
import { BsEyeFill } from 'react-icons/bs'
import { FiKey, FiEye } from 'react-icons/fi'
import loginImg from '../../../images/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import axios from 'axios'
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const [isShow, setIsShow] = useState(false)
    const [error, setError] = useState(false)
    const [passwordError, setPasswordError] = useState('')
    const emailRef = useRef()
    let navigate = useNavigate();
    let location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, gooleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);



    let from = location.state?.from?.pathname || "/";

    // if (user || googleUser) {
    //     
    // }

    const handleLoginUser = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (password.length < 6) {
            setError(true)
            setPasswordError('Wrong Password')
            return;
        }
        setError(false)
        setPasswordError('')
        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('https://grocery-store-warehouse.herokuapp.com/login', { email })
        if (data) {
            localStorage.setItem('accessToken', data)
            navigate(from, { replace: true })
        }
    }

    const handleResetPassword = async (event) => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
            console.log(email)
        }
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <Helmet title='Login' />
            <div className='bg-[#E0DCDC] flex items-center w-full6'>
                <img src={loginImg} alt="" className='w-full' />
            </div>
            <div className='bg-white p-11 w-full'>
                <div>
                    <h2 className='text-5xl font-bold mb-11 leading-[56px] text-center'>Welcome to <br /> <span className='text-[#6C63FF]'>Grocery Store</span></h2>
                    <button onClick={() => signInWithGoogle()} className='flex items-center justify-center font-[roboto] font-bold text-lg text-gray-700 w-full shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-6 rounded-3xl h-20'>
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
                    <form onSubmit={handleLoginUser}>
                        <div className='relative h-20 w-full mb-8'>
                            <HiOutlineMail className='absolute w-5 h-5 md:w-9 md:h-9 top-[30px] left-[11px] md:top-[26px] md:left-[29px]' />
                            <label className='absolute md:left-24 left-10 top-6 text-[12px] font-bold' htmlFor="email">Email</label>
                            <input ref={emailRef} type="email" name='email' className='w-full h-full bg-[#F2F2F2] pr-20 outline-none rounded-2xl pl-10 md:pl-24 pt-8' id='email' placeholder='Enter Email' required />
                        </div>
                        <div className='relative h-20 w-full'>
                            <FiKey className='absolute w-5 h-5 md:w-9 md:h-9 top-[30px] left-[11px] md:top-[26px] md:left-[29px]' />
                            {
                                isShow ?
                                    <BsEyeFill onClick={() => setIsShow(!isShow)} className='absolute cursor-pointer w-5 h-5 md:w-9 md:h-9 right-5 top-[30px] md:right-5 md:top-[22px]' />
                                    :
                                    <FiEye onClick={() => setIsShow(!isShow)} className='absolute cursor-pointer w-5 h-5 md:w-9 md:h-9 right-5 top-[30px] md:right-5 md:top-[22px]' />
                            }
                            <label className='absolute md:left-24 left-10 top-6 text-[12px] font-bold' htmlFor="password">Password</label>
                            <input type={isShow ? 'text' : 'password'} name="password" className={`${error ? 'border-2 border-red-500' : ''} w-full h-full bg-[#F2F2F2] pr-20 outline-none rounded-2xl pl-10 md:pl-24 pt-8`} id="password" placeholder='Enter Password' required />
                            <p className='text-red-500 font-[roboto] mt-1 text-[12px] ml-4'>{passwordError} </p>
                        </div>
                        <p onClick={handleResetPassword} className='text-right text-lg text-gray-600 cursor-pointer mt-5'>Forget Password?</p>
                        <input type="submit" value="Login" className='flex items-center justify-center font-[roboto] font-bold text-lg bg-[#6C63FF] text-white w-full mb-6 rounded-3xl h-16 mt-16 cursor-pointer' />
                        <p className='text-center mt-7'>Don???t have an account? <Link className='text-[#6C63FF]' to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;