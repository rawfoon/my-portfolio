import React from 'react';
import bannerImg from '../../assets/image/rawfoon-corp-removebg.png'
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <div className='bg-black flex items-center justify-center'>
            <div className='text-white'>
                <h1 className='text-5xl'>Muctasina Golam Rawfoon</h1>
                <p className='text-3xl'>
                <Typewriter
  options={{
    strings: ['Web Developer', 'MERN Stack Developer','Front-End Developer', 'Back-End Developer', 'Loves problem solving and coding...'],
    autoStart: true,
    loop: true,
  }}
/>
                </p>
            </div>
            <div className=' max-w-[50%]'>
                <img src={bannerImg} alt="" />
            </div>
            
        </div>
    );
};

export default Header;