import React, { useRef } from 'react';
import { element, func } from 'prop-types';

function SearchBar({ setQuery, children }) {
  const queryRef = useRef();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const query = queryRef.current.value;

        setQuery(query);
      }}>
      <input type="text" ref={queryRef} />
      <button type="submit">{children}</button>
    </form>
  );
}

SearchBar.propTypes = {
  setQuery: func.isRequired,
  children: element.isRequired,
};

export default SearchBar;
