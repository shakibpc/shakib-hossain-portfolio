import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './Projects.css';
import project1 from '../../../images/projects/creative-agency.png';
import project3 from '../../../images/projects/volunteer-network.png';
import project4 from '../../../images/projects/travel-guru.png';
import project5 from '../../../images/projects/e-school.png';
import project6 from '../../../images/projects/hot-gadgets.png';

const Projects = () => {
    return (
        <div className="Projects">
            <div className="container py-5">
                <div className="header text-center">
                    <h2>MY LATEST POJECT</h2>
                    <div className="wrapper">
                        <div className="divider div-transparent "></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project1} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Creative Agency</h4>
                                <p className="card-text">Single page web application with the dashboard. A customer can order and review for service. An admin can see orders add a new service from the dashboard.</p>
                                <div className="technology mb-4"><span>React</span> <span>React Router</span> <span>Node.js</span> <span>Express.js</span> <span>MongoDB</span> <span>Bootstrap</span> <span>Firebase</span> <span>Heroku</span></div>
                                <a href="https://github.com/shakibpc/creative-agency-client" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="lnkd.in/eb4gb6g" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project3} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Volunteer Network</h4>
                                <p className="card-text">Single page web application with the dashboard. People can choose volunteer work for a specific date and delete them if they want. An admin can add new volunteer work.</p>
                                <div className="technology mb-4"><span>React</span> <span>React Router</span> <span>Node.js</span> <span>Express.js</span> <span>MongoDB</span> <span>Bootstrap</span> <span>Firebase</span> <span>Heroku</span></div>
                                <a href="https://github.com/shakibpc/volunteer-network-client" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="lnkd.in/eajvzfd" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project4} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Travel Guru</h4>
                                <p className="card-text">Single page web application for tour booking system project. A customer can book a tour and see hotels based on their destination.</p>
                                <div className="technology mb-4"><span>React</span> <span>React Router</span> <span>Bootstrap</span><span>Firebase</span></div>
                                <a href="https://github.com/shakibpc/travel-guru" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="travel-guru-ddf7b.web.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project5} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">E-School</h4>
                                <p className="card-text">A static online learning website with responsive layouts for every kind of device. The review section builds with a carousel slider.</p>
                                <div className="technology mb-4"><span>Bootstrap</span> <span>HTML</span> <span>CSS</span> <span>Figma</span> <span>GitHub</span></div>
                                <a href="https://github.com/shakibpc/e-school" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="https://shakibpc.github.io/e-school/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project6} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Hot Gadgets</h5>
                                <p className="card-text">A static e-commerce website with responsive layouts for every kind of device. The header section builds with a carousel slider.</p>
                                <div className="technology mb-4"><span>Bootstrap</span> <span>HTML</span> <span>CSS</span> <span>Figma</span> <span>GitHub</span></div>
                                <a href="https://github.com/shakibpc/panda-ecommerce" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="https://shakibpc.github.io/panda-ecommerce/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;