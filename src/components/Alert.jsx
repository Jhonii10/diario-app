import React from 'react';

const Alert = ({massage}) => {
    return (
        <div className='bg-red-100 border-red-400 text-red-700 px-4 py-3'>
            <span className='sm:inline block'>{massage}</span>
        </div>
    );
}

export default Alert;
