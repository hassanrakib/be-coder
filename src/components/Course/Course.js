import React from 'react';

const Course = (props) => {
    const {course} = props;
    const {img, language, videos, time, liveSessions, assignments, price} = course;
    return (
        <div className='shadow-lg p-4 m-4'>
            <img src={img} alt="" className='w-60 h-60 object-cover rounded-md'/>
            <p className='mt-4'>Language: <b>{language}</b></p>
            <p><b>{videos}</b> Videos</p>
            <p><b>{liveSessions}</b> Live Sessions</p>
            <p><b>{assignments}</b> Assignments</p>
            <p>Course Time: <b>{time} months</b></p>
            <p>Price: <b>{price}$</b></p>
        </div>
    );
};

export default Course;