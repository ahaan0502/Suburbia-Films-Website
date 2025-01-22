import React from 'react';
import '../App.css';
import './OurFilms.css';
import Header from '../components/Header'; // Import the Header component
import Line from '../assets/icons/Line.png';

function OurFilmsPage() {
  return (
    <div className='container'>
      <Header /> {/* Include the Header component here */}
      <p className='a'>Our Films</p>
      <p className='baa'>I Am He</p>
      <p className="db">Directed by: Nick Romano<br />Written by: Nick Romano</p>
      <p className='bba'>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit, sed do eiusmod tempor<br />incididunt ut labore et dolore magna aliqua. Ut<br />enim ad minim veniam, quis nostrud<br />exercitation ullamco laboris nisi ut aliquip ex<br />ea commodo consequat. Duis aute irure dolor in</p>
      
      <p className='bab'>The Visitor</p>
      <p className="dc">Directed by: Nick Romano<br />Written by: Nick Romano</p>
      <p className='bbb'>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit, sed do eiusmod tempor<br />incididunt ut labore et dolore magna aliqua. Ut<br />enim ad minim veniam, quis nostrud<br />exercitation ullamco laboris nisi ut aliquip ex<br />ea commodo consequat. Duis aute irure dolor in</p>
      
      <p className='bac'>The Choice</p>
      <p className="dd">Directed by: Nick Romano<br />Written by: Nick Romano</p>
      <p className='bbc'>A horror/slasher-inspired short film where a girl<br />must decide to run and save herself or to fight<br />and try to save a life.</p>
      
      <p className='bad'>New Year's Eve LIVE!<br />With Ubo the Alien</p>
      <p className="de">Directed by: Nick Romano<br />Written by: Nick Romano</p>
      <p className='bbd'>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit, sed do eiusmod tempor<br />incididunt ut labore et dolore magna aliqua. Ut<br />enim ad minim veniam, quis nostrud<br />exercitation ullamco laboris nisi ut aliquip ex<br />ea commodo consequat. Duis aute irure dolor in</p>
      
      <img src={Line} alt="line1" className="line1"/>
      <img src={Line} alt="line2" className="line2"/>
      <img src={Line} alt="line3" className="line3"/>
      <img src={Line} alt="line4" className="line4"/>
      <img src={Line} alt="line5" className="line5"/>
      
      <div className="video-container1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/RCn0gesX5o4?si=S6uqYL59HAfodf_J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className="video-container2">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/otjHmne6Cvg?si=LSailIWlXfHv5Xbh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className="video-container3">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/fPwnEoMVfak?si=uwjjgR_VEHqmRHRW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className="video-container4">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/w15kqzDk-Iw?si=3rCag83OLGne1FAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
 
    </div>
  );
}

export default OurFilmsPage;
