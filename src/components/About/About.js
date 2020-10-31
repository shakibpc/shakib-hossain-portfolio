import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css';
import profileImage from '../../images/Md. Shakib Hossain.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="About">
            <Navbar/>
            <div className="container py-5">
                <div className="header text-center">
                    <h2>ABOUT ME</h2>
                    <div className="wrapper">
                        <div className="divider div-transparent "></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 text-center py-4">
                        <img className="img-fluid profile-image" src={profileImage} alt=""/>
                        <p className="description mt-4">I have a strong passion for the creativity and discipline that goes into front-end development. Keeping in mind scalability and clean code that is maintainable and readable. In my free time, I enjoy being outdoors, listening to music, traveling and experiencing new and exciting adventures. I am available for any kind of job opportunity that suits my interests.</p>
                        <Link to="/contact" className="btn mr-1">Contact</Link>
                    </div>
                    <div className="col-md-7 skills py-4">
                        <h2 className="mb-4">SKILLS</h2>
                        <h4 className="mb-3">Comfortable</h4>
                        <p>React <span>&#9679;</span> React Router <span>&#9679;</span> JavaScript <span>&#9679;</span> ES6 <span>&#9679;</span> HTML <span>&#9679;</span> CSS <span>&#9679;</span> SCSS <span>&#9679;</span> Bootstrap <span>&#9679;</span> WordPress</p>
                        <h4 className="mt-4 mb-3">Familiar</h4>
                        <p>Redux <span>&#9679;</span> Node.js <span>&#9679;</span> Express.js <span>&#9679;</span> MongoDB <span>&#9679;</span> jQuery <span>&#9679;</span> Material-UI <span>&#9679;</span> Heroku <span>&#9679;</span> Netlify <span>&#9679;</span> Firebase</p>
                        <h4 className="mt-4 mb-3">Tools</h4>
                        <p>Git <span>&#9679;</span> GitHub <span>&#9679;</span> Visual Studio Code <span>&#9679;</span> Atom <span>&#9679;</span> npm <span>&#9679;</span> Chrome Dev Tools <span>&#9679;</span> cPanel <span>&#9679;</span> Adobe XD <span>&#9679;</span> Figma</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;