import React from 'react';
import '../App.css';
import './FindUs.css';
import Header from '../components/Header'; // Import the Header component
import Instagram from '../assets/icons/Instagram.png';
import YouTube from '../assets/icons/YouTube.png';
import TikTok from '../assets/icons/TikTok.png';
import Line from '../assets/icons/Line.png';

function FindUsPage() {
  const handleRedirectIg = () => {
    window.location.href = 'https://www.instagram.com/suburbia.films?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='; // Replace with your target URL
  };
  const handleRedirectYt = () => {
    window.location.href = 'https://www.youtube.com/@suburbiafilms7297'; // Replace with your target URL
  };
  const handleRedirectTt = () => {
    window.location.href = 'https://www.tiktok.com/@suburbia.films?is_from_webapp=1&sender_device=pc'; // Replace with your target URL
  };

  return (
    <div>
      <Header /> {/* Include the Header component here */}
      <p className='a'>Find Us</p>
      <p onClick={handleRedirectIg} className='ba'>@suburbia.films</p>
      <p onClick={handleRedirectYt} className='bb'>Suburbia Films</p>
      <p onClick={handleRedirectTt} className='bc'>@suburbia.films</p>
      <img onClick={handleRedirectIg} src={Instagram} alt="Instagram Logo" className="instagram"/>
      <img onClick={handleRedirectYt} src={YouTube} alt="YouTube Logo" className="youtube"/>
      <img onClick={handleRedirectTt} src={TikTok} alt="Tik Tok Logo" className="tiktok"/>
      <img src={Line} alt="Line" className="line"/>
    </div>
  );
}

export default FindUsPage;
