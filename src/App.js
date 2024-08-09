import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EventList from './components/EventList';
import About from './components/About';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Predicciones Deportivas</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Hogar</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">Acerca de</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;