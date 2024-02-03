import React from 'react';
import logo from "../../../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <h3 className='mx-auto' >{moment().format("dddd, MMMM D, YYYY")}</h3>
        </div>
    );
};

export default Header;