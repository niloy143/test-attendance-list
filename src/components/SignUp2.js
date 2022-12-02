import React, { useContext } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import Button from './Button';
import { RegContext } from './RegLayout';

const SignUp2 = () => {
    useTitle('Sign Up (Step-2)');
    const { userInfo, setInfo } = useContext(RegContext);
    const navigate = useNavigate();

    const numNEmail = e => {
        e.preventDefault();
        setInfo({ name: 'phone_number', value: e.target.countryCode.value + ' ' + e.target.number.value })
        setInfo({ name: 'email', value: e.target.email.value })
        navigate('/user/signup/step-3');
    }

    return (
        !userInfo.first_name || !userInfo.last_Name ? <Navigate to="/user/signup/step-1" /> :
            < div className='sm:w-11/12 mx-auto' >
                <h2 className='text-3xl font-semibold text-center pt-16 pb-24'>Sign Up Form</h2>
                <form className='flex flex-col items-center gap-12' onSubmit={numNEmail}>
                    <div className='w-full flex items-center gap-3'>
                        <input className='w-16  border-0 focus:ring-0 border-b-2 border-b-[#A4A4A4] focus:border-b-[#000000] p-2' defaultValue={userInfo.phone_number?.split(' ')[0]} placeholder='+880' name="countryCode" type="number" required />
                        <input className='grow w-full  border-0 focus:ring-0 border-b-2 border-b-[#A4A4A4] focus:border-b-[#000000] p-2' defaultValue={userInfo.phone_number?.split(' ')[1]} placeholder='1XXXXXXXXX' name="number" type="number" required />
                    </div>
                    <input className='w-full  border-0 focus:ring-0 border-b-2 border-b-[#A4A4A4] focus:border-b-[#000000] p-2' defaultValue={userInfo.email} placeholder='Write Email Address' name="email" type="email" required />
                    <div className='w-full flex justify-between items-center sm:px-3'>
                        <NavLink className='text-[#7E7E7E] text-sm font-semibold' to='/user/signup/step-1'>Back</NavLink>
                        <Button>
                            <span className='inline-flex items-center gap-2'>
                                <span>Next Step</span>
                                <HiArrowRight className='text-lg' />
                            </span>
                        </Button>
                    </div>
                </form>
            </div >
    );
};

export default SignUp2;