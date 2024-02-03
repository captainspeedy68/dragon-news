import React from 'react';
import Header from '../shared/Header/Header';
import LeftSIdeNavbar from '../shared/LeftSideNavbar/LeftSIdeNavbar';
import Navbar from '../shared/Navbar/Navbar';
import RightSideNav from '../shared/RightSIdeNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h1 className='hellow font-poppins'>This is home</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                <div>
                    <LeftSIdeNavbar></LeftSIdeNavbar>
                </div>
                <div className='lg:col-span-2'>
                    <h2 className="text-3xl">News Coming Soon</h2>
                </div>
                <div className='border'>
                    <RightSideNav></RightSideNav>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;