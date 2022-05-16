import React from 'react'
import { Link,useParams } from 'react-router-dom';
import './Header.css';
const Dheader = () => {
    let params = useParams();
    let matchId = params.matchId;
   return (
        <div>
            <h1>Cricket Score Website</h1>
            <ul className='nav'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to={'/matchDetails/' + matchId}>ScoreCard</Link>
                </li>
                <li>
                    <Link to={'/matchCommentary/' + matchId}>Commentary</Link>
                </li>
            </ul>
        </div>
   )
 }
 
 export default Dheader;