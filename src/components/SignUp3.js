import React, { useContext, useEffect, useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import Button from './Button';
import { RegContext } from './RegLayout';

const SignUp3 = () => {
    const { userInfo, setInfo } = useContext(RegContext);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (ready) {
            console.log(userInfo);
        }
    }, [ready, userInfo])

    const handleSubmit = e => {
        e.preventDefault();
        const password = e.target.password.value;
        setInfo({ name: 'password', value: password });
        setReady(true);
    }

    return (
        !userInfo.first_name || !userInfo.last_Name || !userInfo.phone_number || !userInfo.email ? <Navigate to="/user/signup/step-1" /> :
            <div className='sm:w-11/12 mx-auto'>
                <h2 className='text-3xl font-semibold text-center pt-16 pb-24'>Sign Up Form</h2>
                <form className='flex flex-col items-center gap-12' onSubmit={handleSubmit}>
                    <div className='w-full'>
                        <input className='w-full border-b outline-none p-2' placeholder='Password' type="password" name="password" required />
                        <p className='text-[#7E7E7E] text-sm mt-1'>Your password must be 8 characters.</p>
                    </div>
                    <div className='w-full flex justify-between items-center sm:px-3'>
                        <NavLink className='text-[#7E7E7E] text-sm font-semibold' to='/user/signup/step-2'>Back</NavLink>
                        <Button> Sign Up </Button>
                    </div>
                </form>
            </div>
    );
};

export default SignUp3;