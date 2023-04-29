import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatum magni iusto assumenda odit expedita quod et veritatis sapiente sint consequatur necessitatibus impedit dolorum rerum commodi est, optio dolorem eligendi.</p>
            <p>Go Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;