import React from 'react'
import "./NavList.css"
const NavList = () => {
  return (
    <div className='Navlist'>
            <p className='nav-Home e'>Home</p>
            <p className='nav-Shows e'>Shows</p>
            <p className='nav-Games e'>Games</p>
            <p className='nav-New e'>New & Popular</p>
            <p className='nav-MyList e'>My List</p>
            <p className='nav-Language e'>Browse by Language</p>
    </div>
  )
}

export default NavList