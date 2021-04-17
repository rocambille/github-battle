import React from 'react';
import PropTypes from 'prop-types';

const nav = {
  padding: '1rem',
  backgroundColor: 'rgb(36, 41, 46)',
  color: 'rgba(255, 255, 255, 0.7)',
};

const link = {
  marginRight: '1rem',
  textDecoration: 'none',
};

const currentPage = {
  ...link,
  color: 'inherit',
  outline: '1px solid #fff',
  outlineOffset: '4px',
};

function NavBar({ pages, currentPath, setCurrentPath }) {
  return (
    <nav style={nav}>
      {pages.map((page) => (
        <button
          type="button"
          key={page.id}
          onClick={() => setCurrentPath(page.path)}
          className="unstyle-button link color-white"
          style={currentPath === page.path ? currentPage : link}
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
