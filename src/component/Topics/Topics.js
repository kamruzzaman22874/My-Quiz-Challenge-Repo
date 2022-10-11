import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    const quizName = topics.data.name
    return (
        <div>
            <h1 className='lg:mx-96'>{quizName}</h1>
            {
                (topics.data.questions).map(topic=> <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;