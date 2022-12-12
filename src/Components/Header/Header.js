import React from 'react';
import bannerImg from '../../assets/image/rawfoon-corp-removebg.png'
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <div 
        name='header'
        className='bg-black px-6 lg:px-[10%] flex flex-col-reverse md:flex-row items-center justify-center'>
            <div className='text-white'>
                <h1 className=' text-xl md:text-3xl lg:text-5xl'>Muctasina Golam Rawfoon</h1>
                <p className=' text-xs md:text-2xl lg:text-3xl'>
                <Typewriter
  options={{
    strings: ['Web Developer', 'MERN Stack Developer','Front-End Developer', 'Back-End Developer', 'Loves problem solving and coding...'],
    autoStart: true,
    loop: true,
  }}
/>
                </p>
                <div className='pt-10 flex  '>
                <a href='https://www.linkedin.com/in/muctasina-golam-rawfoon/' className="bg-blue-500 hover:bg-blue-400 mr-3  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"> 
  <span className='text-gray-200'>Hire Me</span>
</a>
                <a href='https://drive.google.com/uc?export=download&id=1CTdaI0_uVbmFyCqrxODQEcEJHCspLwec' className=" bg-blue-500 hover:bg-blue-400 mr-3  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 text-gray-200 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span className=' text-gray-200'>Resume</span>
</a>
                </div>
            </div>
            <div className=' max-w-[50%]'>
                <img src={bannerImg} alt="" />
            </div>
            
        </div>
    );
};

export default Header;