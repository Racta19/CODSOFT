import logo from '../../assets/Job Board.png'

import './Layout.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Layout = () => {
  {/* SIDE BAR HOOKS AND FUNCTIONS */}
  const [sidebar, setSideBar] = useState(false);
  const toggleSideBar = () => {
    setSideBar(!sidebar)
  }

  {/* LOGO FUNCTIONS */}
  const navigate = useNavigate()
  const handleHomeClick = () => {
    navigate('/')
  }

  {/* LOGIN FUNCTIONS */}
  const handleLoginClick = () => {
    navigate('/login')
  }
  return (
    <div className="layout">
      {/* SIDE BAR  */}
      <div className='sideBarContainer'>
        <div className={`sidebar ${sidebar ? 'open' : ''}`}>
          <div className="sidebarIcon" onClick={toggleSideBar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className= {`sideBarLinks ${sidebar ? 'open' : ''}` }>
            <li onClick={handleHomeClick}>Home</li>
            <li onClick={handleHomeClick}>Jobs</li>
            <li onClick={handleHomeClick}>Applied Jobs</li>
            <li onClick={handleHomeClick}>Post Jobs</li>
          </ul>
        </div>
      </div>
      {/* LOGO */}
      <img className='logo' onClick={handleHomeClick} src={logo} alt="logo" />
      {/* LOGIN AND AUTH */}
      <div className="navbar">
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  )
}

export default Layout