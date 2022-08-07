import React from 'react';
import Footer from '../../components/Footer';
import Job from '../../components/Job';
import Navber from '../../components/Navber';

export default function FullTimeJobs({ jobs }) {
    return (
        <>
            <Navber>
                {/* <div className='flex justify-center items-center min-h-screen'>
                <h2 className='text-4xl text-secondary tracking-widest'>Full-Time job Updating soon....</h2>
            </div> */}
                <div>
                    {
                        jobs.map(job => <Job key={job._id} job={job}></Job>)
                    }
                </div>
                <Footer></Footer>
            </Navber>
        </>
    );
}

export const getStaticProps = async () => {
    const res = await fetch("https://stormy-beach-33232.herokuapp.com/jobs");
    const jobs = await res.json();

    return {
        props: {
            jobs,
        },
    };
};