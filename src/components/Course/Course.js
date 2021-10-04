import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Course = (props) => {
    const { course } = props;
    const { img, language, videos, time, liveSessions, assignments, price } = course;
    return (
        <div className='shadow-lg p-4 m-4'>
            <img src={img} alt="" className='w-60 h-60 object-cover rounded-md' />
            <h3 className='mt-4 text-xl font-bold'>{language} Course</h3>
            <p className='my-2'><FontAwesomeIcon icon={faCheck} className='mr-3' /><b>{videos}</b> Videos</p>
            <p className='my-2'><FontAwesomeIcon icon={faCheck} className='mr-3' /><b>{liveSessions}</b> Live Sessions</p>
            <p className='my-2'><FontAwesomeIcon icon={faCheck} className='mr-3' /><b>{assignments}</b> Assignments</p>
            <p className='my-2'><FontAwesomeIcon icon={faCheck} className='mr-3' />Course Time: <b>{time} months</b></p>
            <p className='my-2'><FontAwesomeIcon icon={faCheck} className='mr-3' />Price: <b>{price}$</b></p>
        </div>
    );
};

export default Course;