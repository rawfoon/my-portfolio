import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/Navbar/NavBar';
import Navigation from '../Components/Navbar/Navigation';

const Main = () => {
    return (
        <div>
            {/* <NavBar></NavBar> */}
            
            <Navigation></Navigation>
            {/* <div className='h-20 p-0'></div> */}
            <Outlet></Outlet>
            <Footer></Footer>
    
            
        </div>
    );
};

export default Main;