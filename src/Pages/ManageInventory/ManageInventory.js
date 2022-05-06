import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageInventory = () => {
    const [AllProducts, setAllProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then((response) => {
                setAllProducts(response.data)
            });
    }, [AllProducts])
    const handleDeleteItem = async (id) => {
        const { data } = await axios.delete(`http://localhost:5000/removeItem/${id}`)
        if (data.acknowledged) {
            toast.success('Successfully Item Deleted')
        }

    }

    return (
        <div>
            <div>
                <Link to='/additem' className='flex items-center justify-center font-[roboto] font-bold text-lg bg-primary-color text-gray-700 w-8/12 sm:w-6/12 md:w-3/12  mx-auto mb-6 rounded-3xl h-16 mt-7 cursor-pointer shadow-sm shadow-primary-color'>Add New Item</Link>
            </div>
            <div className='w-full h-[2px] bg-gray-700 mt-10'></div>
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
                                Update Item
                            </th>
                            <th scope="col" className="px-6 py-3 border-2">
                                Remove Item
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AllProducts.map(product => {
                                const { name, price, quantity, supplier, description, _id } = product;
                                return (
                                    <tr key={product._id} className="bg-white border-b hover:bg-gray-100">
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
                                        <td className="px-6 py-4 text-right border-2">
                                            <Link to={`/updateinventory/${_id}`} className=' font-bold py-2 px-7 bg-primary-color rounded-3xl cursor-pointer shadow-sm shadow-primary-color text-gray-800'>Update</Link>
                                        </td>
                                        <td className="px-6 py-4 text-right border-2">
                                            <button onClick={() => handleDeleteItem(_id)} className=' font-bold py-2 px-7 bg-primary-color rounded-3xl cursor-pointer shadow-sm shadow-primary-color text-red-600'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageInventory;