import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuiz from '../ShowQuiz/ShowQuiz';

const Home = () => {
    const loadQuiz = useLoaderData();
    console.log(loadQuiz);
    return (
        <div className='grid lg:grid-cols-2 gap-6 lg:py-6 lg:px-36  bg-blue-300'>
            {
                (loadQuiz.data).map(quiz=> <ShowQuiz key={quiz.id} quiz={quiz}></ShowQuiz> )
            }
        </div>
    );
};

export default Home;