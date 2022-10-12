import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-slate-200 lg:px-12">
      <div className="flex-1">
        <p className="normal-case  lg:text-2xl text-xl font-bold  lg:text-green-500 lg:px-24  text-blue-600">CHALLENGING QUIZ</p>
      </div>
      <div className="flex-none ml-3 lg:px-[210px] lg:text-2xl font-bold ">
       <Link className="mr-4 hover:text-green-500" to='/home'>Home</Link>
       <Link className="mr-4 hover:text-green-500" to='/statistics'>Statistics</Link>
       <Link className="lg:mr-4 hover:text-green-500" to='/blog'>Blog</Link>
      </div>
    </div>
  );
};

export default Header;
