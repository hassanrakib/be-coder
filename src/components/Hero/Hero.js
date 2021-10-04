import React from 'react';
import topSectionImage from '../../images/top-image.jpg';

const Hero = () => {
    return (
        <div className='flex items-center p-4'>
            <div>
                <h1 className='text-5xl leading-relaxed font-bold mb-8'>Start Your Coding Journey With BeCoder</h1>
                <button className='bg-gray-700 px-5 py-3 mr-4 text-white rounded-md'>Enroll Now</button>
                <button className='underline text-purple-900 font-bold'>Learn More</button>
            </div>
            <div>
                <img src={topSectionImage} alt="" className='rounded-full p-4' />
            </div>
        </div>
    );
};

export default Hero;