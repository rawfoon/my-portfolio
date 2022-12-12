import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className='sticky top-0 text-gray-200 bg-slate-500'>
            
            <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black'>
            <div>
        <Link to='/' className="text-5xl font-signature ml-2"> Code </Link>
      </div>
      <ul className="hidden md:flex">
            <li
             className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"
            > <Link to='/'>Home</Link></li>
            {/* <li> <Link to='/'>Experience</Link></li> */}
            <li
             className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"
            > <Link to='/blogs'>Blogs</Link></li>
            <li
             className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"
            > <Link to='/about'>About</Link></li>
            <li
             className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"
            > <a href='#experience'>exp</a></li>
      </ul>
            {/* this is Navigation
            <Link to='/'>Home</Link>
            <Link to='/project/1'>Project</Link>
            <Link to='/experience'>experience</Link> */}
            <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

            {
                nav &&
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                <li
                 className="px-4 cursor-pointer capitalize py-6 text-4xl"
                 onClick={()=> setNav(!nav)}
                > <Link to='/'>Home</Link></li>
                {/* <li> <Link to='/'>Experience</Link></li> */}
                <li
                 className="px-4 cursor-pointer capitalize py-6 text-4xl"
                 onClick={()=> setNav(!nav)}
                > <Link to='/blogs'>Blogs</Link></li>
                <li
                 className="px-4 cursor-pointer capitalize py-6 text-4xl"
                 onClick={()=> setNav(!nav)}
                > <Link to='/about'>About</Link></li>
          </ul>
            }
        </div>
        </div>
    );
};

export default Navigation;