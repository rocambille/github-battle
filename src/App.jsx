import React, { useState } from 'react';
import './App.css';

import pages from './pages';

import NavBar from './components/NavBar';
import { TotalCountProvider } from './contexts';

function App() {
  const [currentPath, setCurrentPath] = useState(pages[0].path);

  const currentPage = pages.find((page) => page.path === currentPath);

  return (
    <TotalCountProvider>
      <NavBar
        pages={pages}
        currentPath={currentPath}
        setCurrentPath={setCurrentPath}
      />
      <currentPage.Component />
    </TotalCountProvider>
  );
}

export default App;
