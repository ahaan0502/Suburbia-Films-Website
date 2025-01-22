import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';

import LandingPage from './pages/Landing';
import MainPage from './pages/Main';
import OurFilmsPage from './pages/OurFilms';
import AboutPage from './pages/About';
import FindUsPage from './pages/FindUs';

function App() {
  return (
    <Router>
        {/* Routes for different pages */}
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/ourfilms" element={<OurFilmsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/findus" element={<FindUsPage />} />
        </Routes>
    </Router>
  );
}

export default App;
