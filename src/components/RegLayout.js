import React from 'react';
import { Outlet } from 'react-router-dom';

const RegLayout = () => {
    return (
        <div>
            this is layout
            <Outlet />
        </div>
    );
};

export default RegLayout;