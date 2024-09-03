import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import About from './pages/About';
import Club from './pages/Club';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video" element={<Video />} />
      <Route path="/about" element={<About />} />
      <Route path="/club" element={<Club />} />
    </Routes>
  </Router>
);

export default App;
