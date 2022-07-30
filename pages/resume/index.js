import React from 'react';
import Footer from '../../components/Footer';
import Navber from '../../components/Navber';
import ResumeBuilder from '../../components/ResumeBuilder';

const Resume = () => {
    return (
        <div className='pt-2 md:pt-4'>
            <Navber>
                <ResumeBuilder></ResumeBuilder>
                <Footer></Footer>
            </Navber>
        </div>
    );
};

export default Resume;