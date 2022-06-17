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
import Header from './Header';
import img1 from './Images/100.jpeg';
import img2 from './Images/200.jpeg';
import img3 from './Images/300.jpeg';

function App(){
  let index = 1;
  const imgLinks = [img1,img2,img3];
  function slideShow(){
    index++;
    if(index > imgLinks.length){
        index = 1;
    }
    let slider = document.getElementById("image");
    if(slider)
    slider.src = imgLinks[index-1];
    setTimeout(slideShow, 5000);
  }
  
  slideShow();
  return(
    <BrowserRouter>
        <Header />
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
