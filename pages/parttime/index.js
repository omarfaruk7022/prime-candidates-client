import React from 'react';
import Footer from '../../components/Footer';
import Navber from '../../components/Navber';

const PartTimeJobs = () => {
    return (
        // page for part time jobs option on navbar
        <Navber>
            <div className='flex justify-center items-center min-h-screen'>
                <h2 className='text-4xl text-secondary tracking-widest'>Part-Time job updating soon....</h2>
            </div>
            <Footer></Footer>
        </Navber>
    );
};

export default PartTimeJobs;