import React from 'react';
import './MoviePageNav.css'
import Logo from '../img/Logo.png'
import profilepic from '../img/profilepic.png'
import { Link } from 'react-router-dom';

const MoviePageNav = () => {
    return (
        <nav className='moviePageNav '>
           <Link to='/'> <img src={Logo} alt="logo" /></Link>

            <img src={profilepic} alt="profile pic" />
        </nav>
    );
}

export default MoviePageNav;
