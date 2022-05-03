import React from 'react';
import tradeImg1 from '../../../images/trademark1.jpg'
import tradeImg2 from '../../../images/trademark2.jpg'
import tradeImg3 from '../../../images/trademark3.jpg'

const Trademark = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-4xl my-20 font-[500]'>Our Trademark</h2>
            <div className='grid lg:grid-cols-3 gap-10'>
                <div>
                    <div className='  h-[338px] relative rounded-sm'>
                        <div className='flex justify-center h-[256px] bg-white'>
                            <img src={tradeImg1} className='absolute bottom-0 w-[266px] h-[272px]' alt="" />
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <h2></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum numquam molestias impedit eveniet excepturi illum praesentium modi ea autem!</p>
                    </div>
                </div>
                <div>
                    <div className='  h-[338px] relative rounded-sm'>
                        <div className='flex justify-center h-[256px] bg-white'>
                            <img src={tradeImg2} className='absolute bottom-0 w-[266px] h-[272px]' alt="" />
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <h2></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum numquam molestias impedit eveniet excepturi illum praesentium modi ea autem!</p>
                    </div>
                </div>
                <div>
                    <div className='  h-[338px] relative rounded-sm'>
                        <div className='flex justify-center h-[256px] bg-white'>
                            <img src={tradeImg3} className='absolute bottom-0 w-[266px] h-[272px]' alt="" />
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <h2></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum numquam molestias impedit eveniet excepturi illum praesentium modi ea autem!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trademark;