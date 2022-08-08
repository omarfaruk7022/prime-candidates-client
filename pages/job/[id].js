import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Navber from '../../components/Navber';
import Footer from '../../components/Footer';

const JobDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [jobDetails, setJobDetails] = useState({});
    useEffect(() => {
        if(router.isReady){
            fetch(`https://stormy-beach-33232.herokuapp.com/jobdetails/${id}`)
            .then(res => res.json())
            .then(data => setJobDetails(data))
        }
    }, [id, router.isReady])
    return (
        <Navber>
            <div className='border border-base-200 w-2/3 mx-auto p-5 rounded leading-7 my-8'>
                <h1 className='text-xl'><span className='text-primary font-semibold'>Title :</span> {jobDetails.jobTitle}</h1>
                <p><span className='text-primary font-semibold'>Job Location :</span> {jobDetails.jobLocation}</p>
                <p><span className='text-primary font-semibold'>Job Category :</span> {jobDetails.jobCategory}</p>
                <p><span className='text-primary font-semibold'>Job Type :</span> {jobDetails.jobType}</p>
                <p><span className='text-primary font-semibold'>Salary Type :</span> {jobDetails.salaryType}</p>
                <p><span className='text-primary font-semibold'>Salary Range :</span> {jobDetails.salaryRange}</p>
                <p><span className='text-primary font-semibold'>Job Description :</span> {jobDetails.jobDescription}</p>
            </div>
            <Footer></Footer>
        </Navber>
    );
};

export default JobDetails;
