import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from './Button';

const SignUp2 = () => {
    const navigate = useNavigate();
    const numNEmail = e => {
        e.preventDefault();
        navigate('/user/signup/step-3');
    }
    return (
        <div className='sm:w-11/12 mx-auto'>
            <h2 className='text-3xl font-semibold text-center pt-16 pb-24'>Sign Up Form</h2>
            <form className='flex flex-col items-center gap-12' onSubmit={numNEmail}>
                <div className='w-full flex items-center gap-3'>
                    <input className='w-16 border-b outline-none p-2' placeholder='+880' name="countryCode" type="number" required />
                    <input className='grow w-full border-b outline-none p-2' placeholder='1XXXXXXXXX' name="number" type="number" required />
                </div>
                <input className='w-full border-b outline-none p-2' placeholder='Write Email Address' name="email" type="email" required />
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
        </div>
    );
};

export default SignUp2;