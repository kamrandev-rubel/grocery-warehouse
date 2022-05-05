import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateInventory = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const { name, price, quantity, supplier, description } = product;
    useEffect(() => {
        axios.get(`http://localhost:5000/product/${id}`)
            .then((response) => {
                setProduct(response.data)
            })
    }, [])
    return (
        <div>
            <div>
                <button className='flex items-center justify-center font-[roboto] font-bold text-lg bg-primary-color text-gray-700 w-3/12 mx-auto mb-6 rounded-3xl h-16 mt-5 cursor-pointer shadow-sm shadow-primary-color'>Manage Inventory</button>
            </div>
            <div className='w-full h-[2px] bg-gray-700 mt-10'></div>
            <div className='w-5/12 mx-auto my-12'>
                <form>
                    <input type="number" name='number' className='w-full bg-[#ffffff] outline-none rounded-2xl h-16 px-4 font-bold shadow-sm shadow-white' id='number' placeholder='Enter Quantity' required />
                    <input type="submit" value="Update Stock" className='flex items-center justify-center font-[roboto] font-bold text-lg bg-primary-color text-gray-700 w-full mb-6 rounded-3xl h-16 mt-5 cursor-pointer shadow-sm shadow-primary-color' />
                </form>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-40">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-t-2 border-gray-900">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Supplier
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b ">
                            <th scope="row" className="px-6 py-4 font-[500] text-gray-900 dark:text-white whitespace-nowrap">
                                {name}
                            </th>
                            <td className="px-6 py-4 text-gray-900 font-[500]">
                                {price}
                            </td>
                            <td className="px-6 py-4 text-gray-900 font-[500]">
                                {quantity}
                            </td>
                            <td className="px-6 py-4 text-gray-900 font-[500]">
                                {supplier}
                            </td>
                            <td className="px-6 py-4 text-gray-900 font-[500]">
                                {description}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className='font-[roboto] font-bold py-2 px-7 bg-primary-color text-gray-900 text-lg rounded-3xl cursor-pointer shadow-sm shadow-primary-color'>Deliverd</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UpdateInventory;