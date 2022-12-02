import React, { useContext, useState } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import Button from './Button';
import { RegContext } from './RegLayout';

const SignUp3 = () => {
    const navigate = useNavigate();
    const { userInfo, setInfo, signUp, logIn } = useContext(RegContext);
    const [signing, setSigning] = useState(false);
    const [error, setError] = useState('');

    const handleSignUp = e => {
        e.preventDefault();
        setError('');
        setSigning(true);
        signUp().then(res => res.json()).then(({ sucess, error }) => {
            if (sucess) {
                logIn(userInfo.email, userInfo.password)
                    .then(res => res.json())
                    .then(tokenInfo => {
                        localStorage.setItem('user-tokens', JSON.stringify(tokenInfo));
                        navigate('/attendance-list');
                    })
                    .catch(err => console.error(err))
                    .finally(() => setSigning(false))
            }
            else if (error) {
                setError(error);
                setSigning(false);
            }
        })
    }

    return (
        !userInfo.phone_number || !userInfo.email ? <Navigate to="/user/signup/step-2" /> :
            <div className='sm:w-11/12 mx-auto'>
                <h2 className='text-3xl font-semibold text-center pt-16 pb-24'>Sign Up Form</h2>
                <form className='flex flex-col items-center gap-12' onSubmit={handleSignUp}>
                    <div className='w-full'>
                        <input className='w-full  border-0 focus:ring-0 border-b-2 border-b-[#A4A4A4] focus:border-b-[#000000] p-2' defaultValue={userInfo.password} placeholder='Password' type="password" name="password" onChange={e => setInfo({ name: 'password', value: e.target.value })} required />
                        <p className='text-[#7E7E7E] text-sm mt-1'>Your password must be 8 characters.</p>
                    </div>
                    <div className='w-full'>
                        <div className='w-full flex justify-between items-center sm:px-3'>
                            <NavLink className='text-[#7E7E7E] text-sm font-semibold' to='/user/signup/step-2'>Back</NavLink>
                            <Button disabled={userInfo.password?.length < 8} loading={signing}> Sign Up </Button>
                        </div>
                        <p className='text-red-500 my-2 text-sm text-end'>{error}</p>
                    </div>
                </form>
            </div>
    );
};

export default SignUp3;