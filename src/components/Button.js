import React from 'react';

const Button = ({ children }) => {
    return (
        <button className='bg-[#1678CB] px-8 py-3 font-medium text-white rounded-2xl shadow-md hover:bg-white hover:text-[#1678CB] border border-[#1678CB] active:shadow-none'>
            {children}
        </button>
    );
};

export default Button;