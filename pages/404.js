import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <section className="bg-white px-2 min-h-screen w-full flex items-center justify-center">
            <div className="text-center">
                    <div className="bg-[url('../images/404.gif')] bg-center h-[300px] bg-no-repeat bg-cover">
                        <h1 className="text-center text-3xl md:text-5xl">Oops!</h1>
                    </div>

                    <div>
                        <h3 className="text-3xl md:text-5xl">
                            It looks like you are lost
                        </h3>

                        <p className='text-xl md:text-3xl my-6'>The page you are looking for is not available!</p>

                        <Link href="/"><button className="text-white bg-[#39ac31] px-3 py-2 text-lg md:text-xl rounded-md">Go to Home</button></Link>
                    </div>
                </div>
        </section>
    );
};

export default NotFound;