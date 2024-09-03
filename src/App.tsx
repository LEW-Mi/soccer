import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import About from './pages/About';
import Club from './pages/Club';
import MC from './pages/HomePagesClubs/MC';
import LIV from './pages/HomePagesClubs/LIV';
import BRY from './pages/HomePagesClubs/BRY';
import ARS from './pages/HomePagesClubs/ARS';
import NYCASL from './pages/HomePagesClubs/NYCASL';
import BREDF from './pages/HomePagesClubs/BREDF';
import ASTvilA from './pages/HomePagesClubs/ASTvilA';
import BORM from './pages/HomePagesClubs/BORM';
import FOREST from './pages/HomePagesClubs/FOREST';
import TOT from './pages/HomePagesClubs/TOT';
import CHEL from './pages/HomePagesClubs/CHEL';
import FULCH from './pages/HomePagesClubs/FULCH';
import VESHEM from './pages/HomePagesClubs/VESHEM';
import MANU from './pages/HomePagesClubs/MANU';
import LESTER from './pages/HomePagesClubs/LESTER';
import PELAS from './pages/HomePagesClubs/PELAS';
import VULVERRCH from './pages/HomePagesClubs/VULVERRCH';
import IPCVICH from './pages/HomePagesClubs/IPCVICH';
import SAUTGEMP from './pages/HomePagesClubs/SAUTGEMP';
import EVER from './pages/HomePagesClubs/EVER';


const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video" element={<Video />} />
      <Route path="/about" element={<About />} />
      <Route path="/club" element={<Club />} />
      <Route path="/club/1" element={<MC />} />
      <Route path="/club/2" element={<LIV />} />
      <Route path="/club/3" element={<BRY />} />
      <Route path="/club/4" element={<ARS />} />
      <Route path="/club/5" element={<NYCASL />} />
      <Route path="/club/6" element={<BREDF />} />
      <Route path="/club/7" element={<ASTvilA />} />
      <Route path="/club/8" element={<BORM />} />
      <Route path="/club/9" element={<FOREST />} />
      <Route path="/club/10" element={<TOT />} />
      <Route path="/club/11" element={<CHEL />} />
      <Route path="/club/12" element={<FULCH />} />
      <Route path="/club/13" element={<VESHEM />} />
      <Route path="/club/14" element={<MANU />} />
      <Route path="/club/15" element={<LESTER />} />
      <Route path="/club/16" element={<PELAS />} />
      <Route path="/club/17" element={<IPCVICH />} />
      <Route path="/club/18" element={<VULVERRCH />} />
      <Route path="/club/19" element={<SAUTGEMP />} />
      <Route path="/club/20" element={<EVER />} />
      </Routes>
  </Router>
);

export default App;
