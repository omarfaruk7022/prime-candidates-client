import React from 'react';
import Footer from '../../components/Footer';
import Navber from '../../components/Navber';

const candidatePage = () => {
    return (
        <Navber>
            <div className='flex justify-center items-center min-h-screen'>
                <h2 className='text-4xl text-secondary tracking-widest'>Working on Candidates....</h2>
            </div>
            <Footer></Footer>
        </Navber>
    );
};

export default candidatePage;