import React from 'react';
import Footer from '../Footer/Footer';
import Blogs from '../Home/Blogs/Blogs';
import Navbar from '../Navbar/Navbar';

const Blog = () => {
    return (
        <div>
            <Navbar/>
            <Blogs/>
            <Footer/>
        </div>
    );
};

export default Blog;