import React from 'react';
import { FiEdit, FiDownload, FiPlus } from 'react-icons/fi'
import { TiPointOfInterest } from 'react-icons/ti'
import { MdDelete } from 'react-icons/md'

const ResumeBuilder = () => {
    return (
        <div className='container max-w-[1080px] mx-auto my-16'>
            <h1 className='uppercase text-3xl text-center text-primary font-bold mb-10'>Resume</h1>
            <div className='border-2 border-base-200 px-5 md:px-28 py-24'>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='flex items-center gap-2'>
                            <h3 className='text-xl font-semibold'>Your Name Here</h3>
                            <FiEdit className='cursor-pointer text-secondary'></FiEdit>
                        </div>
                        <p>harifur.rashid1@gmail.com</p>
                        <p>+880 1888295295</p>
                        <p>Chittagong</p>
                    </div>
                    <div className='flex items-center justify-center gap-1 text-xl text-secondary cursor-pointer'>
                        <FiDownload></FiDownload>
                        <h3>Download</h3>
                    </div>
                </div>

                <div className='border border-base-200 my-10 bg-base-200'></div>

                {/* CAREER OBJECTIVE part start */}

                <div>
                    <div className='flex justify-between'>
                        <h3 className='uppercase font-semibold'>CAREER OBJECTIVE</h3>
                        <FiEdit className='cursor-pointer text-secondary'></FiEdit>
                    </div>
                    <p className='mt-5'>Building Front-end is my passion. I am a React JS enthusiast. I have been experienced in
                        react JS for 1 year. I am constantly strengthening my skills.
                        Seeking opportunities to become a full-time front-end developer for a long time.</p>
                </div>
                {/* CAREER OBJECTIVE part End */}

                <div className='border border-base-200 my-10 bg-base-200'></div>

                {/* SKILLS part start */}
                <div>
                    <h3 className='uppercase font-semibold'>SKILLS</h3>
                    
                    <div className='grid grid-cols-4'>
                        <div className='flex items-center gap-2 mt-5'>
                            <TiPointOfInterest></TiPointOfInterest>
                            <p>HTML5</p>
                            <FiEdit className='cursor-pointer text-secondary'></FiEdit>
                            <MdDelete className='cursor-pointer text-red-500'></MdDelete>
                        </div>
                        <div className='flex items-center gap-2 mt-5'>
                            <TiPointOfInterest></TiPointOfInterest>
                            <p>HTML5</p>
                            <FiEdit className='cursor-pointer text-secondary'></FiEdit>
                            <MdDelete className='cursor-pointer text-red-500'></MdDelete>
                        </div>
                        <div className='flex items-center gap-2 mt-5'>
                            <TiPointOfInterest></TiPointOfInterest>
                            <p>HTML5</p>
                            <FiEdit className='cursor-pointer text-secondary'></FiEdit>
                            <MdDelete className='cursor-pointer text-red-500'></MdDelete>
                        </div>
                        <div className='flex items-center gap-2 mt-5'>
                            <TiPointOfInterest></TiPointOfInterest>
                            <p>HTML5</p>
                            <FiEdit className='cursor-pointer text-secondary'></FiEdit>
                            <MdDelete className='cursor-pointer text-red-500'></MdDelete>
                        </div>
                        <div className='flex items-center gap-2 mt-5'>
                            <TiPointOfInterest></TiPointOfInterest>
                            <p>HTML5</p>
                            <FiEdit className='cursor-pointer text-secondary'></FiEdit>
                            <MdDelete className='cursor-pointer text-red-500'></MdDelete>
                        </div>
                        <div className='flex items-center gap-2 mt-5'>
                            <TiPointOfInterest></TiPointOfInterest>
                            <p>HTML5</p>
                            <FiEdit className='cursor-pointer text-secondary'></FiEdit>
                            <MdDelete className='cursor-pointer text-red-500'></MdDelete>
                        </div>
                        <div className='flex items-center gap-2 mt-5'>
                            <TiPointOfInterest></TiPointOfInterest>
                            <p>HTML5</p>
                            <FiEdit className='cursor-pointer text-secondary'></FiEdit>
                            <MdDelete className='cursor-pointer text-red-500'></MdDelete>
                        </div>
                    </div>

                    <div className='flex items-center gap-2 text-secondary mt-9 cursor-pointer'>
                        <FiPlus></FiPlus>
                        <p>Add Skill</p>
                    </div>
                </div>
                {/* SKILLS part end */}

                <div className='border border-base-200 my-10 bg-base-200'></div>

                {/* PERSONAL PROJECTS part starts here */}
                <div>
                    <h3 className='uppercase font-semibold mb-6'>PERSONAL PROJECTS</h3>
                    <div className='flex'>
                        <div className='text-lg mr-3'>
                            <TiPointOfInterest></TiPointOfInterest>
                        </div>
                        <div>
                            <h3>SOFA-MART (Warehouse Management System)</h3>
                            <br />
                            <p>May 2022 - May 2022</p>
                            <br />
                            <p className='text-secondary'>https://sofa-mart.web.app/</p>
                            <br />
                            <p>Technology use: Javascript(ES6), ReactJS, Vanila CSS, Git, Firebase Authentication, React hook form, ExpressJS, NodeJS, MongoDB, Heroku etc.
                                <br />
                                Implemented a beautyfull React warehouse website.User can add product, remove product and update product.</p>

                        </div>
                        <div className='flex gap-4'>
                            <FiEdit className='cursor-pointer text-secondary'></FiEdit>
                            <MdDelete className='cursor-pointer text-red-500'></MdDelete>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 text-secondary mt-7 cursor-pointer'>
                        <FiPlus></FiPlus>
                        <p>Personal Project</p>
                    </div>
                </div>
                {/* PERSONAL PROJECTS part ends here */}

                <div className='border border-base-200 my-10 bg-base-200'></div>

                {/* TRAINING/COURSES part starts here */}
                <div>
                    <h3 className='uppercase font-semibold mb-6'>TRAINING/COURSES</h3>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <div className='text-lg mr-3'>
                                <TiPointOfInterest></TiPointOfInterest>
                            </div>
                            <div>
                                <h3>MERN-stack Development</h3>
                                <br />
                                <p>Programming Hero, Online</p>
                                <br />
                                <p>May 2022 - May 2022</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <FiEdit className='cursor-pointer text-secondary'></FiEdit>
                            <MdDelete className='cursor-pointer text-red-500'></MdDelete>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 text-secondary mt-7 cursor-pointer'>
                        <FiPlus></FiPlus>
                        <p>Add training/course</p>
                    </div>
                </div>
                {/* TRAINING/COURSES part ends here */}
            </div>
        </div>
    );
};

export default ResumeBuilder;