import React, { useState } from 'react';
import './App.css';

import About from './pages/About';
import Home from './pages/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('/home');

  return (
    <>
      <nav>
        <button type="button" onClick={() => setCurrentPage('/home')}>Home</button>
        <button type="button" onClick={() => setCurrentPage('/about')}>About</button>
      </nav>
      {currentPage === '/about'
        && <About />}
      {currentPage === '/home'
        && <Home />}
    </>
  );
}

export default App;
