import React from 'react';

const Instructor = (props) => {
    const { name, description } = props.instructor;
    return (
        <div>
            <h3 className='text-xl mt-8 text-purple-900'>{name}:</h3>
            <p className='mt-2'>{description}</p>
        </div>
    );
};

export default Instructor;