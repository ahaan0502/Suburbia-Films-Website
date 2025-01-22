import React from 'react';
import Header from '../components/Header'; // Import the Header component
import '../App.css';
import './About.css';

function AboutPage() {
  return (
    <div>
      <Header /> {/* Include the Header component here */}
      <p className='a'>About</p>
      <p className='ca'>Lorem ipsum dolor sit amet,<br />
      consectetur adipiscing elit, sed do<br />
      eiusmod tempor incididunt ut labore<br />
      et dolore magna aliqua. Ut enim ad<br />
      minim veniam, quis nostrud<br />
      exercitation ullamco laboris nisi ut<br />
      aliquip ex ea commodo consequat. </p>
      <p className='cb'>Nick Romano</p>
      <div class="rectangle"></div>
    </div>
  );
}

export default AboutPage;
