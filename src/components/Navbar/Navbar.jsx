import React from 'react'
import "./Navbar.css"
import imageOne from '../../assets/imageOne.png'
import Vector from '../../assets/Vector.png'
import Dropdown from '../../assets/Dropdown.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
           <img src={imageOne} alt="" />
        </div>

        <div className='nav-elements'>
            <a className='nav-el nav-link' href="">My Assignment</a>
            <a className='nav-el nav-link' href="">Chat with Mentor</a>
            <a className='nav-link' href=""><span className='nav-profile' ><img className='profile-vector' src={Vector} alt="" />ProfileName<img src={Dropdown} alt="" /></span></a>
        </div>
    </div>
  )
}

export { Navbar }