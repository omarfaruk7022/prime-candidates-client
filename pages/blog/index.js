import React from 'react';
import Navber from '../../components/Navber'
import Blog from '../../components/Blog'
import Footer from '../../components/Footer'

const BlogPage = () => {
    return (
        <div>
            <Navber>
                <Blog></Blog>
                <Footer></Footer>
            </Navber>
        </div>
    );
};

export default BlogPage;