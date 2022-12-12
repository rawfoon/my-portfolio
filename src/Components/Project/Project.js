import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    // console.log(project);
    const { id, src, title, style , url} = project
    return (
        <div
          
              className={`shadow-md pb-5 hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-40 h-40 mx-auto" />
              <p className="my-4">{title}</p>
             <div className='flex justify-center '>
             <a href={url} target='_blank' className='my-7 mx-1  py-2 px-8 bg-blue-500 rounded'>Live</a>
              <Link to={`/project/${title}`} className='my-7  py-2 px-8 bg-blue-500 rounded' >Explore</Link>
             </div>
            </div>
    );
};

export default Project;