import React from 'react';

const AddItem = () => {
    const handleAddNewItem = (e) => {
        e.preventDefault();

    }
    return (
        <div>
            <div className='w-10/12 sm:w-6/12 md:w-5/12 lg:w-4/12 mx-auto my-12'>
                <form onSubmit={handleAddNewItem}>
                    <div className='relative h-14 w-full mb-2'>
                        <label className='absolute pl-4 top-1 cursor-pointer text-[12px] font-bold' htmlFor="name">Name</label>
                        <input type="name" name='name' className='w-full h-full bg-white font-bold outline-none rounded-lg px-4 pt-2 text-gray-700' id='name' placeholder='Product Name' required />
                    </div>
                    <div className='relative h-14 w-full mb-2'>
                        <label className='absolute pl-4 top-1 cursor-pointer text-[12px] font-bold' htmlFor="price">Price</label>
                        <input type="number" name='price' className='w-full h-full bg-white font-bold outline-none rounded-lg px-4 pt-2 text-gray-700' id='price' placeholder='Product Price' required />
                    </div>
                    <div className='relative h-14 w-full mb-2'>
                        <label className='absolute pl-4 top-1 cursor-pointer text-[12px] font-bold' htmlFor="quantity">Quantity</label>
                        <input type="number" name='quantity' className='w-full h-full bg-white font-bold outline-none rounded-lg px-4 pt-2 text-gray-700' id='quantity' placeholder='Product Quantity' required />
                    </div>
                    <div className='relative h-14 w-full mb-2'>
                        <label className='absolute pl-4 top-1 cursor-pointer text-[12px] font-bold' htmlFor="supplier">Supplier</label>
                        <input type="text" name='supplier' className='w-full h-full bg-white font-bold outline-none rounded-lg px-4 pt-2 text-gray-700' id='supplier' placeholder='Product Supplier' required />
                    </div>
                    <div className='relative h-14 w-full mb-2'>
                        <label className='absolute pl-4 top-1 cursor-pointer text-[12px] font-bold' htmlFor="description">Description</label>
                        <input type="text" name='description' className='w-full h-full bg-white font-bold outline-none rounded-lg px-4 pt-2 text-gray-700' id='description' placeholder='Product Description' required />
                    </div>
                    <div className='relative h-14 w-full mb-2'>
                        <label className='absolute pl-4 top-1 cursor-pointer text-[12px] font-bold' htmlFor="img">Image</label>
                        <input type="text" name='img' className='w-full h-full bg-white font-bold outline-none rounded-lg px-4 pt-2 text-gray-700' id='img' placeholder='Product Image Link' required />
                    </div>
                    <input type="submit" value="Add Item" className='flex items-center justify-center font-bold text-lg bg-primary-color text-gray-900 w-full mb-6 rounded-lg h-16 mt-3 cursor-pointer' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;