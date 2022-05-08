import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth)
    const [userItems, setUserItems] = useState([]);
    const [isRefresh, setIsRefresh] = useState(false)

    useEffect(() => {
        axios.get(`https://grocery-store-warehouse.herokuapp.com/myItem?email=${user?.email}`, {
            headers: {
                authorization: `bearar ${localStorage.getItem('accessToken')}`
            }
        })
            .then((response => {
                setUserItems(response.data)
            }))
    }, [isRefresh])

    const handleDeleteItem = async (id) => {
        const confirm = window.confirm('Are You Sure.?')
        if (confirm) {
            const { data } = await axios.delete(`https://grocery-store-warehouse.herokuapp.com/removeItem/${id}`)
            if (data.acknowledged) {
                setIsRefresh(!isRefresh)
                toast.success('Successfully Item Deleted')
            }
        }
    }
    return (
        <div>
            <div>
                <Link to='/additem' className='flex items-center justify-center font-[roboto] font-bold text-lg bg-primary-color text-gray-700 w-8/12 sm:w-6/12 md:w-3/12  mx-auto mb-6 rounded-lg h-14 mt-7 cursor-pointer shadow-sm shadow-primary-color'>Add New Item</Link>
            </div>
            <div className='w-full h-[2px] bg-gray-700 mt-10'></div>
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
                                Supplier
                            </th>
                            <th scope="col" className="px-6 py-3 border-2">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 border-2">
                                Remove Item
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userItems.map(product => {
                                const { img, name, price, quantity, supplier, description, _id } = product;
                                let updateQuantity = quantity
                                if (quantity <= 0) {
                                    updateQuantity = <p className='text-red-600'>Sold</p>
                                }
                                return (
                                    <tr key={product._id} className="bg-white border-b hover:bg-gray-100">
                                        <th scope="row" className="px-6 py-4 font-[500] text-gray-900 dark:text-white whitespace-nowrap border-2">
                                            <img src={img} className='w-10 h-14 rounded-3xl' alt="" />
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-[500] text-gray-900 dark:text-white whitespace-nowrap border-2">
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

export default MyItem;