import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';

const Blog = () => {
    return (
        <div classNameName='flex justify-center items-center min-h-screen'>
            <div className="card card-side bg-base-100 shadow-xl w-2/3 mx-auto">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Next JS!</h2>
                    <p>Next. js is a React framework that enables several extra features, including server-side rendering and generating static websites. React is a JavaScript library that is traditionally used to build web applications rendered in the client's browser with JavaScript.</p>
                    <div className="card-actions justify-end text-secondary cursor-pointer">
                    <p className='flex items-center gap-1 justify-end'>More <IoIosArrowDropright className='text-xl'></IoIosArrowDropright></p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;