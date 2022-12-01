import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length >= 8) {
            fetch(`https://test.nexisltd.com/login`, {
                method: 'POST',
                body: JSON.stringify({ email, password })
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }
    return (
        <div className='sm:w-11/12 mx-auto'>
            <h2 className='text-3xl font-semibold text-center pt-16 pb-24'>Log In Form</h2>
            <form className='flex flex-col items-center gap-12' onSubmit={handleLogin}>
                <input className='w-full border-b outline-none p-2' placeholder='Write Email Address' name="email" type="email" required />
                <div className='w-full'>
                    <input className='w-full border-b outline-none p-2' placeholder='Password' name="password" type="password" required />
                    <p className='text-[#7E7E7E] text-sm mt-1'>Your password must be 8 characters.</p>
                </div>
                <Button>Log In</Button>
            </form>
            <div className='flex items-center justify-end gap-2 sm:gap-5 mt-16'>
                <p className='text-[#7E7E7E] text-sm'>Don't have an account? </p>
                <NavLink className="text-end text-[#1678CB] underline hover:no-underline font-semibold uppercase" to="/user/signup/step-1">Sign Up Here!</NavLink>
            </div>
        </div>
    );
};

export default Login;