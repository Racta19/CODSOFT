import { useNavigate } from 'react-router-dom'

import './Footer.css'
import logo from '../../assets/Job Board.png'

const Footer = () => {
    const navigate = useNavigate(   )
    const handleHomeClick = () => {
        navigate('/');
    }
  return (
    <div className='footer'>
        <div className='footerContainer' >
            <img onClick={handleHomeClick} src={logo} alt="logo" />&emsp; &copy; 2023
        </div>
    </div>
  )
}

export default Footer