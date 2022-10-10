import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className='text-5xl bg-blue-400 lg:m-36 rounded-xl text-black-600  lg:mt-32'>
            <h2 className='py-6'>This page is not found !!!</h2>
            <img className='w-96 mx-auto' src="https://miro.medium.com/max/1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png" alt="" />
            <Link className='text-green-200 m-4' to='/home'>Back To Home</Link>
        </div>
    );
};

export default ErrorElement;