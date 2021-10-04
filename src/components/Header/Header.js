import logo from '../../logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='grid grid-cols-2 items-center h-20'>
            <div className='flex'>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <nav className='flex justify-evenly items-center'>
                <Link to='/home'>Home</Link>
                <Link to='/courses'>Courses</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/login' className='bg-purple-700 border-0 px-8 py-2 text-white'>Login</Link>
            </nav>
        </header>
    );
};

export default Header;