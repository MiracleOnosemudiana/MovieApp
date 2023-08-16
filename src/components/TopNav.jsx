import React from 'react';
// import { Link } from "react-router-dom";
import './TopNav.css'
import Logo from '../img/Logo.png'
import profilepic from '../img/profilepic.png'


const TopNav = () => {
    return (
        <nav className='topNav container-lg'>
            <img src={Logo} alt="" />
            <ul>
                <li>
                    <a href="">Movies</a>
                    {/* <Link to="/">Home</Link> */}
                </li>
                <li>
                    <a href="">Tv shows</a>
                    {/* <Link to="/blogs">Blogs</Link> */}
                </li>
                <li>
                    <a href="">Animations</a>
                    {/* <Link to="/contact">Contact</Link> */}
                </li>
                <li>
                    <a href="">Upgrade</a>
                    {/* <Link to="/contact">Contact</Link> */}
                </li>
            </ul>
            <img src={profilepic} alt="" />
        </nav>
    );
}

export default TopNav;
