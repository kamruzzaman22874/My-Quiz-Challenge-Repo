import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import ShowQuiz from '../ShowQuiz/ShowQuiz';

const Home = () => {
    const loadQuiz = useLoaderData();
    return (
        <div>
            <HeroSection></HeroSection>
            <div className='grid lg:grid-cols-2 mx-5 my-10 gap-5 rounded-lg'>
            
            {
                (loadQuiz.data).map(quiz=> <ShowQuiz 
                    key={quiz.id} 
                    quiz={quiz} 
                    loadQuiz={loadQuiz}
                ></ShowQuiz> )
            }
            </div>
        </div>
        
    );
};

export default Home;