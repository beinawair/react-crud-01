import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DEL_USR, INFO_USR } from '../config/const';
import { Link, useNavigate } from 'react-router-dom';

const UserList = () => {
    const [user, setUser] = useState([]);

    const getUser = async() => {
        const res = await axios.get(INFO_USR);
        setUser(res.data);
    }

    const deleteUser = async(id) => {
        try {
            await axios.delete(DEL_USR(id));
            getUser();
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUser();
    }, [])

  return (
    <div className="container mt-5 flex items-center justify-center h-100 w-full">
        <div className="w-100 flex justify-center items-center flex-col">
            <Link to={`/add`} className='px-6 py-2 bg-emerald-500 text-white rounded max-w-xs text-center hover:bg-green-600'>
                <button>Add New User</button>
            </Link>
            <table className="mt-12 min-w-full">
                <thead className="border-b">
                    <tr>
                        <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>No.</th>
                        <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Name</th>
                        <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Email</th>
                        <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Gender</th>
                        <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Action</th>
                    </tr>
                </thead>
                <tbody className='pt-2'>
                    {user?.map((item, index) => (
                        <tr key={index}>
                            <td className='px-8 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{index + 1}</td>
                            <td className='text-sm text-gray-900 font-light px-8 py-4 whitespace-nowrap'>{item.name}</td>
                            <td className='text-sm text-gray-900 font-light px-8 py-4 whitespace-nowrap'>{item.email}</td>
                            <td className='text-sm text-gray-900 font-light px-8 py-4 whitespace-nowrap'>{item.gender}</td>
                            <td className='flex gap-2 px-8 py-4'>
                                <Link to={`edit/${item.id}`}>
                                    <button className='bg-indigo-500 hover:bg-blue-700 text-white py-1 px-4 rounded'>Edit</button>
                                </Link>
                                <button onClick={() => deleteUser(item.id)} className='bg-violet-400 hover:bg-orange-400 text-white py-1 px-4 rounded'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList