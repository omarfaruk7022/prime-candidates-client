import React from 'react';
import Footer from '../components/Footer';
import Navber from '../components/Navber';
import Quiz from '../components/Quiz';

const quizzes = () => {
    return (
        <div>
            <Navber>

            <Quiz/>
            </Navber>
            <Footer/>
        </div>
    );
};

export default quizzes;