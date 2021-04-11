import React, { useState } from 'react';
import './App.css';

import pages from './pages';

function App() {
  const [currentPath, setCurrentPath] = useState(pages[0].path);

  const currentPage = pages.find((page) => page.path === currentPath);

  return (
    <>
      <nav>
        <button type="button" onClick={() => setCurrentPath('/home')}>Home</button>
        <button type="button" onClick={() => setCurrentPath('/about')}>About</button>
      </nav>
      <currentPage.Component />
    </>
  );
}

export default App;
