import React from 'react';

const Topic = ({topic}) => {
    const {question , options , correctAnswer} = topic;
    return (
        <div>
            <div>
            <h2>{question}</h2>
            </div>
            <p>{options}</p>
            <h2>{correctAnswer}</h2>
        </div>
    );
};

export default Topic;