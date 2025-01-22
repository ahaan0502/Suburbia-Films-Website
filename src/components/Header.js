import React from 'react';
import './Header.css'; // Import the CSS for the header
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icons/suburbialogo.png'; // Import the image


function Header() {

  const navigate = useNavigate();
  
    // Function to redirect when video ends
    const navigateToMain = () => {
      navigate('/main'); // Redirect to the desired route (e.g., /home)
    };

    const navigateToFilms = () => {
      navigate('/ourfilms'); // Redirect to the desired route (e.g., /home)
    };

    const navigateToAbout = () => {
      navigate('/about'); // Redirect to the desired route (e.g., /home)
    };

    const navigateToFind = () => {
      navigate('/findus'); // Redirect to the desired route (e.g., /home)
    };

  return (
    <header className="header">
      <img onClick={navigateToMain} src={logo} alt="Suburbia Films Logo" className="header-logo" />
      <p onClick={navigateToFilms} className='ea'>Our Films</p>
      <p onClick={navigateToAbout} className='eb'>About</p>
      <p onClick={navigateToFind} className='ec'>Find Us</p>
    </header>
  );
}

export default Header;