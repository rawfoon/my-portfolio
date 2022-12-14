import React from 'react';
import code1 from '../../assets/image/code.jpg'

const AboutMe = () => {
    return (
        <div
        name='about' 
        className='bg-gradient-to-b from-black to-gray-800 py-10 '>
           <div className='container mx-auto mt-4'>
           <h1 className=' text-center text-6xl text-slate-200'>About Me</h1>
            {/* <hr /> */}
            <div className='flex '>
            <div className='p-20 hidden md:block w-1/2'>
                <img src={code1} alt="" />

            </div>
            <div className='text-white p-5 md:w-1/2 flex flex-col justify-center  '>
                <h1 className='text-5xl'> I'm a Full Stack Web Developer</h1>
                <br />
                <h1 className='text-2xl'>I'm from Bangladesh. I have completed many projects on web development. I am a MERN stack developer. 
                </h1>
                

            </div>
            </div>
           </div>
            
        </div>
    );
};

export default AboutMe;