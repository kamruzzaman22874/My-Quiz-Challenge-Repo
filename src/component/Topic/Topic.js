import React from 'react';
import {useLoaderData} from 'react-router-dom'
const Topic = () => {
    const quiz = useLoaderData()
    console.log(quiz);
    return (
        <div>
          
        </div>
    );
};

export default Topic;