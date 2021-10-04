import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-gray-400 h-36 p-8 mt-8'>
            <div className='flex justify-center'>
                <Link to='/' className='p-4 bg-gray-500 text-white mr-8 border-b-2'>Email: admin@becoder.com</Link>
                <Link to='/' className='p-4 bg-gray-500 text-white border-b-2'>Hotline: +88019999923923</Link>
            </div>
            <p className='text-center mt-4'>Copyright @ <b>Rakib Hassan</b> 2021</p>
        </footer>
    );
};

export default Footer;