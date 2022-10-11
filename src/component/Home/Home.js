import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import ShowQuiz from '../ShowQuiz/ShowQuiz';

const Home = () => {
    const loadQuiz = useLoaderData();
    return (
        <div>
            <HeroSection></HeroSection>
            <div className='grid lg:grid-cols-2 gap-6 lg:py-6 lg:px-36  bg-purple-300'>
            
            {
                (loadQuiz.data).map(quiz=> <ShowQuiz key={quiz.id} quiz={quiz} loadQuiz={loadQuiz}></ShowQuiz> )
            }
        </div>
        </div>
        
    );
};

export default Home;