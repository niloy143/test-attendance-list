import React, { useContext } from 'react';
import { RegContext } from '../App';

const SignUp = () => {
    const { user } = useContext(RegContext);
    console.log(user)
    return (
        <div>
            this is signup 1
        </div>
    );
};

export default SignUp;