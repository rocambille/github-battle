import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

import SearchBar from './SearchBar';

function Card() {
  const [url, setUrl] = useState();

  const [user] = useFetch(url);

  return user == null ? (
    <section>
      <h2>Who is your champion?</h2>
      <SearchBar
        setQuery={(username) =>
          setUrl(`https://api.github.com/users/${username}`)
        }>
        📞
      </SearchBar>
    </section>
  ) : (
    <figure>
      <img src={user.avatar_url} alt={user.login} />
      <figcaption>
        <h2>{user.login}</h2>
        <button type="button" onClick={() => setUrl()}>
          Change your champion
        </button>
      </figcaption>
    </figure>
  );
}

export default Card;
