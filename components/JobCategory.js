import Link from 'next/link';
import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';

const JobCategory = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-12 px-40'>
            <div className='flex items-center justify-around bg-base-200 p-12 border-2 rounded-lg text-2xl hover:bg-primary hover:text-white hover:border-secondary hover:scale-105 transition-all  duration-300'>
                <FaReact></FaReact>
                <Link href={"/"} className='cursor-pointer'>9,071+ React Engineers</Link>
                <Link href={"/"}><BsArrowRightCircle className='cursor-pointer hover:scale-150 transition-all'></BsArrowRightCircle></Link>
            </div>
            <div className='flex items-center justify-around bg-base-200 p-12 border-2 rounded-lg text-2xl hover:bg-primary hover:text-white hover:border-secondary hover:scale-105 transition-all  duration-300'>
                <FaReact></FaReact>
                <Link href={"/"} className='cursor-pointer'>9,071+ React Engineers</Link>
                <Link href={"/"}><BsArrowRightCircle className='cursor-pointer hover:scale-150 transition-all'></BsArrowRightCircle></Link>
            </div>
            <div className='flex items-center justify-around bg-base-200 p-12 border-2 rounded-lg text-2xl hover:bg-primary hover:text-white hover:border-secondary hover:scale-105 transition-all  duration-300'>
                <FaReact></FaReact>
                <Link href={"/"} className='cursor-pointer'>9,071+ React Engineers</Link>
                <Link href={"/"}><BsArrowRightCircle className='cursor-pointer hover:scale-150 transition-all'></BsArrowRightCircle></Link>
            </div>
            <div className='flex items-center justify-around bg-base-200 p-12 border-2 rounded-lg text-2xl hover:bg-primary hover:text-white hover:border-secondary hover:scale-105 transition-all  duration-300'>
                <FaReact></FaReact>
                <Link href={"/"} className='cursor-pointer'>9,071+ React Engineers</Link>
                <Link href={"/"}><BsArrowRightCircle className='cursor-pointer hover:scale-150 transition-all'></BsArrowRightCircle></Link>
            </div>
            <div className='flex items-center justify-around bg-base-200 p-12 border-2 rounded-lg text-2xl hover:bg-primary hover:text-white hover:border-secondary hover:scale-105 transition-all  duration-300'>
                <FaReact></FaReact>
                <Link href={"/"} className='cursor-pointer'>9,071+ React Engineers</Link>
                <Link href={"/"}><BsArrowRightCircle className='cursor-pointer hover:scale-150 transition-all'></BsArrowRightCircle></Link>
            </div>
            <div className='flex items-center justify-around bg-base-200 p-12 border-2 rounded-lg text-2xl hover:bg-primary hover:text-white hover:border-secondary hover:scale-105 transition-all  duration-300'>
                <FaReact></FaReact>
                <Link href={"/"} className='cursor-pointer'>9,071+ React Engineers</Link>
                <Link href={"/"}><BsArrowRightCircle className='cursor-pointer hover:scale-150 transition-all'></BsArrowRightCircle></Link>
            </div>
        </div>
    );
};

export default JobCategory;