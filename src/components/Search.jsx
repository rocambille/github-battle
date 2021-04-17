import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function Search({ handleQuery, buttonText }) {
  const inputRef = useRef();

  return (
    <>
      <input
        type="text"
        ref={inputRef}
      />
      <button
        type="button"
        onClick={() => {
          const query = inputRef.current.value;

          handleQuery(query);
        }}
      >
        {buttonText}
      </button>
    </>
  );
}

Search.propTypes = {
  handleQuery: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Search;
