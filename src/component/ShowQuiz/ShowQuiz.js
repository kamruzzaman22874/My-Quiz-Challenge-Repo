import React from 'react';
import {Link} from 'react-router-dom';

const ShowQuiz = ({quiz ,loadQuiz}) => {
  console.log(loadQuiz);
    const {logo , name ,id,total} = quiz;
    return (
  <div className="card bg-base-100 shadow-xl p-4 mt-2 h-[90%] ">
    <figure className='bg-slate-600 w-50 mx-auto rounded-lg '><img className='w-[50%] ' src= {logo} alt="logo" /></figure>
   <div className='flex'>
   <div className="card-body">
    <h2 className="card-title font-bold text-xl">
       {name}
    </h2>
    <p className='lg:text-xl font-bold lg:py-2 sm:py-4'>Total Quiz :{total}</p>
   </div>
    <div className="card-actions justify-end lg:py-16 py-8 px-4">
    <Link to={`/home/${id}`} className="btn btn-active text-sm btn-info font-bold text-white">Play Quiz <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
    </Link> 
    </div>
  </div>
</div>
    )
};

export default ShowQuiz;
