import React from 'react';

const Login = () => {
    return (
        <div>
            <div className='bg-[#E0DCDC]'>
                <img src="" alt="" />
            </div>
            <div>
                <div>
                    <h2>Welcome to <span>Grocery Store</span></h2>
                    <button>
                        Login With Google
                    </button>
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