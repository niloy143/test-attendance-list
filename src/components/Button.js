import React from 'react';
import { SpinnerCircularFixed } from 'spinners-react';

const Button = ({ children, loading }) => {
    return (
        <button className={`bg-[#1678CB] px-8 py-3 font-medium text-white rounded-2xl shadow-md ${loading ? 'bg-white text-[#1678CB]' : 'hover:bg-white hover:text-[#1678CB] active:shadow-none'} border border-[#1678CB]`} disabled={loading}>
            {loading ? <SpinnerCircularFixed size={24} thickness={120} speed={180} color="#1678CB" secondaryColor="rgba(0, 0, 0, 0.4)" /> : children}
        </button>
    );
};

export default Button;