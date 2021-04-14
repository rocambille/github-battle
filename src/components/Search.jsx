import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function Search({ onTextChange, buttonText }) {
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
          const currentText = inputRef.current.value;

          onTextChange(currentText);
        }}
      >
        {buttonText}
      </button>
    </>
  );
}

Search.propTypes = {
  onTextChange: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Search;
