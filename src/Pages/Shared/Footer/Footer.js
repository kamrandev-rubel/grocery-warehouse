import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black p-32'>
            <div className='container grid lg:grid-cols-2 mx-auto gap-20'>
                <div className='text-white '>
                    <h2 className='font-[700] text-5xl underline decoration-6 mb-7'>Contact Us</h2>
                    <p className='text-4xl'>If It Is Somthing About Grocery Let's Talk</p>
                </div>
                <div className='text-white'>
                    <p className='text-4xl'>880-556-0777</p>
                    <p className='text-4xl'>Support@grocerystore.com</p>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;