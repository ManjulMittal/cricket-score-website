import React from 'react'
import './Front.css'
import LogoImg from './Images/100.jpeg';
function Front(){
  return(
      <>
      <img id="image" className="slide" src={LogoImg} alt="" />
      <div>
        <footer>Developers: Parth Manchanda & Manjul Mittal</footer>
    </div>
    </>
  )
}

export default Front;
