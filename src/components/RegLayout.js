import { createContext, useReducer } from 'react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import cover from '../assets/cover.jpg';
import logo from '../assets/logo.png';

export const RegContext = createContext({});

const RegLayout = () => {
    const infoManager = (userInfo, { name, value }) => {
        return { ...userInfo, [name]: value };
    }

    const [userInfo, setInfo] = useReducer(infoManager, {
        first_name: "",
        last_Name: "",
        phone_number: "",
        email: "",
        password: "",
    });

    return (
        <div className='flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto font-[inter] px-3 py-5'>
            <div>
                <img className='pl-5 w-[160px] sm:w-auto' src={logo} alt="" />
                <img className='max-w-full' src={cover} alt="" />
            </div>
            <div className='w-full shadow-lg border rounded-xl p-5 sm:w-[520px] h-[600px]'>
                <RegContext.Provider value={{ userInfo, setInfo }}>
                    <Outlet />
                </RegContext.Provider>
            </div>
        </div>
    );
};

export default RegLayout;