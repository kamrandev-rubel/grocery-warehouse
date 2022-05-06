import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateInventory = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const { name, price, quantity, supplier, description } = product;
    useEffect(() => {
        axios.get(`http://localhost:5000/product/${id}`)
            .then((response) => {
                setProduct(response.data)
            })
    }, [product])

    const handleUpdateInventory = async (e) => {
        e.preventDefault();
        const quantityValue = e.target.quantity.value;
        const totalQuantity = parseInt(quantityValue) + quantity;
        const stockQauntity = { quantity: totalQuantity }
        const { data } = await axios.put(`http://localhost:5000/updateproduct/${id}`, stockQauntity)
        if (data.modifiedCount) {
            toast('Successfully Stock Updated')
        }
    }
    const handleDeliverdBTN = async () => {
        const deliverdProduct = quantity - 1;
        const updateStock = { quantity: deliverdProduct }
        const { data } = await axios.put(`http://localhost:5000/updateproduct/${id}`, updateStock)
        if (data.modifiedCount) {
            toast('Successfully Deliverd Product')
        }
    }

    return (
        <div>
            <div>
                <Link to='/manageinventory' className='flex items-center justify-center font-[roboto] font-bold text-lg bg-primary-color text-gray-700 w-8/12 sm:w-6/12 md:w-3/12  mx-auto mb-6 rounded-3xl h-16 mt-7 cursor-pointer shadow-sm shadow-primary-color'>Manage All Inventory</Link>
            </div>
            <div className='w-full h-[2px] bg-gray-700 mt-10'></div>
            <div className='w-8/12 sm:w-6/12 md:w-4/12 mx-auto my-12'>
                <form onSubmit={handleUpdateInventory}>
                    <input type="number" name='quantity' className='w-full bg-[#ffffff] outline-none rounded-2xl h-16 px-4 font-bold shadow-sm shadow-white' id='number' placeholder='Enter Quantity' required />
                    <input type="submit" value="Update Stock" className='flex items-center justify-center font-[roboto] font-bold text-lg bg-primary-color text-gray-700 w-full mb-6 rounded-3xl h-16 mt-5 cursor-pointer shadow-sm shadow-primary-color' />
                </form>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-40">
                <table className="w-full text-sm text-left text-gray-500 border-t-2 border-gray-900">
                    <thead className="text-xs text-gray-700 uppercase bg-primary-color dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 border-2">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3 border-2">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 border-2">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3 border-2">
                                Supplier Name
                            </th>
                            <th scope="col" className="px-6 py-3 border-2">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 border-2">
                                <span className="sr-only">Delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b ">
                            <th scope="row" className="px-6 py-4 font-[500] text-gray-900 dark:text-white whitespace-nowrap border-2">
                                {name}
                            </th>
                            <td className="px-6 py-4 text-gray-900 font-[500] border-2">
                                {price}
                            </td>
                            <td className="px-6 py-4 text-gray-900 font-[500] border-2">
                                {quantity}
                            </td>
                            <td className="px-6 py-4 text-gray-900 font-[500] border-2">
                                {supplier}
                            </td>
                            <td className="px-6 py-4 text-gray-900 font-[500] border-2">
                                {description}
                            </td>
                            <td onClick={handleDeliverdBTN} className="px-6 py-4 text-right">
                                <button className=' font-bold py-2 px-7 bg-primary-color text-gray-800 rounded-3xl cursor-pointer shadow-sm shadow-primary-color'>Deliverd</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UpdateInventory;