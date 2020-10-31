import React from 'react';
import './Header.css';
import Navbar from '../../Navbar/Navbar';
import Profile from './Profile/Profile';

const Header = () => {
    return (
        <div className="Header">
            <Navbar/>
            <Profile/>
        </div>
    );
};

export default Header;