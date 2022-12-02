import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import Button from './Button';
import { RegContext } from './RegLayout';
import useTitle from '../hooks/useTitle';

const SignUp = () => {
    useTitle('Sign Up (Step-1)');
    const { userInfo: { first_name, last_Name }, setInfo } = useContext(RegContext);
    const navigate = useNavigate();

    const firstNLastName = e => {
        e.preventDefault();
        setInfo({ name: 'first_name', value: e.target.firstName.value });
        setInfo({ name: 'last_Name', value: e.target.lastName.value });
        navigate('/user/signup/step-2');
    }

    return (
        <div className='sm:w-11/12 mx-auto'>
            <h2 className='text-3xl font-semibold text-center pt-16 pb-24'>Sign Up Form</h2>
            <form className='flex flex-col items-center gap-12' onSubmit={firstNLastName}>
                <input className='w-full  border-0 focus:ring-0 border-b-2 border-b-[#A4A4A4] focus:border-b-[#000000] p-2' defaultValue={first_name} placeholder='Write First Name' name="firstName" type="text" required />
                <input className='w-full  border-0 focus:ring-0 border-b-2 border-b-[#A4A4A4] focus:border-b-[#000000] p-2' defaultValue={last_Name} placeholder='Write Last Name' name="lastName" type="text" required />
                <Button>
                    <span className='inline-flex items-center gap-2'>
                        <span>Next Step</span>
                        <HiArrowRight className='text-lg' />
                    </span>
                </Button>
            </form>
            <div className='flex items-center justify-end gap-2 sm:gap-5 mt-16'>
                <p className='text-[#7E7E7E] text-sm'>Already have an account? </p>
                <NavLink className="text-end text-[#1678CB] underline hover:no-underline font-semibold uppercase" to="/user/login">Login Here!</NavLink>
            </div>
        </div>
    );
};

export default SignUp;