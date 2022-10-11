import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className='text-3xl bg-blue-900 lg:m-36 rounded-xl text-black-600 m-5'>
            <h2 className='py-4  lg:w-96 mx-auto  lg:px-[20px] px-[40px] mt-4 mb-4 lg:text-2xl text-xl text-white lg:animate-ping'>🚫This page is not found🚫</h2>
            <img className='lg:w-[400px] lg:ml-[270px] mx-auto text-white rounded-lg' src="https://miro.medium.com/max/1400/1*idpUphkU9dL5atdD3KbO3Q.png" alt="" />
            <Link className='lg:px-[350px] px-[75px] text-white ' to='/home'>Back To Home</Link>
        </div>
    );
};

export default ErrorElement;