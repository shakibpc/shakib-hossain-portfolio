import React from 'react';
import './Profile.css';
import profileImage from '../../../../images/Md. Shakib Hossain.jpg';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="Profile container py-5">
            <div className="row d-flex justify-content-center align-items-center my-md-5 my-0">
                <div className="col-lg-7 pl-lg-5 pl-2 order-1 order-lg-0 py-4 py-md-5 text-left text-center text-md-left animate__animated animate__fadeInLeft">
                    <p className="hello">Hello! I am</p>
                    <h1 className="name"> Md. Shakib Hossain</h1>
                    <h3 className="designation mt-2">Junior Web Developer</h3>
                    <div className="social-links my-2">
                        <a href="https://github.com/shakibpc" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/shakibpc/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://medium.com/@shakibpc00" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium-m"></i></a>
                    </div>
                    <p className="description mt-3 mt-md-4 mb-4">I am a passionate Web Developer. I love to code modern and responsive layouts for web application. My core skill is based on JavaScript and I love to do most things using JavaScript.</p>
                    <a className="btn mr-1" href="https://drive.google.com/file/d/1iS827W2iFxFvdXLDjeI0t_Yt8MLtstbK/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>Get Resume</a>
                    <Link to="/about" className="btn ml-1">About Me</Link>
                </div>
                <div className="col-lg-5 d-flex justify-content-center animate__animated animate__fadeInRight">
                    <img className="img-fluid profile-image" src={profileImage} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Profile;