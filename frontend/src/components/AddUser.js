import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { INFO_USR } from '../config/const';

const AddUser = () => {
    const [emailUser, setEmailUser] = useState('');
    const [nameUser, setNameUser] = useState('');
    const [genderUser, setGenderUser] = useState('Male');

    const navigate = useNavigate();
    console.log(INFO_USR);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post(INFO_USR, {
                name: nameUser,
                email: emailUser,
                gender: genderUser
            });
            navigate("/");
        } catch(err) {
            console.log(err)
        }

    }

  return (
    <div className="container mt-10 flex justify-center mx-auto">
        <div className="w-full px-44">
            <h2 className='text-2xl text-gray-600 text-center mb-10 uppercase font-bold'>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Name
                        </label>
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-w00 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                            id="grid-first-name" 
                            type="text" 
                            value={nameUser}
                            onChange={(e) => setNameUser(e.target.value)}
                            placeholder="Jane" />
                        <p className="text-red-500 text-xs italic hidden warning-text">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Gender
                        </label>
                        <div className="relative">
                            <select 
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-state"
                                value={genderUser}
                                onChange={(e) => setGenderUser(e.target.value)}
                            >
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        <p className="text-red-500 text-xs italic hidden warning-text">Please fill out this field.</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Email
                        </label>
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-password" 
                            type="email" 
                            value={emailUser}
                            onChange={(e) => setEmailUser(e.target.value)}
                            placeholder="bei@example.com" />
                        <p className="text-red-500 text-xs hidden italic warning-text">Please fill out this field.</p>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-2/3">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded" type="submit">
                            Add User
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddUser