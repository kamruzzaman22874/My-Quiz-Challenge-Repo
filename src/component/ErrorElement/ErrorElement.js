import React from 'react';

const ErrorElement = () => {
    return (
        <div className='text-5xl bg-blue-400 lg:m-36 rounded-xl text-black-600 animate-bounce  lg:mt-32'>
            <h2 className='py-6'>This page is not found !!!</h2>
            <img className='w-96 mx-auto' src="https://miro.medium.com/max/1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png" alt="" />
        </div>
    );
};

export default ErrorElement;