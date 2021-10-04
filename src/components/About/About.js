import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';

const About = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('./instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data));
    },[]);
    return (
        <div>
            <div className='flex justify-center items-center h-52 bg-about-us-top bg-no-repeat bg-cover'>
                <h1 className='text-5xl text-white'>About Us</h1>
            </div>
            <div className='flex justify-center items-center'>
                <div className='max-w-xl'>
                <p className='mt-6'>BeCoder is an online platform for them who are interested to start their <b>coding life</b>. Here we teach with care and with baby steps. You get to know inner things of a language during studying with our any online course. We have <i>got wonderful teachers</i> for you.</p>
                <p className='mt-3'>Immerse yourself in <u>real-world learning</u>. Gain the skills to excel in the world of business. Don't miss the application window for our world-renowned, interactive online courses. Unique Online Programs. World-Class Content. Social Learning Platform. <b>Case-Based Learning.</b></p>
                <div className='mt-8'>
                <h2 className='text-3xl'>Introduction to Our Instructors:</h2>
                {
                    instructors.map(instructor => <Instructor instructor={instructor} key={instructor.name} />)
                }
                </div>
                <div className='mt-8'>
                    <b><p>For any kind of help. Free to contact us at +880199995977</p></b>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;