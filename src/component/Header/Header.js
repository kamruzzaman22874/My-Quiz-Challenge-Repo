import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-slate-500 lg:px-12">
      <div className="flex-1">
        <p className="normal-case  lg:text-2xl font-bold text-slate-100 lg:px-24">Challenging Quiz</p>
      </div>
      <div className="flex-none ml-3 lg:px-[210px] lg:text-2xl font-bold text-gray-400">
       <Link className="mr-4 hover:text-lime-200" to='home'>Home</Link>
       <Link className="mr-4 hover:text-lime-200" to='topic'>Topics</Link>
       <Link className="lg:mr-4 hover:text-lime-200" to='blog'>Blog</Link>
      </div>
    </div>
  );
};

export default Header;
