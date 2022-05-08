import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateInventory = () => {
    const [product, setProduct] = useState({})
    const [isRefresh, setIsRefresh] = useState(false)
    const { id } = useParams()
    const { img, name, price, quantity, supplier, description } = product;
    let updateQuantity = quantity
    if (quantity <= 0) {
        updateQuantity = <><span className='text-red-600'>Sold</span></>
    }
    useEffect(() => {
        axios.get(`http://localhost:5000/product/${id}`)
            .then((response) => {
                setProduct(response.data)
            })
    }, [isRefresh])

    const handleUpdateInventory = async (e) => {
        e.preventDefault();
        const quantityValue = e.target.quantity.value;
        if (quantityValue > 0) {
            const totalQuantity = parseInt(quantityValue) + quantity;
            const stockQauntity = { quantity: totalQuantity }
            const { data } = await axios.put(`http://localhost:5000/updateproduct/${id}`, stockQauntity)
            if (data.modifiedCount) {
                e.target.reset()
                setIsRefresh(!isRefresh)
                toast.success('Successfully Added Stock')
            }
        }
    }
    const handleDeliverdBTN = async (e) => {
        if (!quantity <= 0) {
            const deliverdProduct = quantity - 1;
            const updateStock = { quantity: deliverdProduct }
            const { data } = await axios.put(`http://localhost:5000/updateproduct/${id}`, updateStock)
            if (data.modifiedCount) {
                setIsRefresh(!isRefresh)
                toast.success('Successfully Deliverd Product')
            }
        } else {
            toast.warning('Your Stock is Empty')
        }
    }

    return (
        <div>
            <div>
                <Link to='/manageinventory' className='flex items-center justify-center font-[roboto] font-bold text-lg bg-primary-color text-gray-700 w-8/12 sm:w-6/12 md:w-3/12  mx-auto mb-6 rounded-lg h-14 mt-7 cursor-pointer shadow-sm shadow-primary-color'>Manage All Inventory</Link>
            </div>
            <div className='w-full h-[2px] bg-gray-700 mt-10'></div>
            <div className='w-8/12 sm:w-6/12 md:w-4/12 mx-auto my-12'>
                <form onSubmit={handleUpdateInventory}>
                    <input type="number" name='quantity' className='w-full bg-[#ffffff] outline-none rounded-lg h-14 px-4 font-bold shadow-sm shadow-white' id='number' placeholder='Enter Quantity' required />
                    <input type="submit" value="Update Stock" className='flex items-center justify-center font-[roboto] font-bold text-lg bg-primary-color text-gray-700 w-full mb-6 rounded-lg h-14 mt-5 cursor-pointer shadow-sm shadow-primary-color' />
                </form>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-40">
                <table className="w-full text-sm text-left text-gray-500 border-t-2 border-gray-900">
                    <thead className="text-xs text-gray-700 uppercase bg-primary-color dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 border-2">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3 border-2">
                                Product Name
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
                        <tr className="bg-white border-b hover:bg-gray-100 ">
                            <th scope="row" className="px-6 py-4 font-[500] text-gray-900 dark:text-white whitespace-nowrap border-2">
                                <img src={img} className='w-10 h-14 rounded-3xl' alt="" />
                            </th>
                            <th scope="row" className="px-6 py-4 font-[500] text-gray-900  whitespace-nowrap border-2">
                                {name}
                            </th>
                            <td className="px-6 py-4 text-gray-900 font-[500] border-2">
                                ${price}
                            </td>
                            <td className="px-6 py-4 text-gray-900 font-[500] border-2">
                                {updateQuantity}
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