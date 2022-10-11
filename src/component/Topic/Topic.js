import React from "react";
import Option from "../Option/Option";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Topic = ({ topic }) => {
  const { question, options, correctAnswer } = topic;
  const handleUseAns = (option) => {
    const answer = option;
    if (answer === correctAnswer) {
      toast.success("Yes It's Correct Answer", { autoClose: 500 });
    } else {
      toast.warning("Oh!! Shit It's Wrong Answer", { autoClose: 500 });
    }
  };

  const showCorrectAnswer =()=>{
    Swal.fire({
      text: `${correctAnswer}`,
      confirmButtonText: 'Correct Answer',
    })
  }
  
  return (
    <div className="w-11/12 mx-auto shadow-lg rounded-md p-3 my-5 border-2 border-blue-500 ">
    <div className="flex align-middle justify-between">
      <h3 className="bg-white">{question.slice(3, question.length - 4)}</h3>

      <button onClick={()=>showCorrectAnswer()} className="btn btn-outline">
        
        <svg  
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg></button>

    </div>

      {options.map((option, idx) => (
        <Option key={idx} option={option} handleUseAns={handleUseAns}></Option>
      ))}
    </div>
  );
};

export default Topic;
