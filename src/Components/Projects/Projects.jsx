import React from 'react';
import globeRoute from '../../assets/Projects/globe-route-travels-web-app-2022-12-10-23_00_22.png'
import eRootLearning from '../../assets/Projects/e-root-learning-web-app-2022-12-10-23_03_35.png'
import phonoShopia from '../../assets/Projects/phonoshopia-web-app-2022-12-10-23_02_33.png'

const Projects = () => {

    const projects = [
        {
          id: 1,
          src: phonoShopia,
          title: "PhonoShopia",
          url: 'https://phonoshopia.web.app/',
          style: "shadow-sky-500",
        },
        {
          id: 2,
          src: globeRoute,
          title: "Globe Route Travels",
          url: 'https://globe-route-travels.web.app/',
          style: "shadow-sky-500",
        },
        {
          id: 3,
          src: eRootLearning,
          title: "E-Root Learning",
          url: 'https://e-root-learning.web.app/',
          style: "shadow-sky-500",
        },
       
      ];

    return (
        <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Projects
          </p>
          <p className="py-6">These are the Projects I've done</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {projects.map(({ id, src, title, style , url}) => (
            <div
              key={id}
              className={`shadow-md pb-5 hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-40 h-40 mx-auto" />
              <p className="my-4">{title}</p>
              <a href={url} target='_blank' className='m-7  py-2 px-8 bg-blue-500 rounded'>Demo</a>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Projects;