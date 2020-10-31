import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <h3> Shakib Hossain</h3>
                    </Link>
                    <Link to="#" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link mr-4" to="/"><span>HOME</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-4" to="/about"><span>ABOUT</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-4" to="/projects"><span>PROJECTS</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-4" to="/blogs"><span>BLOGS</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-4" to="/contact"><span>CONTACT</span></Link>
                        </li>
                        </ul>
                        <a className="btn" href="https://drive.google.com/file/d/1iS827W2iFxFvdXLDjeI0t_Yt8MLtstbK/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>RESUME</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;