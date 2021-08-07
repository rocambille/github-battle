import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const defaultTotalCount = {};

const TotalCountContext = createContext();

function TotalCountProvider({ children }) {
  const [totalCount, setTotalCount] = useState(defaultTotalCount);

  useEffect(() => {
    ['user', 'org'].forEach((type) => {
      fetch(`https://api.github.com/search/users?q=type%3A${type}`)
        .then((response) => response.json())
        .then((data) => {
          setTotalCount((previousTotalCount) => ({
            ...previousTotalCount,
            [type]: data.total_count,
          }));
        });
    });
  }, []);

  return (
    <TotalCountContext.Provider value={totalCount}>
      {children}
    </TotalCountContext.Provider>
  );
}

TotalCountProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useTotalCount = () => useContext(TotalCountContext);

export { TotalCountProvider, useTotalCount };
