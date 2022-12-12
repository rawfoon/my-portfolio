import React from 'react';
import { FaCircle } from 'react-icons/fa';
import phonoShopia from '../../assets/Projects/PhonoShopia/PhonoShopia.png'
import phonoShopia1 from '../../assets/Projects/PhonoShopia/PhonoShopia1.png'
import phonoShopia2 from '../../assets/Projects/PhonoShopia/PhonoShopia2.png'
import phonoShopia3 from '../../assets/Projects/PhonoShopia/PhonoShopia3.png'

const Project2 = () => {

    const features = [
            "Buyer can buy and report a product",
            "Auntentication systems are included",
            "Private route intigrated",
            "Admin Route Intigrated",
            "Admin has full controll on buyer and seller and product",
            "Error page intigrated",
            "This site is fully responsive",
    ]

    return (
        <div className='bg-gradient-to-b from-black  via-gray-800 to-black text-slate-100' >
           <div className=' max-w-screen-lg mx-auto'>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-[5%] rounded-xl'>
                <img className='w-100' src={phonoShopia} alt="" />
                <img className='w-100' src={phonoShopia1} alt="" />
                <img className='w-100' src={phonoShopia2} alt="" />
                <img className='w-100' src={phonoShopia3} alt="" />
            </div>
            <div>

            <h1 className="text-5xl font-semibold text-violet-400">PhonoShopia</h1>
            <h3 className='text-2xl '>The Largest used phone online market in Bangladesh.....</h3>
            <h3 className='text-2xl my-3'><span className=' font-semibold text-violet-400'>Project type:</span> Full Stack Project</h3>
            </div>
            <div>
                <h1 className='text-3xl font-semibold text-violet-400 my-3'>Features</h1>
                <div className='ml-[5%]'>
                    <ul>
                    {
                        features.map((feature, i)=> <li><FaCircle className='h-2 w-2 inline-block' /> {feature}</li>)
                    }
                    </ul>
                </div>
                <div className='my-3'>
                    <h3 className='text-2xl'><span className='font-semibold text-violet-400'>Technologies:</span> HTML, CSS, JavaScript, Tailwind Css, ReactJs, ExpressJs, NodeJs, MongoDb, Firebase, JWT, Vercel</h3>
                </div>
                <div className='flex justify-center text-white '>
             <a href='https://phonoshopia.web.app/' target='_blank' className='my-7 mx-1  py-2 px-8 hover:scale-105 hover:bg-blue-600 bg-blue-500 rounded'>Live</a>
              <a href="https://github.com/rawfoon/phonoshopia-client" target='_blank' className='my-7 mx-1 py-2 px-8 hover:scale-105 hover:bg-blue-600 bg-blue-500 rounded' >Client</a>
              <a href="https://github.com/rawfoon/phonoshopia-server" target='_blank' className='my-7 mx-1 py-2 px-8 hover:scale-105 hover:bg-blue-600 bg-blue-500 rounded' >Server</a>
             </div>
            </div>

           </div>


            
        </div>
    );
};

export default Project2;