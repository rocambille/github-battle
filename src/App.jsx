import React, { useState } from 'react';
import './App.css';

import pages from './pages';

import NavBar from './components/NavBar';

function App() {
  const [currentPath, setCurrentPath] = useState(pages[0].path);

  const currentPage = pages.find((page) => page.path === currentPath);

  return (
    <>
      <NavBar
        pages={pages}
        currentPath={currentPath}
        setCurrentPath={setCurrentPath}
      />
      <currentPage.Component />
    </>
  );
}

export default App;
