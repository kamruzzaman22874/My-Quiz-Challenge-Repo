import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-slate-500 lg:px-12">
      <div className="flex-1">
        <p className="normal-case mr-3 lg:text-2xl font-bold">Challenging Quiz</p>
      </div>
      <div className="flex-none ml-3 lg:text-2xl font-bold text-gray-400">
       <Link className="mr-4 hover:text-lime-400" to='home'>Home</Link>
       <Link className="mr-4 hover:text-lime-400" to='about'>About</Link>
       <Link className="lg:mr-4 hover:text-lime-400" to='blog'>Blog</Link>
      </div>
    </div>
  );
};

export default Header;
