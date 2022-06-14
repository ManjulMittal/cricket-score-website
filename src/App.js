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
function App(){
  let index = 1;
  const imgLinks = ["https://resources.pulse.icc-cricket.com/photo-resources/2021/10/14/35d901a8-4bed-4247-b35e-4f5d7297ec6e/MicrosoftTeams-image-1-.png?width=845&height=475","https://resources.pulse.icc-cricket.com/ICC/photo/2021/09/16/0f2b2e17-8b9a-495f-8965-adbbe389077d/CNSXDhJb.jpg","https://resources.pulse.icc-cricket.com/ICC/photo/2016/12/12/4468b371-7151-4b4a-91b2-2d690d5498ad/peWaTOmb.jpg","https://resources.pulse.icc-cricket.com/ICC/photo/2016/12/12/b71b28f5-e75d-4f6b-8dbf-2ab2079080f7/eTIvVivE.jpg","https://images.news18.com/ibnlive/uploads/2022/04/sl-t20-2014.jpg","https://resources.pulse.icc-cricket.com/ICC/photo/2016/12/12/9ccd6b81-057d-43f4-8023-80882b0d893f/CwpkQgtC.jpg","https://resources.pulse.icc-cricket.com/photo-resources/2020/10/22/bc3df250-95a7-4593-93ed-d3e29d758bcd/GettyImages-1211122698.jpg?width=845&height=563"];

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
