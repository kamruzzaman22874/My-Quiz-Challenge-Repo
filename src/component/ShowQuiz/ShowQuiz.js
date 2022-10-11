import React from 'react';
import {Link} from 'react-router-dom';

const ShowQuiz = ({quiz ,loadQuiz}) => {
  console.log(loadQuiz);
    const {logo , name ,id} = quiz;
    return (
  <div className="card bg-base-100 shadow-xl lg:h-[600px] h-[500px] mb-2">
    <figure className='bg-slate-600'><img src= {logo} alt="Shoes" /></figure>
   <div className='flex'>
   <div className="card-body ">
    <h2 className="card-title ">
      Total Quiz : {loadQuiz.length}
    </h2>
    <p className='text-2xl font-bold py-4'>{name}</p>
   </div>
    <div className="card-actions justify-end py-16 px-4">
    <Link to={`/home/${id}`} className="btn btn-active text-sm btn-primary">Play Quiz <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
    </Link> 
    </div>
  </div>
</div>
    )
};

export default ShowQuiz;
