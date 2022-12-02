import React from 'react';
import { SpinnerCircularFixed } from 'spinners-react';

const Button = ({ children, loading, disabled }) => {
    return (
        <button className={`bg-[#1678CB] px-8 py-3 font-medium text-white rounded-2xl shadow-md border ${loading || disabled ? 'bg-white text-[#1676cb80] cursor-not-allowed border-[#1676cb80]' : 'hover:bg-white hover:text-[#1678CB] active:shadow-none border-[#1678CB]'}`} disabled={loading || disabled}>
            {loading ? <SpinnerCircularFixed size={24} thickness={120} speed={180} color="#1678CB" secondaryColor="rgba(0, 0, 0, 0.4)" /> : children}
        </button>
    );
};

export default Button;