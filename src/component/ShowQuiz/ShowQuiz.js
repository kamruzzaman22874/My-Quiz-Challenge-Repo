import React from 'react';
import {Link} from 'react-router-dom';

const ShowQuiz = ({quiz ,loadQuiz}) => {
  console.log(loadQuiz);
    const {logo , name ,id} = quiz;
    return (
      <div className="card bg-base-100 shadow-xl">
  <figure className='bg-slate-600'><img src= {logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Total Quiz : {loadQuiz.length}
    </h2>
    <p>{name}</p>
    <div className="card-actions justify-end">
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



//  <div className='lg:w-[200px] w-[80%] mx-auto  rounded-xl bg-lime-200 my-4 lg:ml-24 sm:ml-6'>
//           <img className='w-[100%]' src={logo} alt="" />
//             <div className='flex justify-between bg-lime-700 rounded-xl  lg:rounded-xl'>
//               <p className='lg:text-sm py-3 px-1 font-bold text-white'>{name}</p>
              
//             </div>
//         </div> 