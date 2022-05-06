import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then((response) => {
                const allProducts = response.data;
                const groceries = allProducts.slice(0, 6);
                setProducts(groceries)
            })
    }, [products])
    return (
        <div className='container mx-auto mb-4'>
            <h2 className='text-center text-4xl font-bold my-16'>Inventory</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product => {
                        const { name, price, quantity, supplier, description, _id } = product;
                        let updateQuantity = quantity
                        if (quantity <= 0) {
                            updateQuantity = <p className='text-red-600'>Sold</p>
                        }
                        return (
                            <div key={product._id} className='border-2 border-primary-color shadow-lg rounded-2xl p-3 bg-white'>
                                <img src={product?.img} className='w-56 h-60 mx-auto' alt="" />
                                <h3 className='text-center my-2 mt-3 font-bold text-gray-900'>{name}</h3>
                                <div className='flex justify-between px-3'>
                                    <div>
                                        <p className='font-bold text-gray-900'>Price</p>
                                        <p className='font-bold text-sm text-gray-700 text-center'>{price}</p>
                                    </div>
                                    <div>
                                        <p className='font-bold text-gray-900'>Quantity</p>
                                        <p className='font-bold text-sm text-gray-700 text-center'>{updateQuantity}</p>
                                    </div>
                                </div>
                                <p className='font-bold text-gray-900 pl-3 mt-2'>Supplier: <span className='text-sm text-gray-700'>{supplier}</span></p>
                                <p className='font-bold text-gray-900 pl-3'>Description: <span className='text-sm text-gray-700'>{description}</span></p>
                                <div className='flex justify-center mt-3 mb-2'>
                                    <Link to={`/updateinventory/${_id}`} className='font-[roboto] text-md text-gray-900 font-bold bg-primary-color px-8 py-2 rounded-md'>UPDATE</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Inventory;