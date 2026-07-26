import React, { useState } from 'react'
import search from "../assets/search.png"
import "./Navigation.css"
import logo from "../assets/Logonetflix.png"
import NavList from './NavList'
const Navigation = () => {
  const [browse,setBrowse] = useState(false);
  return (
     <div className='Navigation'>
    <div className='Nav'>
     
        <div><img className='logo' src={logo} alt="" /></div>
        <div>
        <div className='Browse-list'>
          <button className='nav-browse' onClick={()=>{setBrowse(!browse)
            console.log(browse)
          }}>Browse ▾</button>
          
        </div>
        {
            browse?<div className='Nav-List'><NavList/></div>:<></>
          }
</div>
        <div className='nav-center'>
            <p className='nav-e'>Home</p>
            <p className='nav-e'>Shows</p>
            <p className='nav-e'>Games</p>
            <p className='nav-e'>New & Popular</p>
            <p className='nav-e'>My List</p>
            <p className='nav-e'>Browse by Language</p>
        </div>
        
       
            <i className="bi bi-search"></i>
            <i class="bi bi-bell"></i>
            <div className='nav-c-div'>
              <img src="" alt=""  className='nav-child'/>
            <p>children</p>
 </div>
           
            <div className='nav-a-div'><img src="" alt="" className='nav-account' />
            <p>▾</p></div>

        </div>
    </div>
  )
}

export default Navigation