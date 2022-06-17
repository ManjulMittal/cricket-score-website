import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

 const Header = () => {
   return (
        <div>
            <ul className='nav'>
                <li>
                    <Link to='/' className="bt">Home</Link>
                </li>
                <li>
                    <Link to='/recent' className="bt">Recent</Link>
                </li>
                <li>
                    <Link to='/live' className="bt">Live</Link>
                </li>
                <li>
                    <Link to='/upcoming' className="bt">Upcoming</Link>
                </li>
                <li>
                    <Link to='/news' className="bt">News</Link>
                </li>
            </ul>
        </div>
   )
 }
 
 export default Header;