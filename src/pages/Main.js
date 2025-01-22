import React from 'react';
import Header from '../components/Header'; // Import the Header component
import '../App.css';
import './Main.css'; // Import the CSS file
import video from '../assets/videos/suburbiabackground.mp4'; // Import the image


function MainPage() {
  return (
    <div>
      <Header /> {/* Include the Header component here */}
      <video autoPlay loop muted className="video-background">
        <source src={video} type="video/mp4" />
      </video>
      <p className='a'>Welcome<br />to<br />Suburbia</p>
      <p className='c'>An inspired production studio,<br />created by Nick Romano.</p>
    </div>
  );
}

export default MainPage;
