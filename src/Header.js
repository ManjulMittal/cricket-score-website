import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
 const Header = () => {
   return (
        <div>
            <h1>Cricket Score Website</h1>
            <ul className='nav'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/recent'>Recent</Link>
                </li>
                <li>
                    <Link to='/live'>Live</Link>
                </li>
                <li>
                    <Link to='/upcoming'>Upcoming</Link>
                </li>
                <li>
                    <Link to='/news'>News</Link>
                </li>
            </ul>
        </div>
   )
 }
 
 export default Header;