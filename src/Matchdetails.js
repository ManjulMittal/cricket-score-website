import React from 'react'
import { useParams } from 'react-router-dom';
import Dheader from './detailsHeader';
const Matchdetails = () => {
    let params = useParams();
let matchId = params.matchId;
  return (
    <div>
        <Dheader />
        Matchdetails
        <h1>
            {matchId}
        </h1>
    </div>
  )
}

export default Matchdetails