import React from 'react';
import PropTypes from 'prop-types';

function NavBar({ pages, currentPath, setCurrentPath }) {
  return (
    <nav className="navbar">
      {pages.map((page) => (
        <button
          type="button"
          key={page.id}
          onClick={() => setCurrentPath(page.path)}
          className={`link${currentPath === page.path ? ' current-page' : ''}`}
        >
          {page.name}
        </button>
      ))}
    </nav>
  );
}

NavBar.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  currentPath: PropTypes.string.isRequired,
  setCurrentPath: PropTypes.func.isRequired,
};

export default NavBar;
