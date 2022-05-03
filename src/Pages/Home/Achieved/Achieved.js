import React from 'react';
import achievedImg from '../../../images/achieved.jpg'
import ratedImg from '../../../images/rated.png';
import customerImg from '../../../images/customer.png';

const Achieved = () => {
    return (
        <div className='container'>
            <h2 className='text-4xl text-center my-20'>What we have achieved till date</h2>
            <div className='grid lg:grid-cols-2 gap-10'>
                <div>
                    <img src={achievedImg} alt="" />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium quasi assumenda. Repellendus eos ratione velit. Consequuntur a quam inventore id quo. Corrupti deserunt a numquam obcaecati quia iure! Enim.</p>
                    <div>
                        <div className='flex items-center my-16'>
                            <img className='w-[154px] h-[154px]' src={ratedImg} alt="" />
                            <p className='ml-10 flex items-center'><span className='font-[700] text-4xl'>4.9</span> Rated</p>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-40 h-40' src={customerImg} alt="" />
                            <p className='ml-10 flex items-center'><span className='font-[700] text-4xl'>100K+</span> Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achieved;