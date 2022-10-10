import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics);
    
    return (
        <div>
            {
                (topics.data.questions).map(topic=> <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;