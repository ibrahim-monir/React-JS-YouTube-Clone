import React from 'react'
import './Navbar.css'
import menuIcon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search.png'
import uploadIcon from '../../assets/upload.png'
import moreIcon from '../../assets/more.png'
import notificationIcon from '../../assets/notification.png'
import profileIcon from '../../assets/jack.png'

const Navbar = () => {
  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img src={menuIcon} className="menu-icon" alt="Menu Icon" />
            <img src={logo} className="logo" alt="Logo" />

        </div>

        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
                <input type="text" placeholder='Search' />
                <img src={searchIcon} alt="" />
            </div>
        </div>

        <div className="nav-right flex-div">
            <img src={uploadIcon} alt="Upload Icon" />
            <img src={moreIcon} alt=" More Icon" />
            <img src={notificationIcon} alt="Notification Icon" />
            <img src={profileIcon} alt="Profile Icon" />
        </div>

        
    </nav>
  )
}

export default Navbar