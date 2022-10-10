import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='text-3xl font-bold'>
            <h3>Hello BD : {products.length}</h3>
        </div>
    );
};

export default Product;