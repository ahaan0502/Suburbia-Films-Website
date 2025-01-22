import React from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../assets/videos/suburbiaintro.mp4'; // Import the image

function LandingPage() {

    const navigate = useNavigate();

  // Function to redirect when video ends
  const handleVideoEnd = () => {
    navigate('/main'); // Redirect to the desired route (e.g., /home)
  };

  return (
    <div>
      <video autoPlay muted onEnded={handleVideoEnd} className="video-background">
              <source src={video} type="video/mp4" />
            </video>
    </div>
  );
}

export default LandingPage;
