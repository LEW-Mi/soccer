import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import ClubPage from './pages/ClubPage';
import TablePage from './pages/TablePage';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <NavLink to="/">Главная</NavLink>
        {' | '}
        <NavLink to="/table">Таблица</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/club/:id" element={<ClubPage />} />
        <Route path="/table" element={<TablePage />} />
      </Routes>
    </Router>
  );
};

export default App;
