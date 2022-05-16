import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Live from './Live'
import Recent from './Recent';
import Upcoming from './Upcoming'
import React from 'react'
import Front from './Front';
import Commentary from './Commentary';
import Matchdetails from './Matchdetails';
import News from './News';
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Front />} exact/>
        <Route path = '/recent' element={<Recent />}/>
        <Route path = '/live' element={<Live />}/>
        <Route path = '/upcoming' element={<Upcoming />}/>
        <Route path = '/news' element={<News />} />
        <Route path = '/matchDetails/:matchId' element={<Matchdetails />} />
        <Route path = '/matchCommentary/:matchId' element={<Commentary />} />
      </Routes>    
    </BrowserRouter>
  )
}

export default App;
