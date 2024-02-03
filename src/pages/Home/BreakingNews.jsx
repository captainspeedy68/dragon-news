import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
const BreakingNews = () => {
    return (
        <div className='flex'>
            <button className='btn btn-secondary'>Breaking News</button>
            <Marquee pauseOnHover = {true} speed = {100}>
                <Link to={"/"}>I can be a React component</Link>
                <Link className='mx-3' to={"/"}>I can be a React component</Link>
                <Link to={"/"}>I can be a React component</Link>
            </Marquee>
        </div>

    );
};

export default BreakingNews;