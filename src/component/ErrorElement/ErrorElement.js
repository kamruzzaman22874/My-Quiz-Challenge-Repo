import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className='text-2xl bg-blue-500 lg:m-36 rounded-xl text-black-600 '>
            <h2 className='py-6 w-96 mx-auto lg:text-3xl text-red-300'>This page is not found !!!</h2>
            <img className='w-96 mx-auto' src="https://miro.medium.com/max/1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png" alt="" />
            <Link className='lg:px-[300px] text-green-900 ' to='/home'>Back To Home</Link>
        </div>
    );
};

export default ErrorElement;