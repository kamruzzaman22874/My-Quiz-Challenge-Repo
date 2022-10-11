import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics);
    const {logo , name , total} = topics.data
    // const quizName = topics.data.name
    // console.log(quizName);
    return (
        <div>
                <div className="card card-side bg-base-300 flex  shadow-xl lg:mx-14 mt-2">
                    <figure><img  className='lg:w-56' src={logo} alt="Movie"/></figure> 
                    <div className="card-body lg:ml-48 py-12">
                        <h2 className="card-title lg:text-3xl text-[17px] lg:px-[150px]"> Quiz Topic : {name}</h2>
                        <h2 className="card-title lg:text-2xl text-[16px] lg:px-48"> Total Quiz : {total}</h2>
                    </div>
                </div>
            {
                (topics.data.questions).map(topic=> <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;