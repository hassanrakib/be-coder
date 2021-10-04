import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Course from '../Course/Course';

const Courses = () => {
    // get history
    const history = useHistory();
    // load courses
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    // decide how much courses to show
    const coursesToShow = history.location.pathname === '/courses' ? courses : courses.slice(0, 4);
    // event handler to show more courses
    const handleShowMore = () => {
        history.push('/courses');
    }
    return (
        <div className='mt-16'>
            <h2 className='text-center text-4xl mb-16 border-solid border-3 border-indigo-300'>Top Language Courses</h2>
            <div className='grid grid-cols-4'>
                {
                    coursesToShow.map(course => <Course course={course} key={course.language} />)
                }
            </div>
            {
                history.location.pathname !== '/courses' &&
                <div className='text-center'>
                    <button className='bg-purple-600 m-8 px-9 py-3 text-white rounded-md' onClick={handleShowMore}>Show More Courses</button>
                </div>
            }
        </div>
    );
};

export default Courses;