import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart,Bar, ResponsiveContainer, XAxis,YAxis,Tooltip } from 'recharts';

const Statistics = () => {
    const findRechart = useLoaderData();
    const{data} = findRechart
    return (
        <div className='text-center'>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart width={500} height={100} data={data}>
                    <Bar dataKey="total" fill="" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </BarChart>

            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;