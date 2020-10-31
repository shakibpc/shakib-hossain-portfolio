import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;