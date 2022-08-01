import React from 'react';
import Footer from '../../components/Footer';
import Navber from '../../components/Navber';

const FullTimeJobs = () => {
    // page for full time jobs option on navbar
    return (
        <Navber>
            <div className='flex justify-center items-center min-h-screen'>
                <h2 className='text-4xl text-secondary tracking-widest'>Full-Time job Updating soon....</h2>
            </div>
            <Footer></Footer>
        </Navber>
    );
};

export default FullTimeJobs;